function RightSection({imageURL, title, description, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5 mt-5 ">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="mt-3">
                        <a href={learnMore} >Learn More <i className="fa fa-long-arrow-right" aria-hidden='true'></i></a>
                    </div>
                </div>

                <div className="col-6 p-5">
                    <img src={imageURL} className="img-fluid"/>
                </div>
            </div>
        </div>

     );
}


export default RightSection;