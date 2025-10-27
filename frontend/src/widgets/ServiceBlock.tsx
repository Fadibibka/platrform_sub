'use client'
import OrderApplication from '@/features/modal/components/OrderApplication'
import ServiceCard from '@/shared/ui/card/ServiceCard'
import './index.css'
import {ServiceBlockWithCategoryAndImgs } from '@/features/services/components/DataLayre'

export type updateModalProps = {
    typeService?:string;
    clientPhone?:string;
    clientTelegram?:string;
    comment?:string 
}

export default function ServiceBlock({dataSerivce}:{dataSerivce:ServiceBlockWithCategoryAndImgs[]}){

    if(dataSerivce.length) return (
        <section className='container' id='Services'>
            <h3 className='sectionHeading'>Разработка</h3>
            {dataSerivce.map((block:ServiceBlockWithCategoryAndImgs, index) => (
                <OrderApplication key={block.category_type?.id} 
                name={block.category_type?.name || ''}
                >
                    {(action, updateModal) => (
                        <ServiceCard
                        action={() => {
                            action('applicatonService', {
                                id:index,
                                name:block.category_type?.name,
                                status:true,
                                priority:5,
                                steps:2
                            }); 
                            updateModal({
                                typeService:block.category_type?.name
                            })
                        }} 
                        imgUrl={block.imgs?.imgUrl}
                        name={block.category_type.name}
                        descr={block.category_type.descr}
                        imgsFigures={block.imgs.imgsFigures}
                        />
                        
                    )}     
                </OrderApplication>
            ))}
        </section>
    )
}