import { DevelopServiceList, DevelopServiceListStages } from "@/shared/CONST";
import { StaticImageData } from "next/image";

// export interface StageCardProps{
//     name:string;
//     descr:string;
//     imgUrl:StaticImageData;
// }
export interface ServiceCardProps extends DevelopServiceListStages{
    action:() => void;
}
export interface ImgInterface {
  id?: string;
  url: any; // Для Next.js Image или строки
  alt?: string;
  blurDataURL?: string;
  // Добавляем тип для определения видео/изображения
  type?: 'image' | 'video';
  // Или можно определить union тип
}

// Или создадим отдельный интерфейс для видео
export interface VideoInterface {
  url: string; // Строка для видео URL
  type: 'video';
  id?: string;
  title?: string;
}

export interface ImageInterface {
  url: any; // StaticImageData для Next.js
  type: 'image';
  id?: string;
  alt?: string;
  blurDataURL?: string;
}

export type MediaItem = ImageInterface | VideoInterface;
export interface WorkDetailItem {
  title: string;
  description: string;
}

export interface WorkProblem {
  title: string;
  description: string;
  solution?: string;
}

export interface WorkDetails {
  fullDescription: string;
  technologies: string[];
  features: WorkDetailItem[];
  problems: WorkProblem[];
}
export interface WorksCardProps {
  name: string;
  descr: string;
  imgUrls: ImgInterface[];
  details?: WorkDetails;
}