import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='p-2.5 mx-auto'>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;