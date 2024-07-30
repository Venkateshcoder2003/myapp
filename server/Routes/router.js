



// const express = require("express");
// const router = new express.Router();
// const users = require("../models/userSchema");
// const nodemailer = require("nodemailer");

// // email config
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASS
//     }
// });


// //register user details
// router.post("/register", async (req, res) => {
//     const { fname, lname, email, mobile, message } = req.body;

//     if (!fname || !lname || !email || !mobile) {
//         res.status(401).json({ status: 401, error: "All Input require" })
//     }

//     try {
//         const preuser = await users.findOne({ email: email });

//         if (preuser) {
//             const userMessage = await preuser.Messagesave(message);
//             console.log(userMessage);
//             const mailOptions = {
//                 from: process.env.EMAIL,
//                 to: email,
//                 subject: "sending email using nodejs",
//                 text: "Your Response Has Been Submitted"
//             }

//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log("error" + error)
//                 } else {
//                     console.log("Email sent" + info.response);
//                     res.status(201).json({ status: 201, message: "Email sent SUccesfully" })
//                 }
//             });
//         } else {
//             const finalUser = new users({
//                 fname, lname, email, mobile, messages: { message: message }
//             });

//             const storeData = await finalUser.save();

//             const mailOptions = {
//                 from: process.env.EMAIL,
//                 to: email,
//                 subject: "sending email using nodejs",
//                 text: "Your Response Has Been Submitted"
//             }

//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log("error" + error)
//                 } else {
//                     console.log("Email sent" + info.response);
//                     res.status(201).json({ status: 201, message: "Email sent SUccesfully" })
//                 }
//             });
//             res.status(201).json({ status: 201, storeData })
//         }

//     } catch (error) {
//         res.status(401).json({ status: 401, error: "All Input require" });
//         console.log("catch error")
//     }

// })
//module.exports = router;
// const express = require("express");
// const router = new express.Router();
// const users = require("../models/userSchema");
// const nodemailer = require("nodemailer");
// const cors = require("cors");

// // Use CORS middleware
// router.use(cors());

// // email config
// const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL,
//         pass: process.env.PASS
//     }
// });

// //register user details
// router.post("/register", async (req, res) => {
//     const { fname, lname, email, password, mobile, message } = req.body;

//     if (!fname || !lname || !email || !password || !mobile) {
//         return res.status(401).json({ status: 401, error: "All Input required" });
//     }

//     try {
//         const preuser = await users.findOne({ email: email });

//         if (preuser) {
//             const userMessage = await preuser.Messagesave(message);
//             console.log(userMessage);
//             const mailOptions = {
//                 from: process.env.EMAIL,
//                 to: email,
//                 subject: "Sending email using Node.js",
//                 text: "Your Response Has Been Submitted"
//             };

//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log("error" + error);
//                 } else {
//                     console.log("Email sent: " + info.response);
//                     return res.status(201).json({ status: 201, message: "Email sent successfully" });
//                 }
//             });
//         } else {
//             const finalUser = new users({
//                 fname, lname, email, password, mobile, messages: { message: message }
//             });

//             const storeData = await finalUser.save();

//             const mailOptions = {
//                 from: process.env.EMAIL,
//                 to: email,
//                 subject: "Sending email using Node.js",
//                 text: "Your Response Has Been Submitted"
//             };

//             transporter.sendMail(mailOptions, (error, info) => {
//                 if (error) {
//                     console.log("error" + error);
//                 } else {
//                     console.log("Email sent: " + info.response);
//                     return res.status(201).json({ status: 201, message: "Email sent successfully", storeData });
//                 }
//             });
//         }

//     } catch (error) {
//         res.status(401).json({ status: 401, error: "All Input required" });
//         console.log("catch error", error);
//     }
// });

// module.exports = router;



const express = require("express");
const router = new express.Router();
const users = require("../models/userSchema");
const nodemailer = require("nodemailer");
const cors = require("cors");

// Use CORS middleware
router.use(cors());

// Email config
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});

// Register user details
router.post("/register", async (req, res) => {
    const { fname, lname, email, password, mobile, message } = req.body;

    if (!fname || !lname || !email || !password || !mobile) {
        return res.status(400).json({ status: 400, error: "All inputs are required" });
    }

    try {
        const preuser = await users.findOne({ email: email });

        const sendEmail = (toEmail, res) => {
            const mailOptions = {
                from: process.env.EMAIL,
                to: toEmail,
                subject: "Response Submitted",
                text: "Your response has been submitted successfully."
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log("Email sending error: " + error);
                } else {
                    console.log("Email sent: " + info.response);
                }
            });
        };

        if (preuser) {
            await preuser.Messagesave(message);
            sendEmail(email, res);
            return res.status(200).json({ status: 200, message: "User already exists. Message updated and email sent." });
        } else {
            const newUser = new users({
                fname, lname, email, password, mobile, messages: [{ message }]
            });

            const storeData = await newUser.save();
            sendEmail(email, res);
            return res.status(201).json({ status: 201, message: "User registered successfully and email sent.", storeData });
        }

    } catch (error) {
        res.status(500).json({ status: 500, error: "Internal server error" });
        console.log("Catch error:", error);
    }
});

module.exports = router;
