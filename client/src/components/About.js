
// import React from 'react';
// import "./About.css";

// const About = () => {
//     return (
//         <>
//             <div className='container mb1 about_container' style={{ minHeight: "100%" }}>
//                 <div className='container main_container d-flex justify-content-around flex-wrap '>
//                     <div className='left_container ' style={{ width: 250 }}>
//                         <h2>Meet Venkatesh M</h2>
//                         <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>
//                             Thanks for your interest, here is a quick story of me and this website.
//                             Myself <span style={{ color: "#6c63ff" }}>Venkatesh M</span>, an Engineering Student at Siddaganga Institute of Technology (SIT), Tumkur. I am
//                             pursuing
//                             my third
//                             year of B-Tech
//                             in Computer Science and Engineering.
//                             I am an active member of <span style={{ color: "#6c63ff" }}>"GeeksForGeeks"</span>, a technical club at SIT.
//                             I do my coding mainly in C, <span style={{ color: "#6c63ff" }}>C++</span>, and sometimes in Python.
//                             I am learning <span style={{ color: "#6c63ff" }}>DSA (Data Structure and Algorithm)</span> in C++.
//                             Besides these, I
//                             know <span style={{ color: "#6c63ff" }}>Web Development (MERN)</span> and basic LINUX.
//                             My current CGPA is 9.55 (up to 3rd SEM).

//                             <h5>This website (My Portfolio) is basically one of my Web Development projects, which is built using <span>MERN</span>
//                                 stack.</h5>
//                             <h3 style={{ color: "#6c63ff" }}>Thanks again for reading this!</h3>
//                         </p>
//                     </div>
//                     <div className='right_container mt-3'>
//                         <img src='hp.png' alt='' />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default About;



import React from 'react'
import "./About.css"

const About = () => {
    return (
        <>
            <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
                <div className="container main_container d-flex justify-content-around flex-wrap">
                    <div className='left_container ' style={{ width: 250 }}>
                        <h2>Meet Venkatesh M</h2>
                        <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>
                            Thanks for your interest, here is a quick story of me and this website.
                            Myself <span style={{ color: "#6c63ff" }}>Venkatesh M</span>, an Engineering Student at Siddaganga Institute of Technology (SIT), Tumkur. I am
                            pursuing
                            my third
                            year of B-Tech
                            in Computer Science and Engineering.
                            I am an active member of <span style={{ color: "#6c63ff" }}>"GeeksForGeeks"</span>, a technical club at SIT.
                            I do my coding mainly in C, <span style={{ color: "#6c63ff" }}>C++</span>, and sometimes in Python.
                            I am learning <span style={{ color: "#6c63ff" }}>DSA (Data Structure and Algorithm)</span> in C++.
                            Besides these, I
                            know <span style={{ color: "#6c63ff" }}>Web Development (MERN)</span> and basic LINUX.
                            My current CGPA is 9.55 (up to 3rd SEM).

                            <h5>This website (My Portfolio) is basically one of my Web Development projects, which is built using <span>MERN</span>
                                stack.</h5>
                            <h3 style={{ color: "#6c63ff" }}>Thanks again for reading this!</h3>
                        </p>
                    </div>
                    <div className="right_container mt-3">
                        <img src="hp.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About