import { Schema, model } from 'mongoose';

const cardSchema = new Schema({
    title: {
        type: String,
        required: [true, "You Must Provide the Card Title!"],
        unique: true,
    },
    description: {
        type: String,
        required: [true, "You Must Provide Description for the Card!"],
    },
});

// error-handling middleware
cardSchema.post('save', function (error, doc, next) {
    if (error.name === 'MongoServerError' && error.code === 11000) {
        // Check if it's a unique constraint error
        if (error.keyValue && error.keyValue.title) {
            next(new Error(`'${error.keyValue.title}' Already Exists!`));
        } else {
            next(new Error('Title Already Exists!'));
        }
    } else {
        next(error);
    }
});

const CardModel = model("Card", cardSchema);

export default CardModel;
