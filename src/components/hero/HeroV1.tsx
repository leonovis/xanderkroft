import btnArrowIcon from "/assets/images/btn-arrow.svg";
import { Link } from "react-router-dom";

const HeroV1 = () => {
    return (
        <>
            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">

                        {/* Video Section */}
                        <div className="hero-video">
                            <video loop muted autoPlay>
                                <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                            </video>
                        </div>

                        <div className="hero-top">

                            {/* Hero Description */}
                            <div className="hero-top-desc">
                                <p>“At XANDERKOFT, we believe that creativity is the catalyst for innovation. As a procurement contractor company, we specialise in transforming bold ideas into compelling realities.</p>
                                <p>we approach every project with the same level of dedication and attention to detail. “</p>
                            </div>

                            {/* Author Information */}
                            <div className="author-info">
                                <h4>Alex Wabali</h4>
                                <span>Chief Executive Officer</span>
                            </div>
                        </div>

                        {/* Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>Imagination</h2>
                                <h2>Meets Innovation</h2>
                            </div>

                            {/* Button Section */}
                            <Link to="/contact" className="theme-btn">
                                {`Let's Connect`}
                                <img src={btnArrowIcon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;