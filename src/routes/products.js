const express = require("express");
const pool = require("../db");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM products ORDER BY id"
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error al consultar productos"
        });
    }
});

router.post("/", async (req, res) => {
    const { name, price, stock } = req.body;

    if (!name || price === undefined || stock === undefined) {
        return res.status(400).json({
            error: "name, price y stock son obligatorios"
        });
    }

    try {
        const result = await pool.query(
            `INSERT INTO products (name, price, stock)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [name, price, stock]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: "Error al crear producto"
        });
    }
});

module.exports = router;