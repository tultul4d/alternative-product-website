



import Banner from "./Banner/Banner";
import Cards from "./Cards/Cards";
import Contect from "./Contect/Contect";
import Products from "./Products/Products";
import Slider from "./Slider/Slider";
// import Sloder2 from "./Sloder2/Sloder2";


const Home = () => {
    return (
        <div>
            <Banner></Banner>

             <Slider></Slider> 
             <Contect></Contect>
             <Products></Products>

             {/* <Sloder2></Sloder2> */}
             <Cards></Cards>
           
            
        </div>
    );
};

export default Home;