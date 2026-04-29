const Ads=()=>{
    return (
        <>
        <div className="ads-wrapper">
        <div className="ads1-cont">
            <div className="ads1-vid">
            <video src="https://content-management-files.canva.com/fbd599e2-8bae-40e1-91a0-628a9182c09d/Recommended_DreamLab_Desktop2.mp4"
                    width="600"
                    autoPlay
                    loop
                    muted
                    playsInline>

            </video>
            </div>
            <div className="Overlay">
                <h2>Explore with canva</h2>
            </div>
        </div>
        <div className="ads2-cont">
            <div className="ads2-img">
            <img src="https://content-management-files.canva.com/3aefbd76-8499-4ee1-807f-9b2c901a3878/Recommended_BGremover_Desktop_2x.png" alt="Ad2"></img>
            </div>
            <div className="Overlay-img">
                <div className="img-text">Bye-bye background in a single click</div>
                <div className="img-button">
                    <button>Remove background</button>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default  Ads;