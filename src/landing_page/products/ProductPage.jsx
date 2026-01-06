import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage(){
    return(
        <>
            <Hero />

            <LeftSection imageURL="media/images/kite.png" title="Kite" description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
            tryDemo="#" learnMore="#" googlePlay="#" appStore="#" />

            <RightSection imageURL="media\images\console.png" title="Console" description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." 
            learnMore="#" />

            <LeftSection imageURL="media\images\coin.png" title="Coin" description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
            tryDemo="#" learnMore="#" googlePlay="#" appStore="#" />

            <RightSection imageURL="media/images/kiteconnect.png" title="Kite Connect API" description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
             learnMore="#" />

            <LeftSection imageURL="media\images\varsity.png" title="Varsity mobile" description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
            tryDemo="#" learnMore="#" googlePlay="#" appStore="#" />

            <h4 className="text-center">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h4>

            <Universe />

           

        </>
    );
}
export default ProductPage;