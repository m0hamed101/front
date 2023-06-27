
import './Home.css'
import homeimg from '../assets/DFSGHcopy.jpg';
import { CUP } from '../CUP/CUP';
import { About } from '../about/about';
import { Footer } from '../footer/Footer';
import { Menu } from '../menu/menu';
import { Header } from '../Header/Header';
import { useLocation } from 'react-router-dom';

export const Home = ({api}) => {
    const location =useLocation()
    console.log(location);
    

    return (
        <div className='home'>
            <Header/>
            <img className='homeimg' src={homeimg} />
            <CUP />
            <About />
            <Menu api={api} />
            <Footer />


        </div>
    )
}
