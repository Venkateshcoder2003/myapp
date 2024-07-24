
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar, FaCertificate } from 'react-icons/fa';

const achievements = [
    { type: 'star', text: '5 ⭐ C++ Coder on HackerRank', link: 'https://www.hackerrank.com/profile/venkateshvenki71' },
    { type: 'star', text: '4 ⭐ Python Coder on HackerRank', link: 'https://www.hackerrank.com/profile/venkateshvenki71' },
    { type: 'star', text: '4 ⭐ C++ Coder in Problem Solving on HackerRank', link: 'https://www.hackerrank.com/profile/venkateshvenki71' },
    { type: 'certificate', text: 'Basic Python Certificate on HackerRank', link: 'https://www.hackerrank.com/certificates/d66150c55536' },
    { type: 'certificate', text: 'Problem Solving Certificate (Basic, Intermediate) from HackerRank', link: 'https://www.hackerrank.com/certificates/01f8b6db644b' },
    { type: 'certificate', text: 'Certificate for Completing DSA in C++ from Udemy', link: 'https://www.udemy.com/certificate/UC-5e137662-95e3-491a-b323-e0273461e535/' },
];

const Achievements = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Achievements</h2>
            <div className="row">
                {achievements.map((achievement, index) => (
                    <div className="col-md-6 mb-4" key={index}>
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <div className="icon mr-3">
                                    {achievement.type === 'star' ? (
                                        <FaStar style={{ color: '#FFD700', fontSize: '1.5em' }} />
                                    ) : (
                                        <FaCertificate style={{ color: '#007bff', fontSize: '1.5em' }} />
                                    )}
                                </div>
                                <div className="text">
                                    <p>{achievement.text}</p>
                                    {achievement.link && (
                                        <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                            View Certificate
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
