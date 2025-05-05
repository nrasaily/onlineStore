import './Home.css';
import{Link} from 'react-router-dom';

function Home(){
    
    return(
        <div className='home'>
            
            <img className='main-img' src="/images/toyota.avif" />

            <div className='overlay-text'>
                <h1>CarDeal</h1>
                <h4>Durable car, 1-click away!</h4>
                <Link className='btn btn-lg btn-success' to="catalog">
                Check our Catalog
                <i className="fa-solid fa-circle-chevron-right iNext"></i>
                </Link>
            </div>
        </div>
        
    )
}

export default Home;