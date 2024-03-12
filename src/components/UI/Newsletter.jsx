import React from 'react'
import '../../styles/newsletter.css'
import {useTranslation} from 'react-i18next'

const Newsletter = () => {
    const {t} = useTranslation();
    
    return (
        <>
            <section id='newsletter' className='newsletter'>
                <div className="container">
                    <div className="newsletter__wrapper">
                        <div className="newsletter__content">
                            <h2 className="subtitle">{t("اشترك في نشرتنا الإخبارية")}</h2>
                            <h3 className=''>{t("احصل على الأحدث")} <span className='highlight'>{t("التحديثات")}</span> {t("منا")}</h3>
                        </div>

                        <div className="newsletter__form">
                            <input type="email" placeholder='Email'/>
                            <button className='secondary__btn subscribe__btn'>{t("إشترك الآن")}</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter