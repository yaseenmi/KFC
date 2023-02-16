import '../../styles/bestSellCard.css'

function BestSellCard({ image, title, description, price, isOpen ,_onClick}) {

    return (
        <div style={{ display: isOpen ? 'flex' : 'none' }} className="bestSell-parent-container">
            <div onClick={_onClick} className="bestSell-close">
                <i className="bi bi-x close-icon"></i>
            </div>

            <div className="bestSell-child-container">
                <div className="bestSell-boxes-container">
                    <div className="bestSell-box"></div>
                    <div className="bestSell-box"></div>
                    <div className="bestSell-box"></div>
                </div>

                <img className="bestSell-image" src={image} alt='' loading='lazy'/>

                <div className="bestSell-card-container">
                    <p className="bestSell-title">{title}</p>
                    <p className="bestSell-description">{description}</p>
                    <div className='bestSell-button-container'>
                        <button className="bestSell-button" >{price} QAR</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default BestSellCard