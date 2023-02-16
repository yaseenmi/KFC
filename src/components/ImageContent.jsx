import boxdeal from '../assets/images/boxdeal.png'
import burger from '../assets/images/burger.png'
import fav from '../assets/images/fav.png'
import limitedtime from '../assets/images/limitedtime.png'
import '../styles/imageContent.css'
function ImageContent(){
    return(
        <div className="images-container">
            <img src={fav} alt='' loading='lazy'/>
            <img src={limitedtime} alt='' loading='lazy'/>
            <img src={boxdeal} alt='' loading='lazy'/>
            <img src={burger} alt='' loading='lazy'/>
        </div>
    )
}
export default ImageContent