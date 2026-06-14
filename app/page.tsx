
import { MainTitle } from '@mcpab/web-blocks';
import { NextImageAdapter } from '@/src/components/NextImageAdapter';
import {BannerStatic} from '@mcpab/web-blocks';

export default function HomePage(): React.ReactElement {
  return (
    <main>

      <BannerStatic ImageComponent={NextImageAdapter} image={{
        src: '/img/PIA20038~orig.jpg',
        objectPosition: '50% 20%',
        priority: true,
      }} size='md' >
        <MainTitle
          title='Bach and Physics' subtitle='Notes on Mathematics, Physics, and Harmony'
          autoCapitalize   // default: true
          slotProps={{
            title: {
              color: 'primary.main',
            },
            subtitle: {
              sx: {
                color: 'primary.main',
                fontSize: "20px",
                lineHeight: 1.18,
                maxWidth: "30ch",
                opacity: 0.92,
              },
            }

          }}
        />
      </BannerStatic>
    </main>
  );
}
