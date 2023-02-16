import '../../styles/bodyContainer.css';
import { Link } from 'react-router-dom';

function BodyContainer({ title, viewAll, icon, iconName, card }) {

  return (
    <div className='menu-container'>

      <div className='menu-header'>

        <div className='title'>

          <div className='title-container'>
            <p>{title}</p>
            <div className='bar'></div>
          </div>
          {icon ? <img className={`${iconName}-icon`} src={icon} alt={iconName} /> : null}
        </div>

        {viewAll === true ? (
          <div className='view-all'>
            <p>View All</p>
            <Link to='/productList/deals'><i className='bi bi-arrow-right-square view-all-icon'></i></Link>
          </div>
        ) : null}

      </div>
      <div className='menu'>
        <>
          {card}
        </>

      </div>

    </div>

  );
}

export default BodyContainer;
