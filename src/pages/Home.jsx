import './../styles/home.css';
import offer from './../assets/images/offer.png';
import ExploreMenu from '../components/ExploreMenu';
import TopDeals from '../components/TopDeals';
import BestSellers from '../components/BestSellers';
import ImageContent from '../components/ImageContent';


const Home = () => {

  document.title = "Home | KFC"

  return (
    <>
      <div className="home-container">
        <img className='wide-image-offer' src={offer} alt='offer' />
        <div className='products-container'>
          <ExploreMenu />
          <TopDeals />
          <BestSellers />
          <ImageContent />
        </div>
      </div>
    </>
  );
}

export default Home;
