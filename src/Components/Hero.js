const Hero=()=>{
    return (
    <div className="hero-section">
    <div className="hero-cont">
        <div className="hero-h2">
            Where heart meets art
        </div>
        <div className="hero-sub">
            Canva makes it easy to create and share professional designs.
        </div>
        <div className="hero-button">
            <button>
                Sign up and start designing
            </button>
        </div>
    </div>
    <div className="hero-video">
        <video src="https://content-management-files.canva.com/f521ebb2-bf15-4e2b-9085-9979b16a4362/canva_jadu_dadu_hin_16_9.mp4" 
                    width="600"
                    autoPlay
                    loop
                    muted
                    playsInline>
        </video>
    </div>
    </div>
    );
};
export default Hero;