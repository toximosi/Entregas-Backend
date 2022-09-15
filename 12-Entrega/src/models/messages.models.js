import mongoose from 'mongoose';

const collection = 'messages';

const messagesSchema = mongoose.Schema({
    id: Number,
    user: String,
	timestamp: Date,
    text: String
});

const messagesModel = "";
    mongoose.model(collection, messagesSchema);

export default messagesModel;