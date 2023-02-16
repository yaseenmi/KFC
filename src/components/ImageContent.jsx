import boxdeal from '../assets/images/boxdeal.png'
import burger from '../assets/images/burger.png'
import fav from '../assets/images/fav.png'
import limitedtime from '../assets/images/limitedtime.png'
import '../styles/imageContent.css'
function ImageContent(){
    return(
        <div className="images-container">
            <img src={fav} alt=''/>
            <img src={limitedtime} alt=''/>
            <img src={boxdeal} alt=''/>
            <img src={burger} alt=''/>
        </div>
    )
}
export default ImageContent