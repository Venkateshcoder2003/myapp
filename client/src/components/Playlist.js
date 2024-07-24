// import React, { useEffect, useState } from 'react'

// //importing card from bootstrap
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// //importing data
// import projectData from './data';

// //to improve loading animation
// import Spinner from 'react-bootstrap/Spinner';
// const Playlist = () => {


//     const [spin, setSpin] = useState(true)
//     useEffect(() => {
//         setTimeout(() => {
//             setSpin(false)
//         }, 2000)
//     }, [])

//     return (
//         <>
//             {
//                 spin ? <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
//                     <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading .....
//                 </div> : <div className="container">
//                     <h2 className='text-center mt-2'>Projects</h2>
//                     <h2 className='text-center mt-2'> Live Demo Unavailable</h2>
//                     <div className="card_div">
//                         <div className="row d-flex justify-content-around align-items-center">
//                             {
//                                 projectData.map((el, index) => {
//                                     return (
//                                         <>
//                                             <Card style={{ width: '20rem', height: "18rem" }} className="mt-4 mb-4">
//                                                 <Card.Img variant="top" style={{ width: '20rem', marginLeft: -13 }} src={el.imgsrc} />
//                                                 <Card.Body className='d-flex justify-content-center flex-column'>
//                                                     <Card.Title className='text-center'>{el.projectName}</Card.Title>
//                                                     <Button variant="primary">
//                                                         <a href={el.demo} target="_blank" className='text-decoration-none text-light'>Live Demo</a>
//                                                     </Button>
//                                                 </Card.Body>
//                                             </Card>
//                                         </>
//                                     )
//                                 })
//                             }

//                         </div>
//                     </div>
//                 </div>
//             }
//         </>
//     )
// }

// export default Playlist
// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Spinner from 'react-bootstrap/Spinner';
// import projectData from './data';

// const Playlist = () => {
//     const [spin, setSpin] = useState(true);

//     useEffect(() => {
//         setTimeout(() => {
//             setSpin(false);
//         }, 2000);
//     }, []);

//     return (
//         <>
//             {
//                 spin ? (
//                     <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
//                         <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading .....
//                     </div>
//                 ) : (
//                     <div className="container">
//                         <h2 className='text-center mt-2'>Projects</h2>
//                         <div className="card_div">
//                             <div className="row d-flex justify-content-around align-items-center">
//                                 {
//                                     projectData.map((el, index) => (
//                                         <div className="col-md-4 mb-4" key={index}>
//                                             <Card style={{ width: '18rem', height: "22rem" }}>
//                                                 <Card.Img variant="top" src={el.imgsrc} />
//                                                 <Card.Body className='d-flex flex-column'>
//                                                     <Card.Title className='text-center'>{el.projectName}</Card.Title>
//                                                     <div className='d-flex justify-content-between mt-3'>
//                                                         <Button variant="primary" className='mr-2'>
//                                                             <a href={el.demo} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-light'>Live Demo</a>
//                                                         </Button>
//                                                         {el.github && (
//                                                             <Button variant="secondary">
//                                                                 <a href={el.github} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-light'>GitHub</a>
//                                                             </Button>
//                                                         )}
//                                                     </div>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))
//                                 }
//                             </div>
//                         </div>
//                     </div>
//                 )
//             }
//         </>
//     );
// }

// export default Playlist;


import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import projectData from './data';

const Playlist = () => {
    const [spin, setSpin] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSpin(false);
        }, 1000);
    }, []);

    return (
        <>
            {
                spin ? (
                    <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
                        <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading .....
                    </div>
                ) : (
                    <div className="container">
                        <h2 className='text-center mt-5'>Projects</h2>
                        <h3 className="text-center" style={{ color: "#6c63ff" }}>Live Demo Unavailable</h3>
                        <div className="text-center mb-4">

                        </div>
                        <div className="row">
                            {
                                projectData.map((el, index) => (
                                    <div className="col-md-4 mb-4" key={index}>
                                        <Card style={{ width: '18rem', height: "24rem" }} className="d-flex flex-column">
                                            <Card.Img variant="top" src={el.imgsrc} style={{ height: '12rem', objectFit: 'cover' }} />
                                            <Card.Body className='d-flex flex-column'>
                                                <Card.Title className='text-center'>{el.projectName}</Card.Title>
                                                {/* Add other project details or descriptions here if needed */}
                                                <div className='mt-auto'>
                                                    <div className='d-flex justify-content-between'>
                                                        <Button variant="primary">
                                                            <a href={el.demo} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-light'>Live Demo</a>
                                                        </Button>
                                                        {el.github && (
                                                            <Button variant="secondary">
                                                                <a href={el.github} target="_blank" rel="noopener noreferrer" className='text-decoration-none text-light'>GitHub</a>
                                                            </Button>
                                                        )}
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Playlist;
