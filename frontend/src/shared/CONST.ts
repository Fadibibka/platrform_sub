import { StaticImageData } from "next/image"

import { figuresImgs, serviceImgs, STAGES_IMGS } from "./assets/imgs/import"

import TelegrammSvg from '@/shared/assets/svg/TelegramSvg.svg'
import { WorksCardProps } from "./ui/card/type"

import {makeImg} from "./utils/makeImg"
import GC_IMGS, {GoldenCasingVideo} from "./assets/worksData/GoldenCasing/import"
import TestImg from '@/shared/assets/worksData/Test/Test.jpg'
import BEER_IMGS, { BeerEssentialsVideo } from "./assets/worksData/BeerEs/import"
import VentilImgs, { VentilVideo } from "./assets/worksData/Ventil/impots"
import IgropoiskImgs, { IgropoiskVideo } from "./assets/worksData/Igropoisk/import"
import SmartGalleryImgs, { SmartGalleryVideo } from "./assets/worksData/SmartGallery/import"
import { ReplaceKey } from "./utils/type"

export type NavListStructur = {
    name:string;
    targetId:string;
}
export type dopImgs = {
    imgUrl:StaticImageData
    class:string | string[]
}
export type DevelopServiceList = {
    name:string;
    // descr:string;
    imgUrl:StaticImageData;
    imgsFigures?:dopImgs[]
}
export type DevelopServiceListStages = {
    name:string;
    descr:string;
    imgUrl:StaticImageData;
    imgsFigures?:dopImgs[]
}
export type OrderApplicationsList= {
    name:string;
    getResult:string
    icon:StaticImageData
    backGround:string
    endpoint?:string
}

export const NAV_LIST: NavListStructur[] = [
    {
        name:'Услуги',
        targetId:'Services'
    },
    {
        name:'Этапы',
        targetId:'Stages'
    },
    {
        name:'Связь',
        targetId:'Connection'
    },
    {
        name:'Работы',
        targetId:'Works'
    }
]

export const DEVELOPMANT_IMGS : DevelopServiceList[] = [
    {
        name:'Лендинг',
        imgUrl:serviceImgs.LandingImg,
        imgsFigures:[
            {
                imgUrl:figuresImgs.cube.PrupleCube,
                class:'LandingPrupleCubImg'
            },
            {
                imgUrl:figuresImgs.custom.FlowerImg,
                class:'LandingFlowerImg'
            },
            {
                imgUrl:figuresImgs.plus.PruplePlus,
                class:'LandingPruplePlusImg'
            },
            {
                imgUrl:figuresImgs.round.WhiteRoundImg,
                class:'LandigWhiteRoundImg'
            },
            {
                imgUrl:figuresImgs.custom.BageImg,
                class:'LandingBageImg'
            },
        ]
    },
    {
        name:'Интернет-магазин',
        imgUrl:serviceImgs.ShopImg,
        imgsFigures:[
            {
                imgUrl:figuresImgs.plus.PruplePlusV2,
                class:'ShopPruplePlusV2'
            },
            {
                imgUrl:figuresImgs.cube.WhiteCube,
                class:'ShopWhiteCube'
            },
            {
                imgUrl:figuresImgs.star.PrupleStarImg,
                class:'ShopPrupleStarImg'
            },
            {
                imgUrl:figuresImgs.custom.InterfaceImg,
                class:'ShopInterfaceImg'
            },
            {
                imgUrl:figuresImgs.cube.PrupleCubeV2,
                class:'ShopPrupleCubeV2'
            },
            {
                imgUrl:figuresImgs.ball.WhiteBallImg,
                class:'ShopWhiteBallImg'
            }
        ]
    },
    {
        name:'Корпоративный сайт',
        imgUrl:serviceImgs.CoopImg,
        imgsFigures:[
            {
                imgUrl:figuresImgs.cube.PurpleWhiteCube,
                class:'CoopPurpleWhiteCube'
            },
            {
                imgUrl:figuresImgs.ball.SmallGrayBallImg,
                class:'CoopSmallGrayBallImg'
            },
            {
                imgUrl:figuresImgs.plus.PruplePlus,
                class:'CoopPruplePlus'
            },
            {
                imgUrl:figuresImgs.ball.WhiteBallImg,
                class:'CoopWhiteBallImg'
            },
            {
                imgUrl:figuresImgs.round.WhiteRoundImg,
                class:'CoopWhiteRoundImg'
            },
        ]
    },
    {
        name:'Индивидуальное решение',
        imgUrl:serviceImgs.CustomImg,
        imgsFigures:[
            {
                imgUrl:figuresImgs.plus.PruplePlusV3,
                class:'CustomPruplePlusV3'
            },
            {
                imgUrl:figuresImgs.round.TranspareteRoundImg,
                class:'CustomTranspareteRoundImg'
            },
            {
                imgUrl:figuresImgs.ball.SmallPrupleBall,
                class:'CustomSmallPrupleBall'
            },
            {
                imgUrl:figuresImgs.ball.PurpleBallImg,
                class:'CustomPurpleBallImg'
            },
            {
                imgUrl:figuresImgs.ball.SmallGrayBallImg,
                class:'CustomSmallGrayBallImg'
            },
        ]
    }
]

// export const ORDER_APPLICATION_VARIANTS : OrderApplicationsList[]= [
//     {
//         name:'Telegram',
//         getResult:'telegram',
//         icon:TelegrammSvg,
//         backGround:'#3497E7',
//         endpoint:'https://t.me/cubromanager_bot'
//     },
//     {
//         name:'Заявка на сайте',
//         getResult:'form',
//         icon:TelegrammSvg,
//         backGround:'#9169C6',
//         endpoint:"#Connection"
//     },
//     {
//         name:'Через личный кабинет',
//         getResult:'account',
//         icon:TelegrammSvg,
//         backGround:'#1F1D21',
//         endpoint:'users/entry'
//     }
// ]
export const STAGES_LIST : ReplaceKey<DevelopServiceListStages, "imgsFigures", "dopImg", dopImgs>[] = [
    {
        name:'Заказывай',
        descr:'Выбери подходящий тип услуги и оформи заявку',
        imgUrl:STAGES_IMGS.main.StagesToOrederMianImg,
        dopImg:{
            imgUrl:STAGES_IMGS.dop.StagesCartImg,
            class:'StagesCartImg'
        }
    },
    {
        name:'Отслеживай',
        descr:'Следи за этапами работы и вноси свои правки',
        imgUrl:STAGES_IMGS.main.StagesProgressMianImg,
        dopImg:{
            imgUrl:STAGES_IMGS.dop.StagesPlacholdImg,
            class:'StagesProgressImg'
        }
    },
    {
        name:'Получай',
        descr:'Готовый сайт для запуска бизнеса уже у тебя',
        imgUrl:STAGES_IMGS.main.StagesResultMainImg,
        dopImg:{
            imgUrl:STAGES_IMGS.dop.StagesRoundImg,
            class:'StagesResultImg'
        }
    },
]
export const WORKS_DATA : WorksCardProps[]= [
    {
        name:'Golden Casing',
        descr:'Корпоративный сайт для мясоперерабатывающего предприятия B2B-сегмента',
        imgUrls:makeImg('GoldenCasing', [
            {
            url: GoldenCasingVideo,
            type: 'video',
            id: 'GC-video',
            alt: 'Демонстрация сайта Golden Casing'
            },
            GC_IMGS.MainImg,
            GC_IMGS.CpImg,
            GC_IMGS.SlugImg,
            GC_IMGS.FormImg
        ]),
        "details": {
        "fullDescription": "Golden Casing — история о том, как современные технологии могут оживить даже самый традиционный бизнес. У компании была богатая история, качественная продукция и... устаревший сайт, который не отражал ее уровень. Мы стали архитекторами ее цифрового преображения.",
        "technologies": ["React", "TypeScript", "Next.js", "Tailwind CSS"],
        "features": [
            {
                "title": "Фронтенд-реинкарнация",
                "description": "Взяли готовый контент, тексты, фото — и переупаковали в современный цифровой формат. Клиент предоставил контент, мы — техническую реализацию."
            },
            {
                "title": "Адаптация к эпохе маркетплейсов",
                "description": "Вместо полноценного интернет-магазина создали локальную базу товаров с ссылками на OZON. Минимум затрат на поддержку, максимум удобства для клиентов."
            },
            {
                "title": "Акцент на B2B-коммуникацию",
                "description": "Структура и контент заточены под работу с бизнес-партнерами: история компании, производственные мощности, условия сотрудничества."
            },
            {
                "title": "Визуальное представление качества",
                "description": "Профессиональные фото производства и продукции, создающие образ современного, технологичного предприятия."
            }
        ],
        "problems": [
            {
                "title": "Миграция с устаревшей платформы",
                "description": "Существующий сайт не соответствовал современным стандартам скорости, безопасности и UX.",
                "solution": "Полный перенос на современный стек (Next.js + React) с сохранением всей ценной информации. Улучшение производительности и мобильной адаптивности."
            },
            {
                "title": "Эффективное представление ассортимента",
                "description": "Клиенту нужно было показать весь ассортимент, но без сложностей поддержки полноценного интернет-магазина.",
                "solution": "Разработали гибридную систему: детальные карточки товаров на сайте с описаниями и фото + автоматические ссылки на OZON для совершения покупок."
            },
            {
                "title": "Создание цифрового доверия",
                "description": "Для B2B-сегмента важно демонстрировать стабильность, качество и надежность.",
                "solution": "Сфокусировались на разделах «О компании», «Производство», «Сертификаты». Использовали фото и видео производства для создания прозрачности и доверия."
            }
        ]
    }
    },
    {
    "name": "Ventil",
    "descr": "Комплексное решение для интернет-магазина сантехники с каталогом 15 000+ товаров",
    imgUrls: makeImg('Ventil', [
            // Видео первым элементом
            {
            url: VentilVideo,
            type: 'video',
            id: 'ventil-video',
            alt: 'Демонстрация интернет-магазина Ventil'
            },
            // Затем изображения
            VentilImgs.ImgMain,
            VentilImgs.ImgCart,
            VentilImgs.ImgAcc,
            VentilImgs.ImgCatalog,
            VentilImgs.ImgProduct,
            VentilImgs.ImgDevlivery,
            VentilImgs.ImgContacts,
        ]),
        "details": {
            "fullDescription": "Проект Ventil — пример комплексного подхода к созданию интернет-магазина. Мы не только разработали техническую платформу, но и взяли на себя дизайн, контент-стратегию и автоматизацию бизнес-процессов. Результат — полностью готовый к работе магазин с настроенными процессами закупки, каталогизации и продаж.",
            "technologies": ["React", "TypeScript", "Next.js", "Nest.js", "Node.js", "PostgreSQL", "Python", "Redux Toolkit"],
            "features": [
                {
                    "title": "Полноценная экосистема «под ключ»",
                    "description": "От дизайна и фотографий до интеграции систем оплаты и доставки. Разработали фирменный стиль, подобрали контент и создали маркетинговые материалы."
                },
                {
                    "title": "Автоматизация товарного учета",
                    "description": "Интеллектуальные скрипты для обработки базы из 15 000+ позиций: парсинг данных, обработка изображений AI-алгоритмами, автоматическое заполнение характеристик."
                },
                {
                    "title": "Интеллектуальный каталог",
                    "description": "Умные фильтры и категоризация для удобной навигации по обширному ассортименту."
                },
                {
                    "title": "Полный контроль для владельца",
                    "description": "Полный контроль над товарами, заказами, пользователями и аналитикой. Система лояльности и CRM-инструменты."
                }
            ],
            "problems": [
                {
                    "title": "Преобразование сырых данных в структурированную базу",
                    "description": "Исходные данные поступали из различных источников в неструктурированном виде (Excel, PDF, сайты поставщиков).",
                    "solution": "Создали конвейер обработки данных: парсинг → валидация → AI-обработка изображений → автоматическое заполнение базы PostgreSQL."
                },
                {
                    "title": "Производительность с обширным каталогом",
                    "description": "Традиционные интерфейсы не справлялись с отображением тысяч товаров и сотен фильтров без потери производительности.",
                    "solution": "Реализовали оптимизированную систему фильтрации на уровне базы данных и клиентское кэширование. Добавили ленивую загрузку и WebP-конвертацию изображений."
                },
                {
                    "title": "Управление контентом",
                    "description": "Клиенту требовался простой способ обновлять десятки тысяч товарных карточек.",
                    "solution": "Создали интуитивную админ-панель с пакетным редактированием, шаблонами и системой импорта/экспорта."
                }
            ]
        }
    },
    
    {
    "name": "BEER ESSENTIALS",
    "descr": "Дизайн-манифест в мире крафтового пива",
    imgUrls:makeImg('BEERESSENTIALS', [
             {
            url: BeerEssentialsVideo,
            type: 'video',
            id: 'BE-video',
            alt: 'Демонстрация сайта Beer Essentials'
            },
           BEER_IMGS.MainImg,
           BEER_IMGS.Map,
           BEER_IMGS.Slider,
           BEER_IMGS.Card,
           BEER_IMGS.Hits,
           BEER_IMGS.Descr
        ]), // ваш массив
    "details": {
        "fullDescription": "BEER ESSENTIALS — это не просто магазин, а настоящее цифровое путешествие в мир крафтового пива. Проект родился из страсти нашего заказчика к пивоваренному искусству и стал результатом уникального партнерства: каждая деталь дизайна, каждый интерактивный элемент — плод совместного творчества и мозговых штурмов.",
        "technologies": ["React", "TypeScript", "FastAPI", "Python", "PostgresSQL", "SQLAlchemy", "Tailwind CSS"],
        "features": [
            {
                "title": "Клиент как соавтор",
                "description": "Заказчик был полноценным участником процесса: от генерации идей до финальных правок. Этот проект — симбиоз технической экспертисы и глубокого понимания ниши. Еженедельные созвоны, совместные сессии в Miro, мгновенная обратная связь. Проект развивался в диалоге, а не по ТЗ."
            },
            {
                "title": "Интерактивная карта пивоварен",
                "description": "Путешествие по миру крафта: анимированная карта с историческими справками, особенностями регионов и легендарными брендами."
            },
            {
                "title": "Сенсорные описания",
                "description": "Каждое пиво — это история. Мы создали детальные профили с описанием вкусовых нот, ароматов, сочетаемости с едой и историей создания."
            },
            {
                "title": "Дизайн как конкурентное преимущество",
                "description": "В условиях ограничений на онлайн-продажи алкоголя в РФ, мы сделали ставку на эстетику: минималистичный дизайн, кинематографичные фото, типографика как искусство."
            }
        ],
        "problems": [
            {
                "title": "Дизайн в условиях ограничений",
                "description": "Как создать визуально выдающийся проект о продукте, который нельзя продавать онлайн в целевой стране?",
                "solution": "Сместили парадигму: вместо «магазина» создали «медиа о пиве». Упор на сторителлинг, образование и формирование сообщества ценителей."
            },
            {
                "title": "Синхронизация видений",
                "description": "Заказчик — эксперт в пиве, мы — эксперты в digital. Нужно было найти общий язык между страстью к продукту и технологиями.",
                "solution": "Регулярные воркшопы, совместные мозговые штурмы, прототипирование в Figma с живой обратной связью. Заказчик стал «продукт-менеджером» проекта."
            },
            {
                "title": "Проект в поиске нового дома",
                "description": "Создав полноценную работающую платформу, мы столкнулись с тем, что у оригинального заказчика не нашлось времени на финальный запуск.",
                "solution": "Проект находится в практически готовом к запуску состоянии. Мы подготовили документацию, инструкции для админов и техническую поддержку на первый месяц. Осталось дозаполнить базу - и готовы передать проект другой команде или помочь с финальным запуском при возобновлении интереса клиента."
            }
        ]
    }
},
    {
        name:'SmartGallery',
        descr:'AI-платформа для торговли произведениями искусства',
        imgUrls:makeImg('SmartGallery', [
            {
            url: SmartGalleryVideo,
            type: 'video',
            id: 'IP-video',
            alt: 'Демонстрация сайта SmartGallery'
            },
            SmartGalleryImgs.MainImg,
            SmartGalleryImgs.Catalog,
            SmartGalleryImgs.News,
            SmartGalleryImgs.Filters,
            SmartGalleryImgs.Product,

        ]),
        "details": {
        "fullDescription": "SmartGallery — инновационная платформа, объединяющая цифровую коммерцию произведений искусства с искусственным интеллектом. Мы создали экосистему, где художники проходят верификацию для представления работ, а покупатели получают персонализированные рекомендации через диалогового AI-ассистента на базе Gemini API. Проект представляет собой синтез технологий и творчества.",
        "technologies": ["React", "TypeScript", "Nest.js", "Gemini AI API", "Node.js", "PostgresSQL"],
        "features": [
            {
                "title": "AI-арт-консультант",
                "description": "Диалоговая система на Gemini API, которая понимает естественные запросы о произведениях искусства и предлагает персонализированные подборки на основе стиля, настроения и контекста."
            },
            {
                "title": "Верификация и доверие",
                "description": "Многоуровневая система проверки художников и их работ, обеспечивающая качество и подлинность представленных на платформе произведений."
            },
            {
                "title": "Контекстные рекомендации",
                "description": "Умные алгоритмы подбора: похожие работы, работы в том же стиле, произведения для конкретных интерьеров, рекомендации на основе просмотров."
            },
            {
                "title": "Арт-медиа платформа",
                "description": "Новости мира искусства, интервью с художниками, обзоры выставок и образовательный контент для формирования сообщества ценителей."
            }
        ],
        "problems": [
            {
                "title": "Персонализация в субъективной сфере",
                "description": "Искусство — область высокой субъективности, где традиционные алгоритмы рекомендаций работают плохо из-за сложности формализации критериев.",
                "solution": "Разработали AI-систему на Gemini API, которая анализирует не только метаданные работ, но и их визуальные характеристики, а также ведет диалог с пользователем для понимания контекста и предпочтений."
            },
            {
                "title": "Структурирование неструктурированного",
                "description": "Произведения искусства имеют сотни характеристик (стиль, техника, настроение, период), которые сложно формализовать для поиска.",
                "solution": "Создали таксономию из 500+ тегов и атрибутов, которые заполняют художники при загрузке работ."
            },
            {
                "title": "Создание доверия в digital-арт-пространстве",
                "description": "Покупатели произведений искусства требуют гарантий подлинности и качества, особенно при онлайн-транзакциях.",
                "solution": "Внедрили комплексную систему верификации: проверка портфолио художников, экспертный отбор работ, цифровые сертификаты подлинности, система отзывов и репутации."
            }
        ]
    }
    },
    {
        name:'Igropoisk',
        descr:'Кинопоиск для игр: универсальная платформа для геймеров нового поколения',
        imgUrls:makeImg('Igropoisk', [
            {
            url: IgropoiskVideo,
            type: 'video',
            id: 'SG-video',
            alt: 'Демонстрация сайта Igropoisk'
            },
            IgropoiskImgs.MainImg,
            IgropoiskImgs.Catalog,
            IgropoiskImgs.Category,
            IgropoiskImgs.Expected,
            IgropoiskImgs.Recom,
            IgropoiskImgs.Game,
        ]),
        "details": {
        "fullDescription": "Igropoisk — это масштабная перезагрузка концепции игрового агрегатора. Мы создали полноценную экосистему, объединяющую функции рекомендательного сервиса, социальной сети для геймеров и агрегатора игрового контента. Вдохновляясь лучшими практиками Steam и Epic Games Store, мы разработали уникальный дизайн и внедрили гибридную рекомендательную систему на базе ML-алгоритмов.",
        "technologies": ["React", "TypeScript", "Python/ML", "FastAPI", "PostgresSQL", "SQLAlchemy", "Tailwind CSS"],
        "features": [
            {
                "title": "Гибридная рекомендательная система",
                "description": "Уникальный алгоритм, сочетающий коллаборативную фильтрацию (на основе похожих пользователей) и контентный анализ (характеристики игр) с элементами машинного обучения для максимально точных предсказаний."
            },
            {
                "title": "Всеобъемлющая база игр",
                "description": "Каталог без границ: игры со всех платформ (PC, консоли, мобильные), включая заблокированные в РФ проекты. Агрегация оценок из Steam, IGDB, OpenCritic и других источников."
            },
            {
                "title": "Персональное игровое пространство",
                "description": "Отслеживание пройденных игр, списки желаемого, возможность оставлять отзывы и оценки. Геймификация через систему опыта за активность."
            },
            {
                "title": "Экспертное сообщество",
                "description": "Платформа для публикации статей и обзоров с системой верификации авторов. Модерация контента и рейтингование лучших материалов."
            }
        ],
        "problems": [
            {
                "title": "Фрагментация игровой информации",
                "description": "Геймерам приходится проверять десятки сайтов, чтобы составить полное представление об игре: оценки на Metacritic, отзывы в Steam, новости на игровых порталах.",
                "solution": "Созали централизованный хаб, агрегирующий информацию из всех ключевых источников. Разработали систему нормализации данных для единообразного представления."
            },
            {
                "title": "Сложность выбора в условиях abundance",
                "description": "Ежегодно выходят тысячи игр. Как помочь пользователям находить релевантные проекты среди этого изобилия?",
                "solution": "Разработали многоуровневую рекомендательную систему. Начинает с популярного и трендового, затем обучается на поведении пользователя и предлагает все более персонализированные подборки."
            },
            {
                "title": "Создание саморазвивающегося сообщества",
                "description": "Как стимулировать пользователей создавать качественный контент и активно участвовать в жизни платформы?",
                "solution": "Внедрили систему геймификации: опыт за отзывы, оценки, статьи. Верификация экспертов, ранги пользователей, конкурсы лучших материалов. Качество активности напрямую влияет на статус в сообществе."
            }
        ]
    }
    },
    {
        name:'Медицинский тест',
        descr:'Опросник',
        imgUrls:makeImg('Test', [
            TestImg
        ]),
        "details": {
        "fullDescription": "Специализированный медицинский опросник с разветвленной логикой вопросов. Особенность проекта — сложный граф переходов между вопросами в зависимости от ответов пользователя.",
        "technologies": ["React", "TypeScript", "Mira.js", "CSS Modules"],
        "features": [
            {
                "title": "Адаптивная логика вопросов",
                "description": "Динамическое построение пути опроса на основе предыдущих ответов. Каждый выбор пользователя определяет следующие вопросы."
            },
            {
                "title": "Сложный граф переходов",
                "description": "Реализация разветвленной логики с десятками возможных сценариев прохождения теста в зависимости от комбинаций ответов."
            },
            {
                "title": "Минималистичный медицинский дизайн",
                "description": "Чистый, ненавязчивый интерфейс, создающий доверительную атмосферу для ответов на личные вопросы о здоровье."
            }
        ],
        "problems": [
            {
                "title": "Управление сложной логикой",
                "description": "Требовалось реализовать опросник с сотнями возможных комбинаций ответов и переходов.",
                "solution": "Использовали графовую структуру в Mira.js для четкого описания всех возможных сценариев. Каждый узел — вопрос, каждое ребро — переход в зависимости от ответа."
            }
        ]
    }
    },
]