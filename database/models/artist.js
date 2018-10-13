const mongoose = require('mongoose');
const AlbumSchema = require('./album');
const Schema = mongoose.Schema;

const ArtistSchema = new Schema ({
    name: String,
    age: Number,
    yearsActive: Number,
    image: {
        type: String,
        match: /https?:\/\/.*\.....?/g
    },
    genre: String,
    website: {
        type: String,
        match: /https?:\/\/.*/g
    },
    netWorth: Number,
    labelName: String,
    retired: Boolean,
    albums: [AlbumSchema]
});

const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;