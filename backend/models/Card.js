import { Schema, model } from 'mongoose';

// Function to generate unique ID
const generateID = () => {
    const date = Date.now();
    const randomString = Array.from({ length: 11 }, () => Math.random().toString(36).slice(2, 3)).join('');
    return `${date}${randomString}`;
};

const cardSchema = new Schema({
    id: {
        type: String,
        default: generateID,
        unique: true,
    },
    title: {
        type: String,
        required: [true, "Provide the Card Title!"],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "Provide Card Description!"],
    },
});

// Error-handling middleware for posting single card
cardSchema.post('save', function (error, doc, next) {
    if (error.code === 11000) {
        // Check if it's a unique constraint error
        if (error.keyValue && error.keyValue.title) {
            next(new Error(`Duplicate! '${error.keyValue.title}' Already Exists!`));
        } else {
            next(new Error('Duplicate! Title Already Exists!'));
        }
    } else {
        next(error);
    }
});

// For cases where the 'save' middleware doesn't catch the error
cardSchema.post('insertMany', function (error, doc, next) {
    if (error.code === 11000) {
        next(new Error('Duplicate! One or Some Title(s) Already Exist(s)!'));
    } else {
        next(error);
    }
});

const CardModel = model("Card", cardSchema);

export default CardModel;
