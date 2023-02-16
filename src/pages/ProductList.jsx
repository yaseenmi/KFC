import Deals from '../components/Deals';
import './../styles/productList.css';
import chooseMeal from '../assets/vectors/chooseMeal.svg'
import { useState } from 'react';
const ProductList = () => {
    const [menu, setMenu] = useState('deals');
    const [search, setSearch] = useState();
    document.title = "Products | KFC"

    return (
        <>
            <div className="productList-container">
                <div className='productList-menu-container'>
                    <div className='productList-menu'>

                        <div className='productList-menu-items'>

                            <div onClick={() => setMenu('deals')} className='productList-item' style={{ background: menu === 'deals' ? '#FEF2F4' : '' }}>
                                <p style={{ color: menu === 'deals' ? '#E4002B' : '' }} className='item'>Deals</p>
                            </div>

                            <div onClick={() => setMenu('bestsellers')} className='productList-item' style={{ background: menu === 'bestsellers' ? '#FEF2F4' : '' }}>
                                <p style={{ color: menu === 'bestsellers' ? '#E4002B' : '' }} className='item'>For One</p>
                            </div>

                            <div className='productList-item'>
                                <p className='item'>For Sharing</p>
                            </div>

                            <div className='productList-item'>
                                <p className='item'>Sides & desserts</p>
                            </div>

                            <div className='productList-item'>
                                <p className='item'>Beverages</p>
                            </div>

                            <div className='productList-item'>
                                <p className='item'>Sandwiches</p>
                            </div>

                            <div className='productList-item'>
                                <p className='item'>My Favorites</p>
                            </div>

                            <div className='productList-item'>
                                <input className='productList-search' onChange={(e) => { setSearch(e.target.value) }} type={'text'} name='search' placeholder="Search           &#61442;" />
                            </div>

                        </div>

                    </div>
                </div>
                <div className='productList-body-container'>

                    <Deals type={menu} _search={search} />

                    <div className='productList-choose-your-meal'>

                        <div className='choose-your-meal-header'>
                            <p className='choose-your-meal-text'>Choose Your Meal</p>
                            <div className='choose-your-meal-boxes'>
                                <div className='meal-box'></div>
                                <div className='meal-box'></div>
                                <div className='meal-box'></div>
                            </div>
                        </div>

                        <img className='choose-your-meal-image' src={chooseMeal} alt='choose meal' />

                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductList;
