import Image, { type ImageProps } from 'next/image';
import type { ImageComponentLike, UniversalImageProps } from '@mcpab/web-blocks';

export const NextImageAdapter: ImageComponentLike = (
  props: UniversalImageProps,
): React.ReactElement => {
  return <Image  {...(props as ImageProps)} alt={props.alt}  />;
};
