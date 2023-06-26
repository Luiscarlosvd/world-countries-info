import CountriesList from '../components/CountriesList';
import Navbar from '../components/Navbar';

const Home = () => (
    <>
        <Navbar title="Countries Information" />
        <div className='bg-blue-800 h-screen pt-12'>
            <CountriesList />
        </div>
    </>
)

export default Home