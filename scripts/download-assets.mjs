import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

const BASE = 'https://www.fotomatonbarcelona.es';
const PUBLIC = 'public';

const images = [
  '/wp-content/uploads/2023/06/logo-fotomaton-barcelona.svg',
  '/wp-content/themes/fotomaton-barcelona/assets/img/logo-fotomaton-barcelona.svg',
  '/wp-content/themes/fotomaton-barcelona/assets/img/logo-fotomaton-barcelona-footer.svg',
  '/wp-content/themes/fotomaton-barcelona/assets/img/ico-arrow.svg',
  '/wp-content/themes/fotomaton-barcelona/assets/img/Fotomaton-Barcelona-Fotomaton-para-eventos.jpg',
  '/wp-content/uploads/2024/09/fotomaton-madera.jpg',
  '/wp-content/uploads/2024/09/fotomaton-pantalla-lateral-boda.jpg',
  '/wp-content/uploads/2024/09/fotomaton-evento-empresa.jpg',
  '/wp-content/uploads/2024/09/videomaton-360.jpg',
  '/wp-content/uploads/2024/09/fotomaton-espejo-mirror-booth.jpg',
  '/wp-content/uploads/2024/09/voguebooth-led-fotomaton.jpg',
  '/wp-content/uploads/2024/09/videomaton-photocall-personalizado.jpg',
  '/wp-content/uploads/2024/09/totem-fotomaton-pantalla.jpg',
  '/wp-content/uploads/2025/02/Fotomaton-Barcelona-Alquilar-Fotomaton.jpg',
  '/wp-content/uploads/2024/05/Fotomaton-Eventos-Barcelona-scaled.jpg',
  '/wp-content/uploads/2024/05/Videomaton-360-Evento-corporativo.jpg',
  '/wp-content/uploads/2024/09/fotomaton-classic-vinilado-evento.jpg',
  '/wp-content/uploads/2024/09/Fotomaton-eventos-personalizado-1518x1600.jpg',
  '/wp-content/uploads/2026/04/fotomaton-firma-eventos.jpg',
  '/wp-content/uploads/2023/08/vogue-photo-booth-led-1600x1600.jpg',
  '/wp-content/uploads/2024/05/Fotomaton-Espejo.jpg',
  '/wp-content/uploads/2026/05/fotomaton-retro-vintage.webp',
  '/wp-content/uploads/2024/08/Photocall-Red-Carpet-1600x1600.jpg',
  '/wp-content/uploads/2023/07/fotografias-personalizadas-1600x1600.jpg',
  '/wp-content/uploads/2023/07/letras-iluminadas-boda-E-J-madera.jpeg',
  '/wp-content/uploads/2024/05/fotomaton-purikura-maquina.jpg',
  '/wp-content/uploads/2025/04/Fotografo-itinerante.jpg',
  '/wp-content/uploads/2025/04/azafato-smartphoto.jpg',
  '/wp-content/uploads/2025/04/azafato-instax-polaroid.jpg',
  '/wp-content/uploads/2023/06/fotomaton-eventos-empresa-1600x1600.jpg',
  '/wp-content/uploads/2025/02/Fotomaton-smart-2.jpg',
  '/wp-content/uploads/2023/07/fotografia-personalizada-impresora-smartphone-1600x1600.jpg',
  '/wp-content/uploads/2023/06/letras-madera-iluminadas-1600x1600.jpg',
  '/wp-content/uploads/2023/07/fotomaton-mini-boda.jpg',
  '/wp-content/uploads/2023/07/fotografo-photocall-boda-1600x1600.jpg',
  '/wp-content/uploads/2025/04/fotografo-itinerante-para-eventos.jpg',
  '/wp-content/uploads/2023/06/fotomaton.png',
  '/wp-content/uploads/2023/07/videomaton-spin-360-1200x1200.png',
  '/wp-content/uploads/2023/07/fotomaton-mini-madera-1200x1200.png',
  '/wp-content/uploads/2024/05/Fotomaton-Smart-1200x1200.png',
  '/wp-content/uploads/2023/06/fotomaton-espejo-mirror-booth-1200x1200.png',
  '/wp-content/uploads/2024/05/Glambot-Brazo-Robotico-1200x1200.png',
  '/wp-content/uploads/2023/07/A-letras-iluminadas-luces-madera-1200x1200.png',
  '/wp-content/uploads/2024/05/Fotomaton-Cenital-1200x1200.png',
  '/wp-content/uploads/2024/10/Super-Zoom-3-1200x1200.png',
  '/wp-content/uploads/2025/02/Bacardi-cliente-Fotomaton-Barcelona.png',
  '/wp-content/uploads/2023/06/Cartier-cliente-Fotomaton-Barcelona.png',
  '/wp-content/uploads/2023/06/HM-cliente-moda-Fotomaton-Barcelona.png',
  '/wp-content/uploads/2023/06/Intel-cliente-tecnologico-Fotomaton-Barcelona.png',
  '/wp-content/uploads/2024/09/fotomaton-video-360.jpg',
  '/wp-content/uploads/2024/09/Fotomaton-IA-ficcion-heroe-1240x1600.jpg',
  '/wp-content/uploads/2024/05/Fotomaton-Mosaico-Wall-team-building.jpg',
  '/wp-content/uploads/2024/09/fotomaton-catwalk-set-up.jpg',
  '/wp-content/uploads/2024/05/Fotomaton-Barcelona-Cenital-Evento-Corporativo-1600x1600.jpg',
  '/wp-content/uploads/2023/08/brazo-robotico-1600x1600.jpg',
  '/wp-content/uploads/2024/10/Super-Zoom-3-1600x1600.png',
  '/wp-content/uploads/2023/07/fotomaton-video-360-confeti-boda-1600x1600.jpg',
  '/wp-content/uploads/2024/07/Fotomaton-Glam-Blanco-y-Negro-1600x1200.jpg',
  '/wp-content/uploads/2024/05/PHOTO-2024-06-26-12-23-28.jpg',
  '/wp-content/uploads/2023/07/impresora-printoku-fotos-personalizadas-boda-1600x1600.jpg',
  '/wp-content/uploads/2023/06/cropped-favicon-fotomaton-32x32.png',
  '/wp-content/uploads/2023/06/cropped-favicon-fotomaton-192x192.png',
  '/wp-content/uploads/2023/06/cropped-favicon-fotomaton-180x180.png',
];

const socialIcons = [
  '/wp-content/themes/fotomaton-barcelona/assets/img/icob2-x.svg',
  '/wp-content/themes/fotomaton-barcelona/assets/img/icob-tiktok.svg',
  '/wp-content/themes/fotomaton-barcelona/assets/img/icob-linkedin.svg',
  '/wp-content/themes/fotomaton-barcelona/assets/img/icob-facebook.svg',
  '/wp-content/themes/fotomaton-barcelona/assets/img/icob-instagram.svg',
  '/wp-content/themes/fotomaton-barcelona/assets/img/icob-youtube.svg',
];

const fonts = [
  '/wp-content/themes/fotomaton-barcelona/assets/fonts/Platform-Regular.woff2',
  '/wp-content/themes/fotomaton-barcelona/assets/fonts/SuisseBPIntl-Regular.woff2',
];

async function ensureDir(dir) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function download(url, destPath) {
  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      console.error(`Failed to download ${url}: ${resp.status}`);
      return;
    }
    const buffer = await resp.arrayBuffer();
    await writeFile(destPath, Buffer.from(buffer));
    console.log(`Downloaded: ${destPath}`);
  } catch (err) {
    console.error(`Error downloading ${url}: ${err.message}`);
  }
}

async function main() {
  await ensureDir(join(PUBLIC, 'images'));
  await ensureDir(join(PUBLIC, 'images', 'services'));
  await ensureDir(join(PUBLIC, 'images', 'products'));
  await ensureDir(join(PUBLIC, 'images', 'clients'));
  await ensureDir(join(PUBLIC, 'images', 'hero'));
  await ensureDir(join(PUBLIC, 'images', 'about'));
  await ensureDir(join(PUBLIC, 'images', 'icons'));
  await ensureDir(join(PUBLIC, 'fonts'));
  await ensureDir(join(PUBLIC, 'seo'));
  await ensureDir(join(PUBLIC, 'videos'));

  const allDownloads = [];

  // Download images
  for (const imgPath of images) {
    const fileName = imgPath.split('/').pop();
    let destDir = join(PUBLIC, 'images');
    
    if (imgPath.includes('/uploads/2024/09/') && (imgPath.includes('fotomaton-madera') || imgPath.includes('fotomaton-pantalla-lateral') || imgPath.includes('fotomaton-evento-empresa') || imgPath.includes('videomaton-360') || imgPath.includes('fotomaton-espejo-mirror') || imgPath.includes('voguebooth') || imgPath.includes('videomaton-photocall') || imgPath.includes('totem-fotomaton'))) {
      destDir = join(PUBLIC, 'images', 'hero');
    } else if (imgPath.includes('fotomaton.png') || imgPath.includes('videomaton-spin') || imgPath.includes('fotomaton-mini-madera') || imgPath.includes('Fotomaton-Smart-1200') || imgPath.includes('fotomaton-espejo-mirror-booth-1200') || imgPath.includes('Glambot-Brazo') || imgPath.includes('A-letras-iluminadas') || imgPath.includes('Fotomaton-Cenital-1200') || imgPath.includes('Super-Zoom-3-1200') || imgPath.includes('fotomaton-purikura-maquina.jpg')) {
      destDir = join(PUBLIC, 'images', 'products');
    } else if (imgPath.includes('cliente')) {
      destDir = join(PUBLIC, 'images', 'clients');
    } else if (imgPath.includes('Fotomaton-Barcelona-Alquilar') || imgPath.includes('Fotomaton-Eventos-Barcelona') || imgPath.includes('Videomaton-360-Evento')) {
      destDir = join(PUBLIC, 'images', 'about');
    } else if (imgPath.includes('favicon')) {
      destDir = join(PUBLIC, 'seo');
    } else if (imgPath.includes('fotomaton-video-360') || imgPath.includes('Fotomaton-IA-ficcion') || imgPath.includes('Fotomaton-Mosaico') || imgPath.includes('fotomaton-catwalk') || imgPath.includes('Fotomaton-Barcelona-Cenital') || imgPath.includes('brazo-robotico') || imgPath.includes('Super-Zoom-3-1600') || imgPath.includes('fotomaton-video-360-confeti') || imgPath.includes('Fotomaton-Glam-Blanco') || imgPath.includes('PHOTO-2024') || imgPath.includes('impresora-printoku')) {
      destDir = join(PUBLIC, 'images', 'services');
    }
    
    allDownloads.push(download(`${BASE}${imgPath}`, join(destDir, fileName)));
  }

  // Download social icons
  for (const iconPath of socialIcons) {
    const fileName = iconPath.split('/').pop();
    allDownloads.push(download(`${BASE}${iconPath}`, join(PUBLIC, 'images', 'icons', fileName)));
  }

  // Download fonts
  for (const fontPath of fonts) {
    const fileName = fontPath.split('/').pop();
    allDownloads.push(download(`${BASE}${fontPath}`, join(PUBLIC, 'fonts', fileName)));
  }

  // Download videos
  const videos = [
    '/videos/Videomaton-360-evento.mp4',
    '/videos/Fotomaton-IA.mp4',
    '/videos/Fotomaton-Glam.mp4',
    '/videos/Fotomaton-Walk.mp4',
    '/videos/Glambot-brazo-robotico.mp4',
    '/videos/Fotomaton-Mosaic-Wall.mp4',
    '/videos/Fotomaton-Cenital.mp4',
    '/videos/Fotomaton-SuperZoom.mp4',
    '/videos/Videomaton-360-Boda.mp4',
    '/videos/Impresora-fotos-smartphone-Printoku.mp4',
  ];
  
  for (const videoPath of videos) {
    const fileName = videoPath.split('/').pop();
    allDownloads.push(download(`${BASE}${videoPath}`, join(PUBLIC, 'videos', fileName)));
  }

  // Download OG image
  allDownloads.push(download(
    'https://www.fotomatonbarcelona.es/wp-content/uploads/2024/09/fotomaton-pantalla-lateral-boda.jpg?_t=1782744205',
    join(PUBLIC, 'seo', 'og-image.jpg')
  ));

  // Batch download (4 at a time)
  for (let i = 0; i < allDownloads.length; i += 4) {
    await Promise.all(allDownloads.slice(i, i + 4));
  }

  console.log('\nAll downloads complete!');
}

main().catch(console.error);
