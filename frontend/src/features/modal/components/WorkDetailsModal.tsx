// WorkDetailsModal.tsx
'use client'

import { AppDispatch, RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { getTargetModalConf, selectModalByKey } from "../model/secletors"
import { useDispatch } from "react-redux"
import { closeTargetModal, createOrToogleModal } from "../model/modalSlice" // Используем из той же папки
import CrossSvg from "@/shared/assets/svg/CrossSvg.svg"
import Image from "next/image"
import { MediaItem, VideoInterface, ImageInterface, WorkDetails } from "@/shared/ui/card/type"
import { useEffect, useState } from "react"
import '../index.css'
import ReactPlayer from 'react-player'

const keyModal = 'WorkDetailsModal'
const name = 'WorkDetailsModal'

export type WorkDetailsModalData = {
  name: string;
  descr: string;
  imgUrls: MediaItem[];
  details?: WorkDetails;
}

// Type guard для видео
const isVideo = (item: MediaItem): item is VideoInterface => {
  return item.type === 'video'
}

// Type guard для изображения
const isImage = (item: MediaItem): item is ImageInterface => {
  return item.type === 'image'
}

export default function WorkDetailsModal() {
  const dispatch = useDispatch<AppDispatch>()
  const isActive = useSelector((st: RootState) => selectModalByKey(st, keyModal, name))
  const modalConf = useSelector((st: RootState) => getTargetModalConf<WorkDetailsModalData>(st, keyModal))
  
  const closeModal = () => {
    dispatch(closeTargetModal({ key: keyModal }))
  }

  const openImageModal = (startIndex: number) => {
    if (!modalConf.status || !modalConf.more) return
    
    dispatch(closeTargetModal({ key: keyModal }))

    const photos = modalConf.more.imgUrls.filter(isImage)
    
    dispatch(createOrToogleModal({
      key: 'WorksImgModal',
      modal: {
        name: 'WorksImgModalImgs',
        status: true,
        priority: 100,
        more: {
          imgs: photos,
          curIdx: startIndex,
          backTo: keyModal,
          originData: modalConf // Передаем весь объект modalConf
        }
      }
    }))
  }

  useEffect(() => {
    if (isActive && modalConf.status) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isActive, modalConf.status])

  // Ранний возврат если модалка не активна или нет данных
  if (!isActive || !modalConf.status || !modalConf.more) {
    return null
  }

  const { name: workName, descr, imgUrls, details } = modalConf.more
  
  // Разделяем медиа на видео и фото
  const videos = imgUrls.filter(isVideo)
  const photos = imgUrls.filter(isImage)
  
  return (
    <div 
      className="work-details-modal-overlay"
      onClick={closeModal}
    >
      <div 
        className="work-details-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="work-details-modal-close-btn"
          onClick={closeModal}
        >
          <CrossSvg className="work-details-modal-close-icon" />
        </button>

        <div className="work-details-modal-content">
          {/* Левая часть - медиа */}
          <div className="work-details-modal-media">
            {/* Видео на первом месте */}
            {videos.length > 0 ? (
              <div className="work-details-video-container">
                <ReactPlayer
                  src={videos[0].url}
                  controls={true}
                  autoPlay
                  loop
                  muted
                  playsInline
                  width="100%"
                  height="100%"
                  className="work-details-video-player"
                />
              </div>
            ) : (
              <div className="work-details-no-video">
                <div className="work-details-no-video-icon">🎬</div>
                <p>Видео недоступно</p>
              </div>
            )}

            {/* Все остальные фото в скролле */}
            {photos.length > 0 && (
              <div className="work-details-photos-scroll-container">
                <div className="work-details-photos-grid">
                  {photos.map((photo, index) => (
                    <div 
                      key={photo.id || `photo-${index}`} 
                      className="work-details-photo-item" 
                      onClick={() => openImageModal(index)}
                    >
                      <div className="work-details-photo-wrapper">
                        <Image
                          src={photo.url}
                          alt={photo.alt || `${workName} - фото ${index + 1}`}
                          fill
                          style={{ objectFit: 'cover' }}
                          className="work-details-photo-image"
                        />
                      </div>
                      <span className="work-details-photo-number">#{index + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="work-details-modal-info">
            <div className="work-details-info-content">
              {/* Заголовок */}
              <div className="work-details-header">
                <h2 className="work-details-title">{workName}</h2>
                <p className="work-details-subtitle">{descr}</p>
              </div>
              {details?.fullDescription && (
                <div className="work-details-section">
                  <h3 className="work-details-section-title">Описание проекта</h3>
                  <p className="work-details-description">{details.fullDescription}</p>
                </div>
              )}
              {details?.technologies && details.technologies.length > 0 && (
                <div className="work-details-section">
                  <h3 className="work-details-section-title">Используемые технологии</h3>
                  <div className="work-details-technologies">
                    {details.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="work-details-technology"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {details?.features && details.features.length > 0 && (
                <div className="work-details-section">
                  <h3 className="work-details-section-title">Особенности</h3>
                  <div className="work-details-features">
                    {details.features.map((feature, index) => (
                      <div key={index} className="work-details-feature">
                        <h4 className="work-details-feature-title">{feature.title}</h4>
                        <p className="work-details-feature-description">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {details?.problems && details.problems.length > 0 && (
                <div className="work-details-section">
                  <h3 className="work-details-section-title">Проблемы и решения</h3>
                  <div className="work-details-problems">
                    {details.problems.map((problem, index) => (
                      <div key={index} className="work-details-problem">
                        <div className="work-details-problem-content">
                          <h4 className="work-details-problem-title">Проблема: {problem.title}</h4>
                          <p className="work-details-problem-description">{problem.description}</p>
                        </div>
                        {problem.solution && (
                          <div className="work-details-solution">
                            <h5 className="work-details-solution-title">Решение:</h5>
                            <p className="work-details-solution-description">{problem.solution}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}