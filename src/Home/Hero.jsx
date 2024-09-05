import "./Hero.css"
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-overlay">
                <div className="hero-content">
                    <div className="md:flex md:space-x-10">
                        <div className="">
                            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">M & M Trading</h1>
                            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">Transport while being accountable</p>
                        </div>
                        <button className="hero-button -m-12 mt-6 md:m-auto rounded-md">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;