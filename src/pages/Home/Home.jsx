import React from 'react'
import Hero from '../../components/UI/Hero'
import Counter from '../../components/UI/Counter'
import About from '../../components/UI/About'
import Services from '../../components/UI/Services'
import Team from '../../components/UI/Team'
import Blog from '../../components/UI/Blog'
import Feedback from '../../components/UI/Feedback'
import Newsletter from '../../components/UI/Newsletter'
import Contact from '../../components/UI/Contact'
// import { Helmet } from 'react-helmet-async'
import {useTranslation} from 'react-i18next'

export const Home = () => {

    const {t} = useTranslation();

        return (
            <>
            {/* <Helmet>
            <title>{t(`الصفحة الرئيسية`)}</title>
            <meta
            name="description"
            content={t(`بونيك هي منصة تسويق الكتروني حيث تقوم بتسويق المحتوي علي مواقع التواصل الاجتماعي`)}
            />
            <link rel="canonical" href='/' />
        </Helmet> */}
                <Hero />
                <Counter />
                <About/>
                <Services/>
                <Team/>
                <Blog/>
                <Newsletter/>
                <Feedback/>
                <Contact/>
            </>
        )
}