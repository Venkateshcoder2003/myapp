import React from 'react'

//importing Home.css file
import "./Home.css";
import Button from "react-bootstrap/Button";

const Home = () => {
    return (
        <>
            <div className='container home_container'>
                <div className='home_innerdiv'>
                    {/* in home page i have left and right part so i create left and right div */}
                    <div className='left_div'>
                        <h2>Welcome to <span style={{ color: "#6c63ff" }}>My Portfolio</span></h2>
                        <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
                            <span style={{ color: "#6c63ff" }}>"</span>Hi, I'm Venkatesh M, a <span style={{ color: "#6c63ff" }}>student at Siddaganga Institute of Technology</span>, Tumkur.
                            I'm currently in my third year of B.Tech(CSE branch) and have a keen interest in coding.
                            To Know more about me, feel free to <span style={{ color: "#6c63ff" }}>explore my portfolio</span>.<span style={{ color: "#6c63ff" }}>"</span>

                        </p>
                        <div className='btn_div mt-4'>
                            <Button variant='danger' style={{ letterSpacing: "1px", border: "none", borderRadius: 4, background: "#2f2d69", marginRight: 24 }}>Project</Button>
                        </div>
                    </div>
                    <div className='right_div'>
                        <img src="hp.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
