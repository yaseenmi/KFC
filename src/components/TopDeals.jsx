import '../styles/topDeals.css';
import topdeals from '../assets/vectors/topdeals.svg';
import BodyContainer from './common/BodyContainer';
import { Link } from "react-router-dom";
import DealCard from './common/DealCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { hostServer } from '../util/host';
import Loader from './Loader';
function TopDeals() {
    const [deals, setDeals] = useState([]);

    useEffect(() => {
        axios.get(`${hostServer}/deals`).then(res => {
            setDeals(res.data);
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <>
            {deals.length !== 0 ? (
                <BodyContainer title={'TOP DEALS'} icon={topdeals} iconName={'chicken'} viewAll={true}
                    card={
                        <div className='topdeals-menu-body'>
                            <div className='topdeals-menu-slider'>
                                {deals.length !== undefined ? (deals.map((d) => (
                                    <Link key={d.id} style={{ textDecoration: 'none' }} to='/productList/deals'>
                                        <DealCard title={d.title} description={d.description} image={d.image} price={d.price} />
                                    </Link>
                                ))) : null}
                            </div>
                        </div>
                    }
                />
            ) : <Loader />}
        </>
    );
}

export default TopDeals;
