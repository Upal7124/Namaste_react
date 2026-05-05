import Ads from "./Ads";
import Hero from "./Hero";
import Tools from "./Tools";
const Body=()=>{
    return (
        <div className="body">
            <div className="canva-cont"></div>
            <Hero/>
            <Tools/>
            <Ads/>
        </div>
    );
}
export default Body;