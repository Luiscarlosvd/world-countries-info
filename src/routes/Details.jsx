import { useParams } from 'react-router';
import DetailsCountry from '../components/DetailsCountry';
import Navbar from '../components/Navbar';

const Details = () => {
    const { countryName } = useParams()

    return (
        <>
            <Navbar title={`${countryName}`} />
            <section className="pt-6">
                <DetailsCountry />
            </section>
        </>
    )
}

export default Details