import contact from '/assets/images/contact.png';
import btnArrow from '/assets/images/btn-arrow.svg';
import { Link } from "react-router-dom";

interface DataType {
    title?: string;
}

const HeroV2 = ({ title }: DataType) => {
    return (
        <>
            <div className="hero-sec about-hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">
                        <img className="hero-shape" src={contact} alt="Shape" />
                        <div className="hero-top">
                            <div className="hero-top-desc">
                                <p>“At XANDERKOFT, we believe that creativity is the catalyst for innovation. As a procurement contractor company, we specialise in transforming bold ideas into compelling realities.</p>
                                <p>We approach every project with the same level of dedication and attention to detail. “</p>
                            </div>
                            <div className="author-info">
                                <h4>Alex Wabali</h4>
                                <span>Chief Executive Officer</span>
                            </div>
                        </div>
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>{title ? title : "Not found Page"}</h2>
                                <h2>XANDERKOFT</h2>
                            </div>
                            <Link to="/contact" className="theme-btn">
                                {`Let's Connect`}
                                <img src={btnArrow} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV2;