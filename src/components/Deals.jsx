import '../styles/deals.css';
import DealCard from './common/DealCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { hostServer } from '../util/host';
import Loader from './Loader';
function Deals({ type, _search }) {
    const [deals, setDeals] = useState([]);
    const [dealsTemp, setDealTemp] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        setIsLoaded(true)
        axios.get(`${hostServer}/${type}`).then(res => {
            setDeals(res.data);
            setDealTemp(res.data)
        }).catch(err => {
            console.log(err)
        }).finally(() => setIsLoaded(false))

    }, [type])

    useEffect(() => {
        if (_search !== undefined) {
            console.log(_search)
            let value = _search.trim().toLowerCase();
            let result = dealsTemp.filter((el) => el.title.trim().toLowerCase().includes(value) || el.description.trim().toLowerCase().includes(value) || el.price.trim().toLowerCase().includes(value))
            if (result.length === 0) {
                setIsEmpty(true);
            }
            else {
                setDeals(result)
                setIsEmpty(false);
            }
        }
    }, [_search])
    return (

        <div className='productList-deals-container'>
            {deals.length !== 0 && !isEmpty ? (deals.map((d) => (
                <div className='dealCard-container'>
                    <DealCard title={d.title} description={d.description} image={d.image} price={d.price} isLoaded={isLoaded} />
                </div>
            ))
            ) : deals.length === 0 && !isEmpty ? <Loader /> : null
            }

        </div>

    );
}

export default Deals;
