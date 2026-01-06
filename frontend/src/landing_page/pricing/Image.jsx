
function Image({imgUrl,title,description}){
    return(
        <div className="col-4 p-4 ">
            <img src={imgUrl}  className="img-fluid" />
            <h2 className="text-center mt-2 fs-3">{title}</h2>
            <p className="text-muted text-center mt-4">{description}</p>
        </div>
    );
}
export default Image;