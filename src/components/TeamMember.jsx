import { useEffect, useRef, useState } from "react";
import "../styles/teamMember.scss";
import { AiFillLinkedin } from "react-icons/ai";

const TeamMember = ({ name, memberClass, image, linkedin, customClass }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={`team-member-card ${visible ? "visible" : ""}`}>
            <div className="member-image">
                <img
                    src={image || "/team-member-images/placeholder.png"}
                    alt={name}
                    className={customClass || ""}
                />
            </div>
            <div className="member-details">
                <h4 className="member-name">{name}</h4>
                <p className="member-class">{memberClass}</p>
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noreferrer">
                        <AiFillLinkedin />
                    </a>
                )}
            </div>
        </div>
    );
};

export default TeamMember;
