import mongoose from 'mongoose';

const collecttion = 'messages';

const messagesSchema = mongoose.schema({
    id: Number,
    user: String,
	timestamp: Date,
    text: String
});

const messagesService = mongoose.model(collection, messagesSchema);

export default messagesService;