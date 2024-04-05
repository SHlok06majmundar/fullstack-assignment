const express = require('express');
const router = express.Router();
const User = require("../Models_Database/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
router.post('/signupDribble',
    [
        body('name').trim().isLength({ min: 2 }).withMessage("Enter Valid Inputs"),
        body('username').trim().isLength({ min: 3 }).withMessage("Enter Valid Username"),
        body('email').trim().isEmail().withMessage("Please enter Email"),
        body('password').isLength({ min: 7 }).withMessage("Please Enter Password longer than 7 characters")
    ], async (req, res) => {
        try {
            console.log(req.body);
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            let existinguser = await User.findOne({ email: req.body.email });
            if (existinguser) {
                return res.status(400).json({ msg: "The user already exists" });
            }
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt);
            const newuser = await User.create({
                name: req.body.name,
                username:req.body.username,
                email: req.body.email,
                password: secPass,
                location:req.body.location
            })
            await newuser.save();
            res.status(200).json({ msg: "User Created Successfully", user: newuser });

        }
        catch (error) {
            console.log(error);
            res.status(500).json({ msg: "Internal Server error" })
        }
    })
module.exports=router;