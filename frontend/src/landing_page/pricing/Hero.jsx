import Image from "./Image.jsx";
function Hero() {
    return ( 
        <div className="container">
             <div className="row p-5 mt-5 border-bottom text-center">
                <h1>Pricing</h1>
                <h3 className="text-muted mt-3 fs-5">
                    Free equity investment and flat ₹20 traday and F&O trades
                </h3>
            </div>

            <div className="row p-4 mt-5">
                    <Image imgUrl="media\images\pricingEquity.svg" title="Free equity delivery" description="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."/>
                    <Image imgUrl="media\images\intradayTrades.svg" title="Intraday and F&O trades" description="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."/>
                    <Image imgUrl="media\images\pricingEquity.svg" title="Free direct MF" description="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."/>
 
            </div>
        </div>
     );
}

export default Hero;