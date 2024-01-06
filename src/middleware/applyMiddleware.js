const express = require('express');
const cors = require('cors');
var cookieParser = require('cookie-parser');
const applyMiddleware = (app) => {
    app.use(cors({
        // origin: ["https://a1gfx.vercel.app"],
        origin: ["http://localhost:3000"],
        credentials: true,
    })
    );
    app.use(express.json());
    app.use(cookieParser());
};

module.exports = applyMiddleware;