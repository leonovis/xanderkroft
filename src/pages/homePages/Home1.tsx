import AboutV1 from "../../components/about/AboutV1";
import ContactV1 from "../../components/contact/ContactV1";
import HeroV1 from "../../components/hero/HeroV1";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ServicesV1 from "../../components/services/ServicesV1";
import TeamV1 from "../../components/team/TeamV1";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";

const Home1Page = () => {
    return (
        <div className="aixor-main">
            <LayoutV1>
                <HeroV1 />
                <AboutV1 />
                <ServicesV1 />
                <TeamV1 />
                <TestimonialV1 />
                <ContactV1 />
            </LayoutV1>
        </div>
    );
};

export default Home1Page;