import express from 'express';

const app = express();

const users = {
    sami: { role: "admin" },
    ram: { role: "teacher" },
    saumya: { role: "student" }
};

const permissions = {
    admin: ["dashboard", "users", "profile"],
    teacher: ["dashboard", "profile"],
    student: ["profile"]
};

// Middleware to get user
const getUser = (req, res, next) => {
    const username = req.query.user;

    if (!username || !users[username]) {
        return res.send("User not found. Use ?user=sami");
    }

    req.user = users[username];
    next();
};

app.use(getUser);

// RBAC Middleware
const checkAccess = (page) => (req, res, next) => {
    const role = req.user.role;

    if (permissions[role].includes(page)) {
        next();
    } else {
        res.send("Access Denied");
    }
};

// ROUTES
app.get("/dashboard", checkAccess("dashboard"), (req, res) => {
    res.send("Welcome to dashboard");
});

app.get("/users", checkAccess("users"), (req, res) => {
    res.send("Welcome to users page");
});

app.get("/profile", checkAccess("profile"), (req, res) => {
    res.send("Welcome to profile page");
});

app.listen(3000, () => console.log("Server running on port 3000"));