import React from 'react'
import '../../styles/blog.css'
import videoImg from '../../images/video-65f05bcdc8041.webp'
import articleImg from '../../images/article-65f05bb6328a0.webp'
import caseStudy from '../../images/case-study-65f05bc111297.webp'
import { Link } from 'react-router-dom'
import {useTranslation} from 'react-i18next'

const Blog = () => {

    const blogData = [
        {
            imgUrl: videoImg,
            id: 1,
            title: "فيديو",
            desc: "لمعرفة المزيد عن العمل. شاهد الفيديو....",
        },
        {
            imgUrl: articleImg,
            id: 2,
            title: "مقالات",
            desc: "هل ترغب في تحسين علامتك التجارية مع العملاء....",
        },
        {
            imgUrl: caseStudy,
            id: 3,
            title: "حالات",
            desc: "عزز معدل محادثتك معنا....",
        },
    ]

    const {t} = useTranslation();

   

    return (
        <>
            <section id="blog" className='blog'>
                <div className='container'>
                <div className="blog__top-content">
                    <h6 className="subtitle">{t("مدونتنا")}</h6>
                    <h2>{t("دعونا نلقي نظرة على لدينا")} <span className="highlight">{t("مدونة الأخيرة")}</span></h2>
                </div>

                <div className="blog__wrapper">
                {
                        blogData.map((item, index) =>{
                            return(
                                <div className="blog__item" key={index}>
                                <Link to={`/details/${item.id}`}>
                                <h3>{t(`${item.title}`)}</h3>
                                <div className="blog__img">
                                    <img src={item.imgUrl} alt="photo" />
                                </div>
                                <p className="desc blog__desc">
                                    {t(`${item.desc}`)}
                                </p>
                                <div>
                                    <a href={item.linkUrl} className='learn__more'>
                                        <i class="ri-arrow-right-line"></i>
                                    </a>
                                </div>
                                    </Link>
                            </div>
                            )
                        })
                    }
                </div>
                </div>
            </section>
        </>
    )
}

export default Blog