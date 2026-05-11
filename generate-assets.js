import fs from 'fs';
import sharp from 'sharp';

const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#c8981e"><path d="M12.0002 2L12 5.0003L12.002 5.0003C15.4851 5.0003 18.966 6.32626 21.6163 8.97745L22.3235 8.27042C19.2638 5.21043 15.2281 3.57863 11.0002 3.86431V2H12.0002ZM10.0002 2V3.86431C5.77227 3.57863 1.7366 5.21043 -1.33418 8.27042L-0.627052 8.97745C2.02322 6.32626 5.50417 5.0003 8.9873 5.0003L9.0002 5.0003L9.0002 2H10.0002ZM19.293 11.2072C20.655 12.5693 21.0504 14.5672 20.3168 16.3278L21.2393 17.2503C22.3023 15.0315 21.8485 12.2471 19.9999 10.5003L19.293 11.2072ZM4.70732 11.2072L4.0004 10.5003C2.1518 12.247 1.69794 15.0314 2.76088 17.2503L3.6834 16.3278C2.94982 14.5672 3.34522 12.5693 4.70732 11.2072ZM12.0002 11.0003C15.3139 11.0003 18.0002 13.6866 18.0002 17.0003V18.0003H6.0002V17.0003C6.0002 13.6866 8.68649 11.0003 12.0002 11.0003ZM12.0002 13.0003C9.79106 13.0003 8.0002 14.7912 8.0002 17.0003H16.0002C16.0002 14.7912 14.2093 13.0003 12.0002 13.0003ZM8.00043 20.0001V22.0001H16.0004V20.0001H8.00043Z"></path></svg>`;

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0f172a" />
  
  <rect width="1200" height="630" fill="#c8981e" opacity="0.05" />

  <g transform="translate(600, 240) scale(4)">
    <path d="M12.0002 2L12 5.0003L12.002 5.0003C15.4851 5.0003 18.966 6.32626 21.6163 8.97745L22.3235 8.27042C19.2638 5.21043 15.2281 3.57863 11.0002 3.86431V2H12.0002ZM10.0002 2V3.86431C5.77227 3.57863 1.7366 5.21043 -1.33418 8.27042L-0.627052 8.97745C2.02322 6.32626 5.50417 5.0003 8.9873 5.0003L9.0002 5.0003L9.0002 2H10.0002ZM19.293 11.2072C20.655 12.5693 21.0504 14.5672 20.3168 16.3278L21.2393 17.2503C22.3023 15.0315 21.8485 12.2471 19.9999 10.5003L19.293 11.2072ZM4.70732 11.2072L4.0004 10.5003C2.1518 12.247 1.69794 15.0314 2.76088 17.2503L3.6834 16.3278C2.94982 14.5672 3.34522 12.5693 4.70732 11.2072ZM12.0002 11.0003C15.3139 11.0003 18.0002 13.6866 18.0002 17.0003V18.0003H6.0002V17.0003C6.0002 13.6866 8.68649 11.0003 12.0002 11.0003ZM12.0002 13.0003C9.79106 13.0003 8.0002 14.7912 8.0002 17.0003H16.0002C16.0002 14.7912 14.2093 13.0003 12.0002 13.0003ZM8.00043 20.0001V22.0001H16.0004V20.0001H8.00043Z" fill="#c8981e" transform="translate(-12, -12)" />
  </g>
  <g transform="translate(600, 420)">
    <text x="0" y="0" font-family="serif" font-size="64" font-weight="bold" fill="#ffffff" text-anchor="middle">Cicarelli Advogados</text>
    <text x="0" y="60" font-family="sans-serif" font-size="32" fill="#9ca3af" text-anchor="middle">Especialistas em Direito da Saúde</text>
  </g>
</svg>`;

async function makeFiles() {
  await sharp(Buffer.from(svgIcon))
    .resize(32, 32)
    .toFile('./public/favicon.png');
  
  await sharp(Buffer.from(svgIcon))
    .resize(192, 192)
    .toFile('./public/android-chrome-192x192.png');
    
  await sharp(Buffer.from(svgIcon))
    .resize(512, 512)
    .toFile('./public/android-chrome-512x512.png');
    
  await sharp(Buffer.from(svgIcon))
    .resize(180, 180)
    .toFile('./public/apple-touch-icon.png');
    
  await sharp(Buffer.from(ogSvg))
    .toFile('./public/og-image.png');
}

makeFiles().then(() => console.log('Done'));
