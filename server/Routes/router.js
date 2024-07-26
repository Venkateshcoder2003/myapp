const express = require('express')
//creating new Router
const router = new express.Router();
const users = require("../models/userSchema")

const nodemailer = require('nodemailer');
const { error } = require('console');
//email config   pass:ntki sdje mmxa ksck user:venkatesh77644@gmail.com
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})
//register user details

router.post('/register', async (req, res) => {
    const { fname, lname, email, mobile, message } = req.body;
    if (!fname || !lname || !email || !mobile) {
        return res.status(401).json({ status: 401, error: "All Inputs Are Required" });
    }
    try {
        const preuser = await users.findOne({ email: email });
        if (preuser) {
            const userMessage = preuser.Messagesave(message);
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Thank You For Visiting My PORTFOLIO ",
                text: "Your Response Has Been Submitted"
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error" + error);
                    return res.status(500).json({ status: 500, error: "Failed to send email" });
                } else {
                    console.log("Email Sent" + info.response);
                    return res.status(201).json({ status: 201, message: "Email Sent Successfully" });
                }
            });
        } else {
            const finalUser = new users({ fname, lname, email, mobile, message });
            const storeData = await finalUser.save();
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Thank You For Visiting My PORTFOLIO ",
                text: "Your Response Has Been Submitted"
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("error" + error);
                    return res.status(500).json({ status: 500, error: "Failed to send email" });
                } else {
                    console.log("Email Sent" + info.response);
                    return res.status(201).json({ status: 201, message: "Email Sent Successfully", storeData });
                }
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, error: "Internal Server Error" });
    }
});

// router.post('/register', async (req, res) => {
//     const { fname, lname, email, mobile, message } = req.body;
//     //console.log(req.body);
//     if (!fname || !lname || !email || !mobile) {
//         res.status(401).json({ status: 401, error: "All Inputs Are Required" })
//     }
//     try {
//         const preuser = await users.findOne({ email: email });
//         //checking if user already exists in our database
//         if (preuser) {
//             const userMessage = preuser.Messagesave(message);//calling Messagesave function in userschema.js

//             const mailOptions = {
//                 from: process.env.EMAIL,
//                 to: email,
//                 subject: "Thank You For Visiting My PORTFOLIO ",
//                 text: "Your Response Has Been Submitted"
//             }


//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log("error" + error)
//                 } else {
//                     console.log("Email Sent" + info.response);
//                     res.status(201).json({ status: 201, message: "Email Sent Successfully" })
//                 }
//             });
//         } else {
//             //if user not exist
//             const finalUser = new users({
//                 fname, lname, email, mobile, message
//             })


//             //save the current user in database
//             const storeData = await finalUser.save();

//             //once user data is saved in or database we have to send him a mail
//             const mailOptions = {
//                 from: process.env.EMAIL,
//                 to: email,
//                 subject: "Thank You For Visiting My PORTFOLIO ",
//                 text: "Your Response Has Been Submitted"
//             }


//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log("error" + error)
//                 } else {
//                     console.log("Email Sent" + info.response);
//                     res.status(201).json({ status: 201, message: "Email Sent Successfully" })
//                 }
//             });
//             res.status(201).json({ status: 201, storeData })


//         }
//     } catch (error) {
//         res.status(401).json({ status: 401, error: "All Inputs Are Required" })
//     }
// })

module.exports = router;
