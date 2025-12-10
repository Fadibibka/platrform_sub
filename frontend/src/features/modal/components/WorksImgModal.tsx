// WorksImgModal.tsx
'use client'
import { AppDispatch, RootState } from "@/store/store"
import { useSelector } from "react-redux"
import { getTargetModalConf, selectModalByKey } from "../model/secletors"
import { useDispatch } from "react-redux"
import { closeTargetModal, createOrToogleModal } from "../model/modalSlice"
import WorkCardNav from "@/shared/components/WorkCardNav"
import CrossSvg from "@/shared/assets/svg/CrossSvg.svg"
import { ImgInterface, MediaItem, ImageInterface } from "@/shared/ui/card/type"

const keymodal = 'WorksImgModal'
const name = 'WorksImgModalImgs'

export type MorelWorksDataType = {
    imgs: ImageInterface[],
    curIdx: number,
    backTo?: string,
    originData?: any
}

export default function WorksImgModal(){
    const dispatch = useDispatch<AppDispatch>()

    const isActive  = useSelector((st:RootState) =>
        selectModalByKey(st, keymodal, name)
    )

    const modalConf = useSelector((st:RootState) =>
        getTargetModalConf<MorelWorksDataType>(st, keymodal)
    )

    const closeModal = () => {
        const backTo = modalConf.status ? modalConf.more?.backTo : undefined
        const originData = modalConf.status ? modalConf.more?.originData : undefined

        dispatch(closeTargetModal({ key: keymodal }))

        if (backTo && originData) {
            dispatch(createOrToogleModal({
                key: backTo,
                modal: {
                    name: backTo,
                    status: true,
                    priority: 99,
                    more: originData.more // Передаем оригинальные данные
                }
            }))
        }
    }
    
    const images = modalConf.status ? modalConf.more?.imgs || [] : []
    const currentIndex = modalConf.status ? modalConf.more?.curIdx || 0 : 0
    
    return (
        <>
        {isActive && modalConf.status && (
            <div className="WorksImgModalWp" style={{zIndex: modalConf.priority || 1000}}>
                <button className="WorksImgModalBtn" onClick={closeModal}>
                    <CrossSvg className='WorksImgModalBtnSvg' />
                </button>
                <WorkCardNav 
                    imgUrls={images} 
                    indx={currentIndex} 
                    key={'WorksImgModal'}
                />
            </div>
        )}
        </>
    )
}