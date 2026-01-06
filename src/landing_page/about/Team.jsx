function Team() {
    return (
        <div className="container">
            <h2 className="text-center text-muted  mb-3">People</h2>
            <div className="row p-5">
                <div className="col-6 text-center">
                    <img src="media/images/nithinKamath.jpg" className="mt-4" style={{borderRadius:"100%", width:"50%", objectFit: "cover"}}/>
                    <h4 className="mt-4">Nithin Kamath</h4>
                    <p>Founder, CEO</p>
                </div>
                <div className="col-6 p-3 " style={{lineHeight:"1.8",fontSize:"1.1rem"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href="#" style={{textDecoration:"none"}}>Homepage</a> / <a href="#" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="#" style={{textDecoration:"none"}}>Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;