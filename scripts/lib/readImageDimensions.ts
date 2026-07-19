import fs from "node:fs";

export type ImageDimensions = {
  width: number;
  height: number;
};

function readPngDimensions(image: Buffer): ImageDimensions | undefined {
  const pngSignature = "89504e470d0a1a0a";

  if (image.length < 24 || image.subarray(0, 8).toString("hex") !== pngSignature) {
    return undefined;
  }

  return {
    width: image.readUInt32BE(16),
    height: image.readUInt32BE(20),
  };
}

function readJpegDimensions(image: Buffer): ImageDimensions | undefined {
  if (image.length < 4 || image[0] !== 0xff || image[1] !== 0xd8) {
    return undefined;
  }

  const startOfFrameMarkers = new Set([
    0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7,
    0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf,
  ]);
  let offset = 2;

  while (offset + 8 < image.length) {
    if (image[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = image[offset + 1];
    offset += 2;

    if (marker === 0xd8 || marker === 0xd9 || marker === 0x01) {
      continue;
    }

    if (marker >= 0xd0 && marker <= 0xd7) {
      continue;
    }

    if (offset + 2 > image.length) {
      return undefined;
    }

    const segmentLength = image.readUInt16BE(offset);

    if (startOfFrameMarkers.has(marker) && offset + 7 < image.length) {
      return {
        width: image.readUInt16BE(offset + 5),
        height: image.readUInt16BE(offset + 3),
      };
    }

    if (segmentLength < 2) {
      return undefined;
    }

    offset += segmentLength;
  }

  return undefined;
}

export function readImageDimensions(
  imagePath: string,
): ImageDimensions | undefined {
  if (!fs.existsSync(imagePath)) {
    return undefined;
  }

  const image = fs.readFileSync(imagePath);
  return readPngDimensions(image) ?? readJpegDimensions(image);
}
