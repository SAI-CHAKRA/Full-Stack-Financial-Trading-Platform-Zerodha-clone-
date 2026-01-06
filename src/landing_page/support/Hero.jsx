function Hero() {
    return ( 
        // container-fluid is a bootstrap class which streatches the width and height (removes default bootstrap width and height)

         <section className="container-fluid" id="supportHero">
            
            <div className="p-5" id="supprotWrapper">
                <h4>Support Portal</h4>
                <a href="" id="supportAncor">Track Tickets</a>
            </div>

            <div className="row p-5">
                <div className="col-6 p-5">
                    <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                    <input type="text" id="supportInput" placeholder="Eg: how do i activate F&O, why is my order getting rejected..."></input>
                    <div id="supportLinks">
                        <a href="">Track account opening</a> &nbsp; &nbsp;
                        <a href="">Track segment activation</a>&nbsp;&nbsp;
                        <a href="">intraday<br/> margins</a>&nbsp;&nbsp;
                        <a href="">kite user manual</a>&nbsp;&nbsp;
                    </div>

                </div>
                <div className="col-6 p-5">
                    <h2>Featured</h2>
                    <ol>
                        <li><a href="" id="supportAncor">Current Takeovers and Delisting - January 2024</a></li>
                        <li><a href="" id="supportAncor">Latest Intraday leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;