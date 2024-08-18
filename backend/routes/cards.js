import express from "express";
import CardModel from "../models/Card.js";

const router = express.Router();

// create single or multiple card(s)
router.post('/', async (req, res) => {
    try {
        // Check if req.body is an array (for multiple cards)
        if (Array.isArray(req.body)) {
            const users = req.body.map(user => ({ title: user.title, description: user.description }));
            // Insert multiple cards
            const savedCards = await CardModel.insertMany(users);
            return res.status(201).send({
                success: true,
                insertedIds: savedCards.map((product) => product._id),
                message: `${savedCards.length} Cards are Saved Successfully!`,
            });
        } else {
            const { title, description } = req.body;
            const card = { title, description };
            // Insert a single card
            const newCard = new CardModel(card);
            const savedCard = await newCard.save();
            if (savedCard?._id) {
                return res.status(201).send({
                    success: true,
                    insertedId: savedCard._id,
                    message: `${savedCard.title} is Saved Successfully!`,
                });
            }
        }
    } catch (error) {
        console.error("Creating Card Error: ", error?.message);
        res.status(500).send(
            { success: false, message: error?.message || "Internal Server Error!" }
        );
    }
});


export default router;