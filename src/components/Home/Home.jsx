import Navbar from "../Navbar/Navbar";
import Banner from "../banner/Banner";
import Card from "../cards/Card";
import Footer from "../footer/Footer";
import JoinUs from "../join/JoinUs";
import SmallCard from "../smallCard/SmallCard";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Card></Card>
            <SmallCard></SmallCard>
            <JoinUs></JoinUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;