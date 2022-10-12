const express = require('express');
const AuthCtrl = require('../controllers/AuthController');
const router = express.Router();

router.post('/login', async (req, res) => {
    //Validation
    //Call logic
    try {
        const logginInfo = await AuthCtrl.login(
            req.body.username,
            req.body.password
        );
        res.json(logginInfo);
    } catch(err) {
        res.status(409).send(err.message);
    }
});
router.post('/register', async (req, res) => {
    //Validation
    if (!req.body.password || req.body.password.length < 6){
        res.status(300).send('Password must contain at least 6 characters');
        return;
    }
    try {
        const newUser = await AuthCtrl.register(req.body.username, req.body.email, req.body.password);
        res.json(newUser);
    } catch (err) {
        res.status(409).send(err.massage);
    }
});

module.exports = router; 