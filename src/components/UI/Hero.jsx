import React from 'react'
import heroDarkImg from "../../images/hero-img-65f05bc1aee88.webp"
import '../../styles/hero.css'
import lightImg from "../../images/light-hero-bg-65f05bca496af.webp"
import {useTranslation} from 'react-i18next'

const Hero = ({theme}) => {
    const {t} = useTranslation();
   
    return (
        <>
            <section className="hero__section" id='home'>
                <div className="container">
                    <div className="hero__wrapper">
                        <div className="hero__content">
                            <div>
                            <h2>{t("نحن نصنع الابداع")}</h2>
                            <h2 className="highlight">{t("عزز علامتك التجارية")}</h2>
                            <p className='desc'>{t("الهدف الأساسي للتسويق هو فهم احتياجات وتفضيلات العملاء.")}</p>

                            <div className="hero__btns">
                                    <a href='#contact'><button  className="primary__btn">{t("هيا نبدأ")}</button></a>
                                    <button className="secondary__btn">{t("اكتشف المزيد")}</button>
                            </div>
                            </div>
                        </div>
                <div className="hero__img">
                    <img src={theme === 'light-them'? lightImg : heroDarkImg} alt="hero-img" />
                </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero