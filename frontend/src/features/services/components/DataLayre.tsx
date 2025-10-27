import axios from "axios";
import { ServicesInfo } from "../model/servicesApi"
import { DEVELOPMANT_IMGS, DevelopServiceList } from "@/shared/CONST";


export interface ServiceBlockWithCategory{
    category_type?:ServicesInfo;
    category_items?:Array<ServicesInfo>;
    imgs?:Omit<DevelopServiceList, 'name'>
}
export interface ServiceBlockWithCategoryAndImgs{
    category_type:ServicesInfo;
    category_items:Array<ServicesInfo>;
    imgs:Omit<DevelopServiceList, 'name'>
}
export default async function DataLayre(): Promise<ServiceBlockWithCategoryAndImgs[]> {

    const struct: ServiceBlockWithCategory[] = [];

    const getServiceInfo = async (category: string): Promise<ServicesInfo[]> => {
        const res = await axios.get<ServicesInfo[]>(`http://localhost:8080/api/services?category=${category}`);
        return res.data;
    };

    const arr: ServicesInfo[] = await getServiceInfo("development");

    // 1. Сначала создаём родительские категории
    for (let i = 0; i < arr.length; i++) {
        const svc = arr[i];

        if (svc.parent_id === null) {
            // найти imgs
            let imgs: Omit<DevelopServiceList, "name"> | undefined;
            for (let j = 0; j < DEVELOPMANT_IMGS.length; j++) {
                if (svc.name === DEVELOPMANT_IMGS[j].name) {
                    const { name: _drop, ...rest } = DEVELOPMANT_IMGS[j];
                    imgs = rest;
                }
            }

            struct.push({
                category_type: svc,
                category_items: [],          // ВАЖНО: инициализируем чтобы потом push работал
                imgs,
            });
        }
    }

    // 2. Потом раскидываем дочерние услуги
    for (let i = 0; i < arr.length; i++) {
        const svc = arr[i];

        if (svc.parent_id !== null) {
            // ищем соответствующую группу
            for (let k = 0; k < struct.length; k++) {
                const group = struct[k];

                if (
                    group.category_type &&
                    group.category_type.id === svc.parent_id &&
                    group.category_items // теперь уже точно []
                ) {
                    group.category_items.push(svc);
                }
            }
        }
    }

    // 3. Type guard
    function isFullBlock(
        block: ServiceBlockWithCategory
    ): block is ServiceBlockWithCategoryAndImgs {
        const hasCategory =
            !!block.category_type &&
            Object.keys(block.category_type).length > 0;

        const hasImgs =
            !!block.imgs &&
            Object.keys(block.imgs).length > 0;

        const hasItems =
            Array.isArray(block.category_items) &&
            block.category_items.length > 0;

        return hasCategory && hasImgs && hasItems;
    }

    // 4. Фильтруем пустые группы
    const finalStruct: ServiceBlockWithCategoryAndImgs[] = [];
    for (let i = 0; i < struct.length; i++) {
        const block = struct[i];
        if (isFullBlock(block)) {
            finalStruct.push(block);
        }
    }

    return finalStruct;
}