import '../styles/exploreMenu.css';

import chicken from '../assets/vectors/chicken.svg';
import { useState } from 'react';
import BodyContainer from './common/BodyContainer';
import { exploreData } from '../util/exploreData';
import { Link } from 'react-router-dom';

function ExploreMenu() {
    const [slide, setSlide] = useState(0)
    const handleLeftSlideClick = () => {
        let value = slide;

        if (value !== 0) {
            value = value - 25
            setSlide(value);
            console.log(slide)
        }
    }
    const handleRightSlideClick = () => {
        let value = slide;
        if (value !== 100) {
            value = value + 25
            setSlide(value);
            console.log(slide)
        }
    }
    return (
        <BodyContainer title={'EXPLORE MENU'} icon={chicken} iconName={'chicken'} viewAll={true}
            card={
                <>
                    <div onClick={handleLeftSlideClick} className='explore-menu-slide-left'>
                        <i style={{ color: `${slide === 0 ? 'gray' : '#427EFF'}` }} className='bi bi-arrow-left-circle'></i>
                    </div>

                    <div className='explore-menu-body'>
                        <div className='explore-menu-slider' style={{ transform: `translate(${-slide}%)` }}>
                            {exploreData.map((e, i) => (
                                <Link style={{ textDecoration: 'none' }} key={i} to={'/productList/deals'}>
                                    <div className='explore-menu-card'>
                                        <img className='explore-menu-card-image' src={e.image} alt='' />
                                        <p className='explore-menu-card-title'>{e.title}</p>
                                        <div className='explore-menu-card-bar'></div>
                                        <span className='dot'></span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div onClick={handleRightSlideClick} className='explore-menu-slide-right'>
                        <i style={{ color: `${slide === 100 ? 'gray' : '#427EFF'}` }} className='bi bi-arrow-right-circle'></i>
                    </div>

                </>
            } />
    );
}

export default ExploreMenu;
