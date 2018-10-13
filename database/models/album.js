const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = new Schema({
    title: String,
    date: Date,
    copiesSold: Number,
    numberTracks: Number,
    image: {
        type: String,
        match: /https?:\/\/.*\.....?/g
    },
    revenue: Number
});

module.exports = AlbumSchema;