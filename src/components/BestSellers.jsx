import '../styles/bestSellers.css';
import BodyContainer from './common/BodyContainer';
import BestSellCard from './common/BestSellCard';
import { useEffect, useState } from 'react';
import {hostServer } from '../util/host';
import axios from 'axios';

function BestSellers() {
    const [isOpen, setIsOpen] = useState(false);
    const [bestSellers, setBestSellers] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState();


    useEffect(() => {
        axios.get(`${hostServer}/bestsellers`).then(res => {
            setBestSellers(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            <BestSellCard image={image} title={title} description={description} price={price} isOpen={isOpen} _onClick={() => { setIsOpen(false) }} />
            <BodyContainer title={'BEST SELLERS'} viewAll={false}
                card={
                    <div className='bestsellers-menu-body'>
                        <div className='bestsellers-menu-slider'>
                            {bestSellers !== undefined ? bestSellers.map((d) => (
                                <a href='#slideTop' key={d.id}>
                                    <div onClick={() => { setIsOpen(true); setTitle(d.title); setDescription(d.description); setImage(d.image); setPrice(d.price) }} className='bestsellers-menu-card'>
                                        <img className='bestsellers-menu-card-image' src={d.image} alt='' />
                                    </div>
                                </a>
                            )) : null}
                        </div>
                    </div>
                } />
        </>
    );
}

export default BestSellers;
