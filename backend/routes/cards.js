import express from "express";
import CardModel from "../models/Card.js";

const router = express.Router();

// create single or multiple card(s)
router.post('/', async (req, res) => {
    try {
        // Check if req.body is an array (for multiple cards)
        if (Array.isArray(req.body)) {
            const users = req.body?.map(user => ({
                title: user?.title,
                description: user?.description,
                link: user?.link
            }));
            // Insert multiple cards
            const savedCards = await CardModel.insertMany(users);
            return res.status(201).send({
                success: true,
                insertedIds: savedCards.map((product) => product._id),
                message: `${savedCards.length} Cards are Saved Successfully!`,
            });
        } else {
            const { title, description, link } = req.body;
            const card = { title, description, link };
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

// get all cards as list
router.get('/', async (req, res) => {
    try {
        const { search } = req.query;

        let filter = {};

        // search by title
        if (search && typeof search === "string") {
            const searchText = search.trim();
            if (searchText.length) {
                filter.title = { $regex: searchText, $options: "i" };
            }
        }

        // exclude __v and _id fields
        const projection = { __v: 0, _id: 0 };
        const cards = await CardModel.find(filter).select(projection);

        return res.status(200).send({
            success: true,
            message: `${cards.length} Cards Retrieved Successfully!`,
            data: cards,
        });
    } catch (error) {
        console.error("Fetching Cards Error: ", error?.message);
        res.status(500).send({
            success: false,
            message: error?.message || "Internal Server Error!",
        });
    }
});

// get single card by title
router.get('/:title', async (req, res) => {
    try {
        const { title } = req.params;
        // Case-insensitive search using a regular expression
        const filter = { title: { $regex: new RegExp(`^${title}$`, 'i') } };
        // exclude __v and _id fields
        const projection = { __v: 0, _id: 0 };

        const card = await CardModel.findOne(filter).select(projection);

        if (card) {
            res.status(200).send({
                success: true,
                message: `'${title}' Retrieved Successfully!`,
                data: card,
            });
        } else {
            res.status(404).send({
                success: false,
                message: `'${title}' Not Found!`,
            });
        }
    } catch (error) {
        console.error("Fetching Card Error: ", error?.message);
        res.status(500).send({
            success: false,
            message: error?.message || "Internal Server Error!",
        });
    }
});


export default router;