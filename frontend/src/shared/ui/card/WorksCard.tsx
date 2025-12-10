import { WorksCardProps } from "./type";
import './style.css'
import WorkButton from "@/shared/components/WorkButton"
import WorkCardNav from "@/shared/components/WorkCardNav";



export default function WorksCard({ name, descr, imgUrls, details }: WorksCardProps) {
  

  return (
    <article className="StageCardWp WorksCardFlexSize">
      <div className="ServiceCardHaederWp">
        <h4 className="ServiceCardHeading WorksCardTheading">{name}</h4>
        <p className="ServiceCardText WorksCardTextSize">{descr}</p>
      </div>
      <WorkCardNav imgUrls={imgUrls} />
        <WorkButton name={name} 
        descr = {descr} 
        imgUrls={imgUrls} 
        details={details} />
    </article>
  );
}