import './Liquide_Progress_bar.scss';



const Liquide_Progress_bar = (props) => {

    

    return (
        <>
            <div style={{ borderRadius: props.style.borderRadius, border: props.style.border, backgroundImage: `url(${props.style.backgroundImage})` }} className="flacon" onMouseDown={(e) => e.preventDefault()} onContextMenu={(e) => e.preventDefault()}>
                {props.number && <h1 style={{ color: props.textColor }}><span translate="no">{props.value}</span>%</h1>}
                <div style={{ marginTop: `${100 - props.value}%` }} className="backgroung_flacon">
                    <div style={{ backgroundColor: props.color, boxShadow: `0 0 10px ${props.color}, -10px 0 20px ${props.color}, 10px 0 20px ${props.color}` }} className="backgroung_flacon_ware1"></div>
                    <div style={{ backgroundColor: props.color, boxShadow: `0 0 10px ${props.color}, -10px 0 20px ${props.color}, 10px 0 20px ${props.color}` }} className="backgroung_flacon_ware2"></div>
                    <div className="container_flacon_bubble">
                        <div className="flacon_bubble"></div>
                        <div className="flacon_bubble"></div>
                        <div className="flacon_bubble"></div>
                        <div className="flacon_bubble"></div>
                        <div className="flacon_bubble"></div>
                        <div className="flacon_bubble"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Liquide_Progress_bar