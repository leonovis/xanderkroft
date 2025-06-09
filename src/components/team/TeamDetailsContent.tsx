import { Link } from "react-router-dom";
import btnArrow from "/assets/images/btn-arrow.svg"

interface DataType {
    thumb?: string;
    name?: string;
    designation?: string;
}

const TeamDetailsContent = ({ memberData }: { memberData: DataType }) => {
    const { thumb, name, designation } = memberData;

    return (
        <>
            <div className="team-sec" id="team">
                <div className="team-details">
                    <div className="team-content-top">
                        <div className="thumb">
                            <img src={`/assets/images/${thumb}`} alt="Thumb" />
                        </div>
                        <div className="right-info">
                            <h2 className="title">{name}</h2>
                            <h4>{designation}</h4>
                            <p>
                                Bring to the table win-win survival strategies to ensure proactive domination. I take pride in my ability to envision and pursue perfection in every project I undertake.
                            </p>
                            <ul>
                                <li>
                                    <strong>Email:</strong>
                                    <a href="mailto:support@digital.com">alexwabali@xanderkroft.com</a>
                                </li>
                                <li>
                                    <strong>Phone:</strong>
                                    <a href="tel:123-456-7890">+2347059741489</a>
                                </li>
                            </ul>
                            <div className="button">
                                <Link to="/contact" className="theme-btn">
                                    Let's Connect
                                    <img src={btnArrow} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamDetailsContent;