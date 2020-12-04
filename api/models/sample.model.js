import mongoose from 'mongoose';

const modelSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const SampleModel = mongoose.model('SampleModel', modelSchema);

module.exports = SampleModel;