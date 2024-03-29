import React from 'react'
import '../../styles/team.css'
import team01 from '../../images/team-01-65f05bc403c11.webp'
import team02 from '../../images/team-02-65f05bc68605f.webp'
import team03 from '../../images/team-03-65f05bc917dc2.webp'
import team04 from '../../images/team-04-65f05bca8229b.webp'
import {useTranslation} from 'react-i18next'

const Team = () => {

    const teamMember =[
        {
            imgUrl: team01,
            name: 'محمود محمد',
            postion: 'إعلانات الفيسبوك'
        },
        {
            imgUrl: team02,
            name: "نادين عمر",
            postion: "اعلانات سناب شات"
        },
        {
            imgUrl: team03,
            name: "امير طارق",
            postion: "إعلانات جوجل"
        },
        {
            imgUrl: team04,
            name: "ويلي تشاد",
            postion: "تصميم ملصق"
        }
    ]

    const {t} = useTranslation();

    return (
        <>
            <section className='our__team' id="team">
                <div className="container">
                    <div className="team__content">
                        <h2>{t("فريقنا")}</h2>
                        <h3>{t("مقابله مع")} <span>{t("فريقنا")}</span></h3>
                    </div>
                    <div className="team__wrapper">
                        {
                            teamMember.map((item,index)=>(
                                <div className="team__item" key={index}>
                                    <div className="team__img">
                                        <img src={item.imgUrl} alt="team member" />
                                    </div>
                                    <div className="team__details">
                                        <p className='subtitle'>{t(`${item.name}`)}</p>
                                        <p className="desc">{t(`${item.postion}`)}</p>
                                    
                                    <div className="team__member-social">
                                        <span>
                                            <i class="ri-linkedin-box-fill"></i>
                                        </span>
                                        <span>
                                        <i class="ri-twitter-fill"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team