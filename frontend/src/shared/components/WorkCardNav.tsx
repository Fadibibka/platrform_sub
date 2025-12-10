'use client'

import Image from "next/image"
import { WorksCardProps } from "../ui/card/type"
import React, { memo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ArrowSvg from "@/shared/assets/svg/ArrorSvgV2.svg"
import { useInView } from "react-intersection-observer"
import { AddOptionalField } from "../utils/type"
import ReactPlayer from 'react-player' 

type WorkCardImgsProps = AddOptionalField<Pick<WorksCardProps, "imgUrls">, "indx", number>

const WorkCardNav = ({ imgUrls, indx }: WorkCardImgsProps) => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: false,
    })
    
    const [idx, setIdx] = useState(indx || 0)
    
    // Находим первую картинку из списка для заглушки
    const findFirstImage = () => {
        // Ищем первое изображение в массиве
        for (let i = 0; i < imgUrls.length; i++) {
            if (imgUrls[i].type === "image") {
                return imgUrls[i].url
            }
        }
        // Если нет изображений, возвращаем пустую строку
        return ""
    }
    
    const firstImageUrl = findFirstImage()
    const currentItem = imgUrls[idx]

    return (
        <>
            <button 
                className="WorkCardNavBtn Left" 
                onClick={() => {
                    setIdx((prev) => (prev - 1 < 0) ? imgUrls.length - 1 : prev - 1)
                }}
            >
                <ArrowSvg className="ArrowSvg Left"/>
            </button>
            <button 
                className="WorkCardNavBtn Right"
                onClick={() => {
                    setIdx(prev => (prev + 1) % imgUrls.length)
                }}
            >
                <ArrowSvg className="ArrowSvg Right"/>
            </button>
            
            <div ref={ref} className="WorksCardImgsWp">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentItem.id + (inView ? "-play" : "-preview")}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="WorksCardImg"
                    >
                        {inView ? (
                            currentItem.type === "video" ? (
                                <ReactPlayer
                                    src={currentItem.url}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    width="100%"
                                    height="100%"
                                    className="WorksCardImg"
                                />
                            ) : (
                                <Image
                                    src={currentItem.url}
                                    alt={currentItem.alt || "work image"}
                                    className="WorksCardImg"
                                    placeholder={currentItem.blurDataURL ? "blur" : undefined}
                                    blurDataURL={currentItem.blurDataURL}
                                    priority
                                />
                            )
                        ) : (
                            // Плейсхолдер - используем первую картинку из списка или дефолт
                            <Image
                                src={firstImageUrl || "/placeholder-image.jpg"}
                                alt="preview"
                                className="WorksCardImg"
                                placeholder="blur"
                                blurDataURL={imgUrls[0]?.blurDataURL}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </>
    )
}

export default memo(WorkCardNav)