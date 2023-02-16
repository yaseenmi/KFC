import kfcLogo from '../assets/vectors/kfc-logo.svg'
import loader from '../assets/vectors/loader.svg'
import '../styles/loader.css'
function Loader() {
    return (
        <div className="loader-container" >
            <img className="loader-text" src={kfcLogo} color={'primary'} alt='' />
            <img className="loader-logo" src={loader} loading='eager' alt='Loading...' />
        </div>
    )
}
export default Loader;