const express = require("express");
const productRoutes = require("./routes/products");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.use("/api/products", productRoutes);

module.exports = app;