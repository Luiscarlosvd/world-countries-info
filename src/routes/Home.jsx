import CountriesList from '../components/CountriesList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => (
    <>
        <Navbar title="Countries Information" />
        <main className='bg-blue-800 h-full pt-12'>
            <CountriesList />
        </main>
        <Footer />
    </>
)

export default Home