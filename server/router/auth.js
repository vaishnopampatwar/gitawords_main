const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('../db/conn');

router.get('/',(req,res)=>{
    res.send(`hello word get from auth`);
})
router.post('/register',async (req,res)=>{
    const {name,email,message} =req.body;
    if (!name || !email || !message){
        return res.status(422).json({ error: "plz fill details properly" });
    }
    try{
        const user = new User({name,email,message})
        user.save().then(()=>{
            res.status(201).json({ error: "Message sent succesfully" });
        }).catch((err)=>res.status(500).json({ error: "failed to register" }));
        // await user.save();
        // res.status(201).json({ error: "Message sent succesfully" });
    }catch(err){console.log(err);}
})

router.post('/signup', async (req, res) => {
    const { name, email, password, cpassword } = req.body;
    if (!name || !email || !password || !cpassword) {
        return res.status(422).json({ error: "plz filled" });
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).json({ error: "emial already exist" });
        }
        const user = new User({ name, email, password, cpassword })

        await user.save()
        res.status(201).json({ error: "user registeted succesfully" });
    } catch (err) { console.log(err); }

})
router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            window.alert('invalid credentials');
            //return res.status(400).json({ error: "invalid credentials" })
        }
        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
            token = await userLogin.generateAuthToken();
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (!isMatch) {
                res.status(400).json({ error: "invalid crendial" });
            } else {
                res.json({ message: "user sugnin success" });
            }
        } 
        else{
           res.status(400).json({ error: "invalid crendial" });
        }
    } catch (err) {console.log(err); }

})

module.exports = router;