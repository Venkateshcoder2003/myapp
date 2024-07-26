// import React, { useState } from 'react'

// import "./contact.css"
// //importing Form 
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// //import from tostify

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const Contact = () => {

//     //to track input entered by user
//     const [inputvalues, setInputvalue] = useState({
//         fname: "",
//         lname: "",
//         email: "",
//         mobile: "",
//         message: ""
//     })

//     const getvalue = (e) => {
//         const { name, value } = e.target;
//         setInputvalue(() => {
//             return {
//                 ...inputvalues,
//                 [name]: value
//             }
//         })
//     }



//     const API_URL = process.env.REACT_APP_API_URL;

// const sentUserdata = async (e) => {
//     e.preventDefault();

//     const { fname, lname, email, mobile, message } = inputvalues;
//     if (fname === "") {
//         toast.error("First Name is Required");
//     } else if (lname === "") {
//         toast.error("Last Name is Required");
//     } else if (email === "") {
//         toast.error("Email is Required");
//     } else if (!email.includes("@")) {
//         toast.error("Invalid Email");
//     } else if (mobile === "") {
//         toast.error("Mobile is Required");
//     } else {
//         try {
//             const res = await fetch(`${API_URL}/register`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     fname, lname, email, mobile, message
//                 })
//             });
//             const data = await res.json();

//             if (res.status === 201) {
//                 toast.success("Your Response Submitted");

//                 setInputvalue({
//                     ...inputvalues,
//                     fname: "",
//                     lname: "",
//                     email: "",
//                     mobile: "",
//                     message: ""
//                 });
//             } else {
//                 toast.error(data.error || "Failed to submit your response");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             toast.error("An error occurred");
//         }
//     }
// }

// //     const sentUserdata = async (e) => {
// //     e.preventDefault(); // Prevent page reload

// //     const { fname, lname, email, mobile, message } = inputvalues;
// //     if (fname === "") {
// //         toast.error("First Name is Required");
// //     } else if (lname === "") {
// //         toast.error("Last Name is Required");
// //     } else if (email === "") {
// //         toast.error("Email is Required");
// //     } else if (!email.includes("@")) {
// //         toast.error("Invalid Email");
// //     } else if (mobile === "") {
// //         toast.error("Mobile is Required");
// //     } else {
// //         try {
// //             const res = await fetch("https://myapp-2i2n.vercel.app/register", {  // Updated URL
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json"
// //                 },
// //                 body: JSON.stringify({
// //                     fname, lname, email, mobile, message
// //                 })
// //             });
// //             const data = await res.json();

// //             if (res.status === 201) {
// //                 toast.success("Your Response Submitted");

// //                 setInputvalue({
// //                     fname: "",
// //                     lname: "",
// //                     email: "",
// //                     mobile: "",
// //                     message: ""
// //                 });
// //             } else {
// //                 toast.error(data.error || "Failed to submit your response");
// //             }
// //         } catch (error) {
// //             console.error("Error:", error);
// //             toast.error("An error occurred");
// //         }
// //     }
// // }

    
//     // const sentUserdata = async (e) => {
//     //     e.preventDefault();//when we click on submit button page reloads to prevent that ue use this

//     //     const { fname, lname, email, mobile, message } = inputvalues;
//     //     if (fname === "") {
//     //         toast.error("FirstName is Required")
//     //     } else if (lname === "") {
//     //         toast.error("Lastname is Required")
//     //     } else if (email === "") {
//     //         toast.error("email is Required")
//     //     } else if (!email.includes("@")) {
//     //         toast.error("Invalid Email")
//     //     } else if (mobile === "") {
//     //         toast.error("mobile is Required")
//     //     } else {
//     //         //called api after clicking button
//     //         const res = await fetch("/register", {
//     //             method: "POST",
//     //             headers: {
//     //                 "content-Type": "application/json"
//     //             },
//     //             body: JSON.stringify({
//     //                 fname, lname, email, mobile, message
//     //             })
//     //         });
//     //         const data = await res.json();
//     //         console.log(data);

//     //         if (data.status === 201) {
//     //             toast.success("Your Response Submitted")

//     //             setInputvalue({
//     //                 ...inputvalues,
//     //                 fname: "",
//     //                 lname: "",
//     //                 email: "",
//     //                 mobile: "",
//     //                 message: ""
//     //             })
//     //         }

//     //     }
//     // }

//     return (
//         <>
//             <div className='container mb-3 contact'>
//                 <h2 className='text-center'>Contact Me</h2>
//                 <div className='container mt-2'>
//                     <Form className='row mt-2'>
//                         <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                             <Form.Label>First Name</Form.Label>
//                             <Form.Control type="text" name='fname' value={inputvalues.fname} onChange={getvalue} />
//                         </Form.Group>

//                         <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                             <Form.Label>Last Name</Form.Label>
//                             <Form.Control type="text" name='lname' value={inputvalues.lname} onChange={getvalue} />
//                         </Form.Group>

//                         <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control type="text" name='email' value={inputvalues.email} onChange={getvalue} />
//                         </Form.Group>

//                         <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                             <Form.Label>Mobile</Form.Label>
//                             <Form.Control type="text" name='mobile' value={inputvalues.mobile} onChange={getvalue} />
//                         </Form.Group>

//                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                             <Form.Label>Message</Form.Label>
//                             <Form.Control as="textarea" rows={4} value={inputvalues.message} onChange={getvalue} name="message" />
//                         </Form.Group>

//                         <div className='d-flex justify-content-center'>
//                             <Button variant="primary" className='col-lg-6 ' type="submit" onClick={sentUserdata}>
//                                 Submit
//                             </Button>
//                         </div>
//                     </Form>
//                     <ToastContainer />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Contact









import React, { useState } from 'react';
import "./contact.css";
// Importing Form 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// Import from toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    // Track input entered by user
    const [inputvalues, setInputvalue] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        message: ""
    });

    const getvalue = (e) => {
        const { name, value } = e.target;
        setInputvalue({
            ...inputvalues,
            [name]: value
        });
    };

    const API_URL = process.env.REACT_APP_API_URL || 'https://myapp-2i2n.vercel.app';

    const sentUserdata = async (e) => {
        e.preventDefault();

        const { fname, lname, email, mobile, message } = inputvalues;
        if (fname === "") {
            toast.error("First Name is Required");
        } else if (lname === "") {
            toast.error("Last Name is Required");
        } else if (email === "") {
            toast.error("Email is Required");
        } else if (!email.includes("@")) {
            toast.error("Invalid Email");
        } else if (mobile === "") {
            toast.error("Mobile is Required");
        } else {
            try {
                const res = await fetch(`${API_URL}/register`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fname, lname, email, mobile, message
                    })
                });
                const data = await res.json();

                if (res.status === 201) {
                    toast.success("Your Response Submitted");

                    setInputvalue({
                        fname: "",
                        lname: "",
                        email: "",
                        mobile: "",
                        message: ""
                    });
                } else {
                    toast.error(data.error || "Failed to submit your response");
                }
            } catch (error) {
                console.error("Error:", error);
                toast.error("An error occurred");
            }
        }
    };

    return (
        <>
            <div className='container mb-3 contact'>
                <h2 className='text-center'>Contact Me</h2>
                <div className='container mt-2'>
                    <Form className='row mt-2'>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name='fname' value={inputvalues.fname} onChange={getvalue} />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name='lname' value={inputvalues.lname} onChange={getvalue} />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" name='email' value={inputvalues.email} onChange={getvalue} />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" name='mobile' value={inputvalues.mobile} onChange={getvalue} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} value={inputvalues.message} onChange={getvalue} name="message" />
                        </Form.Group>

                        <div className='d-flex justify-content-center'>
                            <Button variant="primary" className='col-lg-6 ' type="submit" onClick={sentUserdata}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default Contact;
