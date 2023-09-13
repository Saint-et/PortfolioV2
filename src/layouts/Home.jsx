import React, { useState } from "react";
import Liquide_Progress_bar from "../components/Liquide_Progress_bar/Liquide_Progress_bar"
import { Data_Realisation, Data_Realisation_Personnel, Experience } from '../data/Data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { RemoveScroll } from 'react-remove-scroll';
import imgdecor1 from '../assets/vue-face-fleur-dans-vase.jpg';
import imgdecor2 from '../assets/vue-face-du-decor-fleurs-support-marbre.jpg';
import imgdecor3 from '../assets/vue-face-fleurs-vase.jpg';
import imgdecor4 from '../assets/vue-face-fleurs-dans-vase.jpg';
import iconTitle1 from '../assets/icons/book_2232688.png';
import iconTitle2 from '../assets/icons/workflow_2620501.png';
import iconTitle3 from '../assets/icons/creativity_1703879.png';
import Contact from "../components/Contact";
import { useAppContext } from '../contexts/UseAppContext';


const Home = (props) => {


    const [fullScreenImg, setFullScreenImg] = useState('')

    const {localTheme, setFullScreenData } = useAppContext()

    //< div className = 'cter_sect' >
    //    <div className='ctent_arti' style={{ paddingTop: 30, width: 'max-content', background: 'none', boxShadow: 'none' }} data-theme={localTheme}>
    //        <img className='img_user' src={props.user.image} alt="" onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
    //        <h1 style={{ textAlign: 'center', color: 'white', fontSize: 50 }}>{props.user.job}</h1>
    //        <h2 style={{ textAlign: 'center', color: 'white' }}>{props.user.lastname}&nbsp;{props.user.firstname}</h2>
    //    </div>
    //    </div >

    return (
        <div style={{ overflow: 'hidden' }}>

            <div className="square_container"><div className="square_content">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div></div>

            {fullScreenImg && <RemoveScroll className='blanket' onClick={() => { setFullScreenImg('') }} style={{ zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'zoom-out', marginTop: -50 }} >
                <div className='container_img_fullScreen'>
                    <img onClick={() => { setFullScreenImg('') }} style={{ width: '100%', maxWidth: 1500, borderRadius: 15, objectFit: 'contain' }} src={fullScreenImg} alt="" />
                </div>
            </RemoveScroll>}


            <div className="cter_sect" style={{ marginTop: 50 }}>
                <div className="presentation_content">
                    <div className="container_name">
                        <h3 className="name">{props.user.lastname}<br />{props.user.firstname}</h3>
                        <h2 className="study">{props.user.job}</h2>
                    </div>
                    <img className="profil_picture" src={props.user.image} onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} alt="profil picture" data-theme={localTheme} />
                </div>
            </div>

            <div className="square_content_mobile">
                <ul className="circles"  data-theme={localTheme}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>

            <div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div className='ctent_arti' style={{ paddingTop: 30, maxWidth: 600, overflow: 'hidden' }} data-theme={localTheme}>
                    <img className="decor_picture" src={imgdecor2} onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} alt="" />
                </div>
                <div className='ctent_arti' style={{ paddingTop: 30, maxWidth: 600 }} data-theme={localTheme}>
                    <h2 id="Qui_suis_je" className="title">Qui suis-je ?</h2>
                    <p style={{ textAlign: 'center', width: '100%', maxWidth: 900, fontSize: 25 }} translate='no'>
                        {props.user.presentation}
                    </p>
                </div>
            </div>

            <div style={{ marginTop: 50, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h2 id="realisations" className='title' data-theme={localTheme}>Réalisations</h2>
                <img onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} src={iconTitle2} alt="icon" />
                <FontAwesomeIcon className="faAngleDoubleDown_animation_down" style={{ marginTop: 20, fontSize: 50 }} icon={faAngleDoubleDown} />
            </div>

            <div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div className='ctent_arti' style={{ paddingTop: 30, maxWidth: 600, overflow: 'hidden' }} data-theme={localTheme}>
                    <div className='container_card' data-theme={localTheme}>
                        {Data_Realisation?.map((data) => (
                            <div key={data.title}>
                                <div style={{textAlign: 'center', fontSize: 20, fontWeight: 800, marginBottom: 10}}>{data.title}</div>
                            <img onClick={() => {
                                setFullScreenData(data)
                            }} className='card_img' src={data.image} alt={data.title} onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='ctent_arti' style={{ paddingTop: 30, maxWidth: 600 }} data-theme={localTheme}>
                    <img className="decor_picture" src={imgdecor4} onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} alt="" />
                </div>
            </div>

            <div style={{ marginTop: 50, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h2 className='title' data-theme={localTheme}>Réalisations personnelles</h2>
                <img onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} src={iconTitle3} alt="icon" />
                <FontAwesomeIcon className="faAngleDoubleDown_animation_down" style={{ marginTop: 20, fontSize: 50 }} icon={faAngleDoubleDown} />
            </div>

            <div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div className='ctent_arti' style={{ paddingTop: 30, maxWidth: 600, overflow: 'hidden' }} data-theme={localTheme}>
                    <img className="decor_picture" src={imgdecor3} onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} alt="" />
                </div>
                <div className='ctent_arti' style={{ paddingTop: 30, maxWidth: 600 }} data-theme={localTheme}>
                    <div className='container_card' data-theme={localTheme}>
                        {Data_Realisation_Personnel?.map((data) => (
                            <div key={data.title}>
                            <div style={{textAlign: 'center', fontSize: 20, fontWeight: 800, marginBottom: 10}}>{data.title}</div>
                            <img onClick={() => {
                                setFullScreenData(data)
                            }} className='card_img' src={data.image} alt={data.title} key={data.title} onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ marginTop: 50, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h2 id="competences" className='title' data-theme={localTheme}>Compétences</h2>
                <img onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} src={iconTitle1} alt="icon" />
                <FontAwesomeIcon className="faAngleDoubleDown_animation_down" style={{ marginTop: 20, fontSize: 50 }} icon={faAngleDoubleDown} />
            </div>



            <div style={{ flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <div className='ctent_arti' style={{ paddingTop: 30, maxWidth: 600, overflow: 'hidden' }} data-theme={localTheme}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {Experience?.map((data) => (
                            <div style={{ margin: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={data.title}>
                                <h4 translate="no">{data.title}</h4>
                                <Liquide_Progress_bar
                                    value={data.progressBar}
                                    color={data.color}
                                    number={true}
                                    textColor={data.textColor}
                                    style={{
                                        borderRadius: '20%',
                                        border: `2px solid ${data.color}`,
                                        backgroundImage: data.image
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='ctent_arti' style={{ paddingTop: 30, maxWidth: 600 }} data-theme={localTheme}>
                    <img className="decor_picture" src={imgdecor1} onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} alt="" />
                </div>
            </div>



            <div className='cter_sect background' style={{ paddingBottom: 10, marginTop: 50 }}>
                <div className='ctent_arti' style={{ borderRadius: 0, maxWidth: '100%', color: 'white' }}>
                    <Contact user={props.user} />
                </div>
            </div>

        </div>
    );
}

export default Home;