function Hero() {
    return ( 
        <div className="container p-5 text-center">
            <div className="row">
                <img src="media/images/homeHero.png" alt="Hero image" className="mb-3"/>
                <h1 className="mt-3">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 fs-7 fw-bold btn " style={{width:"20%", margin:"0 auto",backgroundColor:"#387ed1" ,color:"#fff"}}>Sign Up for free</button>
            </div>
        </div>

     );
}

export default Hero;