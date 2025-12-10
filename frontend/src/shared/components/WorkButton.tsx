'use client'
import InnerButtonRound from "@/shared/ui/btn/InnerBtnRound";
import ArrowSvg from '@/shared/assets/svg/ArrowSvg.svg'
import { createOrToogleModal } from "@/features/modal/model/modalSlice";
import { useDispatch } from "react-redux";
import { WorksCardProps } from "@/shared/ui/card/type";
const WorkButton = ({ name, descr, imgUrls, details }: WorksCardProps) => {
    const dispatch = useDispatch();

  const openWorkDetailsModal = () => {
    dispatch(createOrToogleModal({
      key: 'WorkDetailsModal',
      modal: {
        name: 'WorkDetailsModal',
        status: true,
        priority: 1000,
        more: {
          name,
          descr,
          imgUrls,
          details
        }
      }
    }));
  };
    return (
        <>
        <button
        onClick={openWorkDetailsModal}
        className="DefButtonWp WorksCardBtnWp cursor-pointer"
      >
        <InnerButtonRound>
          <ArrowSvg className="ServiceCardSvg WorksBlockPostiton" />
        </InnerButtonRound>
        <p className="DefButtonText">Подробнее</p>
      </button>
        </>
    )
}
export default WorkButton