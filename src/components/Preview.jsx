import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { RemoveScroll } from 'react-remove-scroll';
import github from '../assets/icons/github_3291667.png';
import { useAppContext } from '../contexts/UseAppContext';


const Preview = () => {

    const {localTheme, setFullScreenData, fullScreenData } = useAppContext()


    const wrapperRef = useRef(null);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setFullScreenData(null)
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

    if (fullScreenData == null) return null

    return (
        <>
            <RemoveScroll className='blanket' style={{ zIndex: 11000, display: 'flex', justifyContent: 'center' }} >
                <div className='cter_sect'>
                    <div className='ctent_arti' data-theme={localTheme}>
                        <div ref={wrapperRef} className='scrollbar animation' style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', overflow: 'auto', color: 'white', background: '#131313', paddingTop: 10, paddingBottom: 20, borderRadius: 25 }} data-theme={localTheme}>
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row-reverse' }}>
                                <div onClick={() => { setFullScreenData(null) }} className='buttonCircleRed' style={{ width: 30, height: 30, fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'absolute' }}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </div>
                            </div>
                            <h2>{fullScreenData.title}</h2>
                            <img onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} style={{ width: '100%', maxWidth: 400, borderRadius: 15, objectFit: 'contain', height: 'max-content' }} src={fullScreenData.image} alt="" />

                            {fullScreenData.data && <div translate='no' style={{ width: '100%', maxWidth: 800, fontSize: 20, textAlign: 'center', marginTop: 50, marginBottom: 50 }}>{fullScreenData.data}</div>}

                            {fullScreenData.image1 && <img onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} style={{ width: '100%', maxWidth: 500, borderRadius: 15, objectFit: 'contain', height: 'max-content', marginBottom: 20 }} src={fullScreenData.image1} alt="" />}

                            {fullScreenData.data1 && <div translate='no' style={{ width: '100%', maxWidth: 800, fontSize: 20, textAlign: 'center', marginTop: 50, marginBottom: 50 }}>{fullScreenData.data1}</div>}

                            {fullScreenData.image2 && <img onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} style={{ width: '100%', maxWidth: 500, borderRadius: 15, objectFit: 'contain', height: 'max-content', marginBottom: 20 }} src={fullScreenData.image2} alt="" />}

                            {fullScreenData.data2 && <div translate='no' style={{ width: '100%', maxWidth: 800, fontSize: 20, textAlign: 'center', marginTop: 50, marginBottom: 50 }}>{fullScreenData.data2}</div>}

                            {fullScreenData.image3 && <img onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()} style={{ width: '100%', maxWidth: 500, borderRadius: 15, objectFit: 'contain', height: 'max-content' }} src={fullScreenData.image3} alt="" />}

                            {fullScreenData.data3 && <div translate='no' style={{ width: '100%', maxWidth: 800, fontSize: 20, textAlign: 'center', marginTop: 50, marginBottom: 50 }}>{fullScreenData.data3}</div>}

                            {fullScreenData.github && <><div style={{ marginTop: 50 }}>Lien github:</div>

                                <a href={fullScreenData.github} target="_blank"><img src={github} style={{borderRadius: 25}} alt="" /></a></>}
                        </div>
                    </div>
                </div>
            </RemoveScroll>
        </>
    )
}

export default Preview