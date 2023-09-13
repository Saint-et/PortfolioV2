import './NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import imgPro_white from '../assets/images/porfo_blanc.png';
import React, { useState, useEffect, useRef } from "react";
import sunny from '../assets/icons/sunny_979585.png';
import moon from '../assets/icons/moon_1823324.png';
import Contact from "../components/Contact";
import { useAppContext } from '../contexts/UseAppContext';

const NaveBar = (props) => {

  const localTheme = localStorage.getItem('theme');
  const {localTheme: localThemeContext, handleTheme } = useAppContext()
  const [checkboxTheme, setcheckboxTheme] = useState(false)

  const [themeChange, setThemeChange] = useState()
  const handleThemeChange = () => {
    if (localTheme === 'light') {
      setThemeChange(false)
    } else {
      setThemeChange(true)
    }
    setHiddenInfoUser(false)
    setcheckboxTheme(!checkboxTheme)
  };


  const handlehiddenInfo = () => {
    setcheckboxTheme(false)
    setHiddenInfoUser(!hiddenInfoUser)
  };

  const [hiddenInfoUser, setHiddenInfoUser] = useState(false)

  const [copy, setCopy] = useState('')
  const handleCopy = (element) => {
    navigator.clipboard.writeText(element)
    setCopy(`${element}`)
    setTimeout(() => { setCopy('') }, 5000)
  };

  const wrapperRef = useRef(null);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setHiddenInfoUser(false)
          setcheckboxTheme(false)
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useOutsideAlerter(wrapperRef);

  return (
    <>

      {checkboxTheme && <div className='blanket' style={{ zIndex: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <div className='menu_navbar' style={{ width: '100%', flexDirection: 'column', maxWidth: 400, minHeight: 100 }} data-theme={localThemeContext}>
          <div ref={wrapperRef} className='submenu_navbar_title' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
              <div className='buttonCircleRed' onClick={() => { setcheckboxTheme(false) }} style={{ width: 30, height: 30, fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
            <h3>Changer le thème</h3>
            <div className="toggle-rect">
              <input type="checkbox" id="rect45365" name="check2" defaultChecked={themeChange} onChange={(e) => { handleTheme(e.target.checked) }} />
              <label htmlFor="rect45365"></label>
            </div>
          </div>
        </div>
      </div>}

      {hiddenInfoUser && <div className='blanket' style={{ zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
        <div className='menu_navbar' style={{ width: '100%', flexDirection: 'column', maxWidth: 900, height: 'max-content' }} data-theme={localThemeContext}>
          <div ref={wrapperRef} className='submenu_navbar_title' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
              <div className='buttonCircleRed' onClick={() => { setHiddenInfoUser(false) }} style={{ width: 30, height: 30, fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center' }} data-theme={localThemeContext}>
                <FontAwesomeIcon icon={faXmark} />
              </div>
            </div>
            <Contact user={props.user} />
          </div>
        </div>
      </div>}

      <div className='navbar' data-theme={localThemeContext}>
        <img className='porfolio_img-mobile' style={{ width: 140, zIndex: 10000 }} src={imgPro_white} alt="" onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />

        <div className='buttonCircle buttonCircle_mobile' onClick={handleThemeChange} style={{ width: 35, height: 35, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 15, marginRight: 5, background: 'none', boxShadow: 'none' }} data-theme={localThemeContext}>
          {!localThemeContext && <img src={sunny} alt="sunny" />}
          {localThemeContext === 'light' && <img src={moon} alt="moon" />}
          {localThemeContext === 'default' && <img src={sunny} alt="sunny" />}
        </div>

        <div className="nav_static" data-theme={localThemeContext}>
          <img className='porfolio_img' style={{ width: 140, zIndex: 10000 }} src={imgPro_white} alt="" onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} />
          <a href='#Qui_suis_je' className="nav_button">Qui suis-je ?</a>
          <a href='#realisations' className="nav_button">Réalisations</a>
          <a href='#competences' className="nav_button">Compétences</a>
          <div className="nav_button" onClick={handlehiddenInfo}>Contact</div>
          <div className='buttonCircle' onClick={handleThemeChange} style={{ width: 35, height: 35, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 15, marginRight: 5, background: 'none', boxShadow: 'none' }} data-theme={localThemeContext}>
            {!localThemeContext && <img src={sunny} alt="sunny" />}
            {localThemeContext === 'light' && <img src={moon} alt="moon" />}
            {localThemeContext === 'default' && <img src={sunny} alt="sunny" />}
          </div>
        </div>
      </div>
    </>
  )
}

export default NaveBar