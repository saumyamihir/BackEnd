// 	Q) Implement a custom middleware called authentication In  Express that 
// 	Checks whether the user is admit or not. If the URL contains ?admin = true
// 	,allow access to the /user route and print "Welcome admin" in their 
// Terminal and also send the same as response on the browser otherwise respond with "you are not Authenticated".

import express from 'express';

const app = express();

function authentication(req, res, next) {
    if (req.query.admin === 'true') {
        console.log("Welcome admin");
        next();
    } else {
        res.send("you are not Authenticated");
    }
}

app.get('/user', authentication, (req, res) => {
    res.send("Welcome admin");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});