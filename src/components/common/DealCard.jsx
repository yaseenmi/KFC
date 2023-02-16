import '../../styles/dealCard.css';
import heart from '../../assets/vectors/heart.svg'
import imageloader from '../../assets/vectors/image-loader.svg'

function DealCard({ image, title, description, price, isLoaded,}) {
    return (
        <div className='deal-menu-card-container'>
            {!isLoaded ? (
                <img className='deal-menu-card-image' src={image} alt='' loading='lazy'/>
            ) :
                <img className='deal-menu-card-image' src={imageloader} alt='' />
            }
            <div className='deal-menu-card'>
                <p className='deal-menu-card-title'>{title}</p>
                <div className='heart-container'>
                    <img className='home-heart' src={heart} alt='heart' />
                </div>
                <hr className='divider'></hr>
                <p className='deal-menu-card-description'>{description}</p>
                <div className='price-container'>
                    <button className='deal-menu-card-price'>{price} QAR</button>
                </div>
            </div>
        </div>
    );
}

export default DealCard;
