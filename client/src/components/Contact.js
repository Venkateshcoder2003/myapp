import React, { useState } from 'react'

import "./contact.css"
//importing Form 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import from tostify

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {

    //to track input entered by user
    const [inputvalues, setInputvalue] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        message: ""
    })

    const getvalue = (e) => {
        const { name, value } = e.target;
        setInputvalue(() => {
            return {
                ...inputvalues,
                [name]: value
            }
        })
    }

    const sentUserdata = async (e) => {
        e.preventDefault();//when we click on submit button page reloads to prevent that ue use this

        const { fname, lname, email, mobile, message } = inputvalues;
        if (fname === "") {
            toast.error("FirstName is Required")
        } else if (lname === "") {
            toast.error("Lastname is Required")
        } else if (email === "") {
            toast.error("email is Required")
        } else if (!email.includes("@")) {
            toast.error("Invalid Email")
        } else if (mobile === "") {
            toast.error("mobile is Required")
        } else {
            //called api after clicking button
            const res = await fetch("myapp-three-liart.vercel.app/register", {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    fname, lname, email, mobile, message
                })
            });
            const data = await res.json();
            console.log(data);

            if (data.status === 201) {
                toast.success("Your Response Submitted")

                setInputvalue({
                    ...inputvalues,
                    fname: "",
                    lname: "",
                    email: "",
                    mobile: "",
                    message: ""
                })
            }

        }
    }

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
    )
}

export default Contact
