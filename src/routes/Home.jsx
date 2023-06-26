import CountriesList from '../components/CountriesList';
import Navbar from '../components/Navbar';

const Home = () => (
    <>
        <Navbar title="Countries Information" />
        <main className='bg-blue-800 h-screen pt-12'>
            <CountriesList />
        </main>
    </>
)

export default Home