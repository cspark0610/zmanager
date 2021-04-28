import mongoose from 'mongoose';

const zombieSchema = mongoose.Schema({
    zombieLocation: String,
    image: String
});

const zombieModel = mongoose.model('Zombie', zombieSchema);

export default zombieModel;