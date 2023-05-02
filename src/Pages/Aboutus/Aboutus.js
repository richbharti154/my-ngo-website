import React from 'react'
import { useState } from 'react'
import style from './Aboutus.module.css'
// import { useNavigate } from 'react-router-dom'

export default function Aboutus() {
    const [isAnimated, setIsAnimated] = useState(false);
    // const navigate = useNavigate()
    function handleClick() {
        setIsAnimated(!isAnimated);
    };
    return (

        < section className={style.Container}>

            <div className={style.main}>

                <h1 className={style.about}>About us</h1>
                {/* <button
                    text="Back to Home"
                    onClick={() => navigate("/")}
                    className={style.btn1}>Home
                </button> */}

                <p className={style.paragraph}>An NGO (Non-Governmental Organization) is a non-profit organization
                    that operates independently of government authorities, usually formed byindividuals or groups with a shared goal of promoting social, cultural, environmental or humanitarian causes. NGOs are typically created to address issues that are not
                    adequately served by the government or private sectors, often providing services and
                    resources to disadvantaged communities. In summary, NGOs are organizations that operate independently of
                    governments and work towards addressing social, environmental, and humanitarian The goals of an NGO (Non-Governmental Organization) typically depend on
                    the specific mission and focus of the organization. However, in general, the primary goal of an NGO is to promote social, cultural, environmental,
                    or humanitarian causes to create a positive impact on society. Some of the common goals of NGOs include   Promoting human rights: Many NGOs work to promote and protect human rights, including civil and political rights, economic, social and cultural rights, and environmental rights.
                    Providing relief and assistance: NGOs often provide assistance to people affected
                    by natural disasters, conflicts, and other crises. This assistance may
                    include providing food, shelter, medical care, and other essential
                    supplies. Advocating for policy changes that benefit the community
                    and protect human rights.Empowering marginalized communities to take control
                    of their own lives and improve their socio-economic conditions.
                    Developing sustainable agricultural practices to improve food security in rural areas.
                    Conducting research to identify the root causes of social, cultural,
                    and environmental issues and developing solutions to address them.
                    issues, often relying on donations and partnerships to carry out their work.</p>

                <div className={style.card}>
                    <div className={`${style.maincontainer} ${isAnimated ? style.animated : ''}`}
                        onClick={handleClick}
                    >
                        <div className={style.title}>Give Donation</div>
                        <p className={style.heading}>
                            This is donation for NGO if u have interested then you can
                            give donation anythings as your choice like money,cloth etc
                        </p>
                        <button className={style.button}>Donate now</button>
                    </div>
                    <div className={`${style.maincontainer} ${isAnimated ? style.animated : ''}`}
                        onClick={handleClick}
                    >
                        <div className={style.title}>Become a voluntier</div>

                        <p className={style.heading}>
                            This is donation for NGO if
                            u have interested then you can
                            give donation anythings as your choice like money,cloth etc
                        </p>
                        <button className={style.button}>Become now</button>
                    </div>
                    <div className={`${style.maincontainer} ${isAnimated ? style.animated : ''}`}
                        onClick={handleClick}
                    >
                        <div className={style.title}>Give Scholarship</div>
                        <p className={style.heading}>


                            This is donation for NGO if u have interested then you can
                            give donation anythings as your choice like money,cloth etc
                        </p>
                        <button className={style.button}>Immediately</button>

                    </div>

                </div>
            </div>
        </section>

    )
}