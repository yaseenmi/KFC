import '../../styles/footer.css'
import kfc from '../../assets/vectors/kfc-light-logo.svg'
function Footer() {
    return (
        <footer className="footer">
            <img src={kfc} alt='kfc-light' />
            <div className='footer-info'>
                <div className='footer-desc-container'>
                    <p className='footer-desc'>
                        Items availability, prices, participation, delivery areas and charges, purchase
                        requirements for delivery may vary.
                    </p>
                </div>
                <div className='footer-links'>
                    <a href='#'>Menu</a>
                    <a href='#'>Store Locations</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms & Conditions</a>
                    <a href='#'>Contact</a>
                </div>

                <div className='social-links'>
                    <a href=''><i className='bi bi-facebook facebook'></i></a>
                    <a href=''><i className='bi bi-twitter twitter'></i></a>
                    <a href=''><i className='bi bi-instagram instagram'></i></a>
                </div>

                <div className='footer-rights-container'>
                    <p className='footer-rights'> ©KFC, Inc. All rights reserved.</p>
                    <div className='footer-boxes'>
                        <div className='box'></div>
                        <div className='box'></div>
                        <div className='box'></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;