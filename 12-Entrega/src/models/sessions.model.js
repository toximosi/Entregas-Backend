import mongoose from 'mongoose';

const collection = 'session';

const sessionSchema = mongoose.Schema({
        expires: Date,
        session: String
});

const sessionModel = mongoose.model(collection, sessionSchema);

export default sessionModel;