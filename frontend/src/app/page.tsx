import ServiceBlock from "@/widgets/ServiceBlock";
import StagesBlock from "@/widgets/StagesBlock";
import './globals.css'
import ApplicationFormBlock from "@/widgets/ApplicationFormBlock";
import WorksBlock from "@/widgets/WorksBlock";
import DataLayre from "@/features/services/components/DataLayre";

export default async function Main() {
  // const ServicesData = await DataLayre();
  return (
    <main className="flex-trap">
        {/* <ServiceBlock dataSerivce={ServicesData}/>
        <StagesBlock/>
        <ApplicationFormBlock/> */}
        <WorksBlock/>
    </main>
  );
}
