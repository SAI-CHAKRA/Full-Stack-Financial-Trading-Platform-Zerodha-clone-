function Education() {
    return ( 
        <div className="container p-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" style={{width:"70%"}}/>
                </div>
                <div className="col-6">
                <h2 className="mb-4 fs-3">Free and open market education</h2>
                    <p className="fs-6">
                        Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
                    </p>
                    <a href='#' className="fs-6" style={{textDecoration:"none"}}>Varsity <i className="fa fa-long-arrow-right fs-6" aria-hidden='true'></i></a>

                    <p className="mt-5 fs-6">
                        TradingQ&A, the most active trading and investment community in India for all your market related queries.
                    </p>
                    <a href='#' className=" fs-6" style={{textDecoration:"none"}}>TradingQ&A <i className="fa fa-long-arrow-right fs-6" aria-hidden='true'></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;