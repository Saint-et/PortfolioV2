import React, { useState } from "react";
import { Link } from "react-router-dom";
import CV from '../assets/download/CV.pdf';

import iconCV from '../assets/icons/cv_3135692.png';
import iconPhone from '../assets/icons/phone-call_3616215.png';
import iconEmail from '../assets/icons/email_2374449.png';



const Contact = (props) => {

    const [copy, setCopy] = useState('')
    const handleCopy = (element) => {
        navigator.clipboard.writeText(element)
        setCopy(`${element}`)
        setTimeout(() => { setCopy('') }, 5000)
    };

    return (
        <>
            <div className="contact_section">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3 data-theme={props.localTheme}>CV</h3>
                    <Link to={CV} target="_blank">
                        <img style={{ width: 70 }} src={iconCV} onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} alt="" />
                    </Link>
                    <div style={{marginTop: 10}}>Ouvrir dans un autre onglet</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3 data-theme={props.localTheme}>Phone</h3>
                    <img onClick={() => { handleCopy(props.user.telephone) }} style={{ width: 70, cursor: 'pointer' }} src={iconPhone} onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} alt="Icon phone" title="Copy" />
                    <div style={{marginTop: 10}}>{props.user.telephone}</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h3 data-theme={props.localTheme}>Email</h3>
                    <img onClick={() => window.location = `mailto:${props.user.email}`} style={{ width: 70, cursor: 'pointer' }} src={iconEmail} onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} alt="Icon phone" title="Copy" />
                    <div style={{marginTop: 10}}>{props.user.email}</div>
                </div>

            </div>
            <div style={{ height: 30 }}>
                {copy !== '' && <div style={{marginTop: 10}}><span>{copy}</span>&nbsp;a été Copié</div>}
            </div>
        </>
    )
}

export default Contact