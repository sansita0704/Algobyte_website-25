import React from "react";
import TeamMember from "./TeamMember";
import "../styles/team.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Team = () => {
    const { hash } = useLocation();

    useEffect(() => {
        // When hash changes, try to scroll to the element
        if (hash) {
            const element = document.querySelector(hash);

            if (element) {
                // Smooth scroll to the element
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    }, [hash]);

    return (
        <div className="team">


            <h2>
                Meet Our Team</h2>

            <h3 id="mentors">Our Mentors</h3>
            <div className="team-row">
                <TeamMember
                    name="Dr. Vaibhav Vyas"
                    memberClass="Faculty of Computer Science and Mathematics"
                    linkedin="https://www.linkedin.com/in/dr-vaibhav-vyas-639109235?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    image={"/team-member-images/vaibhavsir.png"}
                />
                <TeamMember
                    name="Dr. Monika Saxena"
                    memberClass="Faculty of Computer Science and Mathematics"
                    linkedin="https://www.linkedin.com/in/dr-monika-saxena-46597530?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    image={"/team-member-images/monikamam.png"}
                    customClass={"image-position-top"}
                />
            </div>

            <h3 id="leads">Leads</h3>
            <div className="team-row">
                <TeamMember
                    name="Palak Bansal"
                    memberClass="B.Tech (CS) 4th Year"
                    linkedin="https://www.linkedin.com/in/palak-bansal-58b845339"
                    image={"/team-member-images/Palak Bansal.jpg"}
                    customClass={"image-position-top"}
                />
                <TeamMember
                    name="Simran Govil"
                    memberClass="B.Tech (CS) 4th Year"
                    linkedin="https://www.linkedin.com/in/simran-govil-288325286"
                    image={"/team-member-images/Simran Govil.jpeg"}
                />
                <TeamMember
                    name="Vanshiika Tiwari"
                    memberClass="B.Tech (IT) 4th Year"
                    linkedin="https://www.linkedin.com/in/vanshiika-tiwari-student"
                    image={"/team-member-images/Vanshiika Tiwari.jpg"}
                    customClass={"image-position-top"}
                />
                <TeamMember
                    name="Sanya Anand"
                    memberClass="B.Tech (CS) 4th Year"
                    linkedin="https://www.linkedin.com/in/anand-sanya"
                    image={"/team-member-images/Sanya Anand.jpg"}
                />
                <TeamMember
                    name="Antra Verma"
                    memberClass="B.Tech (EE-VLSI) 4th Year"
                    linkedin="https://www.linkedin.com/in/antra-verma-av?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    image={"/team-member-images/ANTRA VERMA.JPG"}
                />
            </div>

            <h3 id="tech-team">Technical Team</h3>
            <div className="team-row">
                <TeamMember
                    name="Palak Bansal"
                    memberClass="B.Tech (CS) 4th Year"
                    linkedin="https://www.linkedin.com/in/palak-bansal-58b845339"
                    image={"/team-member-images/Palak Bansal.jpg"}
                    customClass={"image-position-top"}
                />
                <TeamMember
                    name="Akshita Singhal"
                    memberClass="B.Tech (CS) 3rd Year"
                    linkedin="https://www.linkedin.com/in/akshita-singhal-649956304"
                    image={"/team-member-images/Akshita Singhal.jpg"}
                />
                <TeamMember
                    name="Sansita Jain"
                    memberClass="B.Tech (CS) 3rd Year"
                    linkedin="https://www.linkedin.com/in/sansita0704"
                    image={"/team-member-images/Sansita Jain.jpg"}
                    customClass={"image-position-top"}
                />
                <TeamMember
                    name="Tanu Verma"
                    memberClass="B.Tech (CS) 3rd Year"
                    linkedin="https://www.linkedin.com/in/tanu-verma-877599321"
                    image={"/team-member-images/Tanu Verma.jpg"}
                    customClass={"image-position-top"}
                />
                <TeamMember
                    name="Mannat Hooja"
                    memberClass="B.Tech (CS-AI) 3rd Year"
                    linkedin="https://www.linkedin.com/in/mannat-hooja-31442732a"
                    image={"/team-member-images/Mannat Hooja.jpg"}
                />
                <TeamMember
                    name="Unnati Chandani"
                    memberClass="B.Tech (CS) 2nd Year"
                    linkedin="https://www.linkedin.com/in/unnati-chandani-79b03237b"
                    image={"/team-member-images/unnati.jpeg"}
                />
                <TeamMember
                    name="Drishika Vyas"
                    memberClass="B.Tech (IT) 2nd Year"
                    linkedin="https://www.linkedin.com/in/drishika-vyas-605413386"
                    image={"/team-member-images/Drishika Vyas.jpg"}
                />
                <TeamMember
                    name="Priyal Gupta"
                    memberClass="B.Tech (CS) 2nd Year"
                    linkedin="https://www.linkedin.com/in/priyal-gupta-990829373?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    image={"/team-member-images/priyal.jpeg"}
                />
                <TeamMember
                    name="Apurwa"
                    memberClass="B.Tech (CS) 2nd Year"
                    linkedin="https://www.linkedin.com/in/apurwa-88020b380?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    image={"/team-member-images/apurwa.jpeg"}
                />
                <TeamMember
                    name="Manasvi Dixit"
                    memberClass="B.Tech (CS-AI) 1st Year"
                    linkedin="https://www.linkedin.com/in/manasvi-dixit-80b564320/"
                    image={"/team-member-images/manasvi dixit.jpg"}
                />
                <TeamMember
                    name="Anshika Jain"
                    memberClass="B.Tech (CS-AI) 1st Year"
                    linkedin=""
                    image={"/team-member-images/anshika jain.jpg"}
                />
                <TeamMember
                    name="Sneha"
                    memberClass="B.Tech (CS) 1st Year"
                    linkedin=""
                    image={"/team-member-images/sneha.jpg"}
                />
            </div>

            <h3 id="event-team">Event Management Team</h3>
            <div className="team-row">
                <TeamMember
                    name="Simran Govil"
                    memberClass="B.Tech (CS) 4th Year"
                    linkedin="https://www.linkedin.com/in/simran-govil-288325286"
                    image={"/team-member-images/Simran Govil.jpeg"}
                />
                <TeamMember
                    name="Vanshiika Tiwari"
                    memberClass="B.Tech (IT) 4th Year"
                    linkedin="https://www.linkedin.com/in/vanshiika-tiwari-student"
                    image={"/team-member-images/Vanshiika Tiwari.jpg"}
                    customClass={"image-position-top"}
                />
                <TeamMember
                    name="Garima Kapil"
                    memberClass="B.Tech (IT) 3rd Year"
                    linkedin="https://www.linkedin.com/in/garima-kapil-020873322"
                    image={"/team-member-images/Garima Kapil.jpg"}
                />
                <TeamMember
                    name="Varali Gupta"
                    memberClass="B.Tech (CS) 3rd Year"
                    linkedin="https://www.linkedin.com/in/varaligupta"
                    image={"/team-member-images/Varali Gupta.png"}
                />
                <TeamMember
                    name="Palak Sibbal"
                    memberClass="B.Tech (CS-AI) 3rd Year"
                    linkedin="https://www.linkedin.com/in/palak-sibbal-326b1732b"
                    image={"/team-member-images/Palak Sibbal.jpeg"}
                    customClass={"image-position-top"}
                />
                <TeamMember
                    name="Riya Kumari"
                    memberClass="B.Tech (CS-AI) 3rd Year"
                    linkedin="https://www.linkedin.com/in/riya-kumari-b6a521348"
                    image={"/team-member-images/Riya Kumari.jpg"}
                />
                <TeamMember
                    name="Aishwarya Tak"
                    memberClass="B.Tech (IT) 3rd Year"
                    linkedin=""
                    image={"/team-member-images/aishwarya tak.JPG"}
                />
                <TeamMember
                    name="Stuti Verma"
                    memberClass="B.Tech (CS) 2nd Year"
                    linkedin="https://www.linkedin.com/in/stuti-verma-6a286b38b"
                    image={"/team-member-images/Stuti Verma.jpg"}
                />
                <TeamMember
                    name="Manasvi Sharma"
                    memberClass="B.Tech (CS) 2nd Year"
                    image={"/team-member-images/Manasvi Sharma.png"}
                    customClass={"image-position-top"}
                />
                <TeamMember
                    name="Vasundhara Yadav"
                    memberClass="B.Tech (CS-AI) 2nd Year"
                    linkedin="https://www.linkedin.com/in/vasundhara-yadav-21320a426?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    image={"/team-member-images/vasundhara yadav.jpg"}
                />
                <TeamMember
                    name="Gauri Singh"
                    memberClass="B.Tech (CS) 2nd Year"
                    linkedin="https://www.linkedin.com/in/gauri-singh-6725b4243/"
                    image={"/team-member-images/gauri.JPG"}
                />
                <TeamMember
                    name="Navya Garg"
                    memberClass="B.Tech (CS-AI) 2nd Year"
                    linkedin="http://www.linkedin.com/in/navyagarg929"
                    image={"/team-member-images/navya garg.JPG"}
                />
                
                <TeamMember
                    name="Kritika Salar"
                    memberClass="B.Tech (ECE) 1st Year"
                    linkedin="www.linkedin.com/in/kritika-salar-09107130a"
                    image={"/team-member-images/kritika salar.jpg"}
                />
                <TeamMember
                    name="Aditi Vishwakarma"
                    memberClass="B.Tech (CS-AI) 1st Year"
                    linkedin=""
                    image={"/team-member-images/aditi wishwakarma.JPG"}
                />
                <TeamMember
                    name="Gunjan Panwar"
                    memberClass="B.Tech (CS) 1st Year"
                    linkedin="http://www.linkedin.com/in/gunjan-panwar-bv8955420"
                    image={"/team-member-images/gunjan panwar.JPG"}
                />
                <TeamMember
                    name="Anvita Gogia"
                    memberClass="B.Tech (CS) 1st Year"
                    linkedin="https://www.linkedin.com/in/anvitagogia"
                    image={"/team-member-images/anvita gogia.JPG"}
                />
            </div>

            <h3 id="graphic-team">Graphic Design Team</h3>
            <div className="team-row">
                <TeamMember
                    name="Sanya Anand"
                    memberClass="B.Tech (CS) 4th Year"
                    linkedin="https://www.linkedin.com/in/anand-sanya"
                    image={"/team-member-images/Sanya Anand.jpg"}
                />
                <TeamMember
                    name="Manvi Mishra"
                    memberClass="B.Tech (CS) 3rd Year"
                    linkedin="https://www.linkedin.com/in/manvi-mishra-3b6326343"
                    image={"/team-member-images/Manvi Mishra.jpg"}
                />
                
                <TeamMember
                    name="Kritika Paliwal"
                    memberClass="B.Tech (ECE) 3rd Year"
                    linkedin="https://www.linkedin.com/in/kritika-paliwal-1065073750kri"
                    image={"/team-member-images/Kritika Paliwal.jpg"}
                />
                <TeamMember
                    name="Madhu Singh"
                    memberClass="B.Tech (CSE) 3rd Year"
                    linkedin=" "
                    image={"/team-member-images/MADHU SINGH.JPG"}
                />
                <TeamMember
                    name="Varnika Ravindra Lal"
                    memberClass="B.Tech (IT) 2nd Year"
                    linkedin="https://www.linkedin.com/in/varnika-lal"
                    image={"/team-member-images/Varnika Lal.jpg"}
                />
                <TeamMember
                    name="Mokshika Bhardwaj"
                    memberClass="B.Tech (CS) 2nd Year"
                    linkedin="https://www.linkedin.com/in/mokshika-bhardwaj-4b5b54285"
                    image={"/team-member-images/Mokshika Bhardwaj.jpg"}
                />
                <TeamMember
                    name="Ayesha Alam"
                    memberClass="B.Tech (CS) 2nd Year"
                    linkedin="http://www.linkedin.com/in/ayesha-alam608"
                    image={"/team-member-images/ayesha alam.jpeg"}
                />
                <TeamMember
                    name="Manavi"
                    memberClass="B.Tech (CS) 1st Year"
                    linkedin="https://www.linkedin.com/in/manavi-sharma-647b50407?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    image={"/team-member-images/manavi.png"}
                />
                <TeamMember
                    name="Dhruvika Madhesia"
                    memberClass="B.Tech (VLSI) 1st Year"
                    linkedin=""
                    image={"/team-member-images/dhruvika.jpg"}
                />
            </div>

            <h3 id="content-team">Content Team</h3>
            <div className="team-row">
                <TeamMember
                    name="Antra Verma"
                    memberClass="B.Tech (EE-VLSI) 4th Year"
                    linkedin="https://www.linkedin.com/in/antra-verma-av?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    image={"/team-member-images/ANTRA VERMA.JPG"}
                />
                <TeamMember
                    name="Dittee Singh"
                    memberClass="B.Tech (IT) 3rd Year"
                    image={"/team-member-images/Dittee Singh.png"}
                />
                <TeamMember
                    name="Paridhi Shukla"
                    memberClass="B.Tech (EE) 3rd Year"
                    linkedin="https://www.linkedin.com/in/paridhi-shukla-15300pr"
                    image={"/team-member-images/Paridhi Shukla.jpg"}
                />
                <TeamMember
                    name="Atulya Singh"
                    memberClass="B.Tech (IT) 3rd Year"
                    linkedin="https://www.linkedin.com/in/atulya-singh-10430b345"
                    image={"/team-member-images/Atulya Singh.jpg"}
                />
                <TeamMember
                    name="Niharika Srivastava"
                    memberClass="B.Tech (CS) 2nd Year"
                    linkedin="https://www.linkedin.com/in/niharika-srivastava-242659317"
                    image={"/team-member-images/Niharika Srivastava.jpg"}
                />
                <TeamMember
                    name="Anushka Agrawal"
                    memberClass="B.Tech (EE) 2nd Year"
                    image={"/team-member-images/Anushka Agrawal.jpg"}
                    customClass={"image-position-top"}
                />
                <TeamMember
                    name="Mishika Agarwal"
                    memberClass="B.Tech (CS-AI) 2nd Year"
                    linkedin=""
                    image={"/team-member-images/mishika agarwal.jpg"}
                />
                <TeamMember
                    name="Devyanshi Gaur"
                    memberClass="B.Tech (CS) 1st Year"
                    linkedin="https://www.linkedin.com/in/devyanshi-gaur-86bb34349/"
                    image={"/team-member-images/Devyanshi Gaur.jpeg"}
                />
                <TeamMember
                    name="Mansi Chaudhary"
                    memberClass="B.Tech (EI) 1st Year"
                    linkedin="https://www.linkedin.com/in/mansi-chaudhary-33950a424?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                    image={"/team-member-images/mansi chaudhary.JPG"}
                />
            </div>

            <h3 id="alumni">Our Alumni</h3>
            <div className="team-row">
                {/* Technical Team */}
                <TeamMember
                    name="Vedanshi Awasthi"
                    memberClass="Alumni · Technical Team"
                    linkedin="https://www.linkedin.com/in/vedanshi-awasthi"
                    image={"/team-member-images/Vedanshi Awasthi.jpg"}
                />
                <TeamMember
                    name="Kritika Jain"
                    memberClass="Alumni · Technical Team"
                    linkedin="https://www.linkedin.com/in/kritika-jain-23b730249"
                    image={"/team-member-images/Kritika Jain.jpg"}
                />
                <TeamMember
                    name="Vinisha Choudhary"
                    memberClass="Alumni · Technical Team"
                    linkedin="https://www.linkedin.com/in/vinisha-choudhary-285618245"
                    image={"/team-member-images/Vinisha Choudhary.jpg"}
                />

                {/* Event Management Team */}
                <TeamMember
                    name="Ishi Kesarwani"
                    memberClass="Alumni · Event Management Team"
                    linkedin="http://linkedin.com/in/ishi-kesarwani"
                    image={"/team-member-images/Ishi Kesarwani.jpeg"}
                />
                <TeamMember
                    name="Anshika Singh Chauhan"
                    memberClass="Alumni · Event Management Team"
                    linkedin="https://www.linkedin.com/in/anshika-singh-chauhan-305525256"
                    image={"/team-member-images/Anshika singh Chauhan.jpg"}
                />
                <TeamMember
                    name="Sanskriti Mishra"
                    memberClass="Alumni · Event Management Team"
                    linkedin="https://www.linkedin.com/in/sanskriti-mishra-aa3ab7254"
                    image={"/team-member-images/Sanskriti Mishra.png"}
                />

                {/* Graphic Design Team */}
                <TeamMember
                    name="Shikha Chaturvedi"
                    memberClass="Alumni · Graphic Design Team"
                    linkedin="https://www.linkedin.com/in/shikha-chaturvedi26"
                    image={"/team-member-images/Shikha Chaturvedi.jpg"}
                />

                {/* Content Team */}
                <TeamMember
                    name="Vasundhara Chhilar"
                    memberClass="Alumni · Content Team"
                    image={"/team-member-images/Vasundhara Chhilar.png"}
                />
                <TeamMember
                    name="Palak Pandey"
                    memberClass="Alumni · Content Team"
                    linkedin="https://www.linkedin.com/in/palak-pandey-bv99"
                    image={"/team-member-images/Palak Pandey.jpeg"}
                />
            </div>
        </div>
    );
};

export default Team;
