
import { ReactNode} from "react";
import './style.css'
export default function InnerButtonRound({children}:{children: ReactNode}){

    return (
        <div className="DefButtonWpRound">
            {children}
        </div>
    )
}