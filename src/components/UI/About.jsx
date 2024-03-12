import React from 'react'
import '../../styles/about.css'
import aboutImg from "../../images/about-us-65f05bb8e8759.webp"
import {useTranslation} from 'react-i18next'

const About = () =>{

    const chooseData = [
        {
            icon: 'ri-pie-chart-fill',
            title: 'عملية العمل الأولى',
            desc: 'لدينا العديد من العمليات المتعلقة بأعمالنا التي قمنا بها.'
        },
        {
            icon: 'ri-team-line',
            title: 'فريق متخصص',
            desc: 'عادةً ما يتمتع أعضاء الفريق المتفاني بمستوى عالٍ من الالتزام والتحفيز، حيث تم اختيارهم خصيصًا لخبرتهم في المجال ذي الصلة.'
        },
        {
            icon: 'ri-customer-service-2-line',
            title: 'دعم 24 ساعة',
            desc: 'يشير الدعم على مدار 24 ساعة إلى خدمة أو نظام متاح على مدار الساعة طوال أيام الأسبوع لتقديم المساعدة أو التوجيه أو حل المشكلات في أي وقت من النهار أو الليل.'
        },
    ]

    const {t} = useTranslation();

   

    return(
        <>
            <section id='about'>
                <div className='container'>
                    <div className="about__wrapper">
                        <div className="about__content">
                            <h2 className="subtitle">{t("لماذا أخترتنا؟")}</h2>
                            <h3>{t("متخصص في إرضاء العملاء")}</h3>
                            <h4 className="highlight">{t("التحديات المالية")}</h4>
                            <p className="desc about__content__desc">{t("التسويق الفعّال ينطوي على إنشاء هوية علامة تجارية مقنعة، وصياغة رسائل مقنعة، وتوصيلها من خلال القنوات المناسبة للتفاعل والتأثير على العملاء.")}</p>

                            <div className='choose__item-wrapper'>
                                {
                                    
                                    chooseData.map((item, index) => {
                                        return(
                                            <div key={index} className="choose__us-item">
                                                <div className="choose__us-icon">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="choose__us-title">
                                                    <h6>{t(`${item.title}`)}</h6>
                                                </div>
                                                <div className="desc">
                                                    <p>{t(`${item.desc}`)}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="about__img">
                            <img src={aboutImg} alt="about-img" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About