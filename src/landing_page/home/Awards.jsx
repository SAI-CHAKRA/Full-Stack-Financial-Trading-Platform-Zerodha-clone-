function Awards() {
    return (
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-6 p-3">
                    <img src="media/images/largestBroker.svg" className="img-fluid" alt="awards Image"/>
                </div>
                <div className="col-6 p-3 mt-4">
                    <h2 className="fs-2">Largest stock broker in india</h2>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india dialy by trading and investing in: </p>

                    <div className="row mt-4 fs-7">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Commodity and derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                            <li>
                                    <p>Stocks and IPO's</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bond's and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        <img className="mt-4" src="media/images/pressLogos.png" alt="Press Logos" style={{width:"90%"}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;