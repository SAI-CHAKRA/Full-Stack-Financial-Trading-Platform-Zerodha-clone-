function LeftSection({imageURL, title, description, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-5">
                    <img src={imageURL} className="img-fluid"/>
                </div>
                 
                <div className="col-6 p-5 mt-5">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <div className="mt-3">
                        <a href={tryDemo}>Try Demo <i className="fa fa-long-arrow-right" aria-hidden='true'></i></a>
                        <a href={learnMore} style={{marginLeft:"50px"}}>Learn More <i className="fa fa-long-arrow-right" aria-hidden='true'></i></a>
                    </div>
                    <div className="mt-3">
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore} style={{marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" /></a>
                    </div>
                </div>
            </div>
        </div>

     );
}


export default LeftSection;