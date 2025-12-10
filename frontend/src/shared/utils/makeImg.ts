// utils/makeImg.ts
import { MediaItem } from '@/shared/ui/card/type';

export function makeImg(prefix: string, items: Array<any>): MediaItem[] {
  return items.map((item, index) => {
    // Если item уже имеет правильную структуру MediaItem
    if (item && typeof item === 'object' && 'type' in item) {
      return {
        ...item,
        id: item.id || `${prefix}_${index}`,
        alt: item.alt || `${prefix} ${item.type === 'video' ? 'video' : `image ${index + 1}`}`,
      };
    }
    
    // Если это объект с полем url (для видео)
    if (item && typeof item === 'object' && 'url' in item) {
      const isVideo = item.url.toString().match(/\.(mp4|webm|ogg|mov|avi)$/i);
      return {
        url: item.url,
        type: isVideo ? 'video' as const : 'image' as const,
        id: item.id || `${prefix}_${index}`,
        alt: item.alt || (isVideo ? `${prefix} video` : `${prefix} image ${index + 1}`),
      };
    }
    
    // Если это StaticImageData (Next.js image import)
    if (item && typeof item === 'object' && 'src' in item) {
      return {
        url: item,
        type: 'image' as const,
        id: `${prefix}_${index}`,
        alt: `${prefix} image ${index + 1}`,
      };
    }
    
    // Если это строка URL
    if (typeof item === 'string') {
      const isVideo = item.match(/\.(mp4|webm|ogg|mov|avi)$/i);
      return {
        url: item,
        type: isVideo ? 'video' as const : 'image' as const,
        id: `${prefix}_${index}`,
        alt: isVideo ? `${prefix} video` : `${prefix} image ${index + 1}`,
      };
    }
    
    // Дефолтное значение
    return {
      url: '',
      type: 'image' as const,
      id: `${prefix}_${index}`,
      alt: `${prefix} image ${index + 1}`,
    };
  });
}