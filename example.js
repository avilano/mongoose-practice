const mongoose = require('mongoose');
const playlistSchema = mongoose.Schema ( {
  name: String,
  Song: String,
  Artist: String,
  Album: String,
  Duration: Date
});

mongoose.connect('localhost', 'test');

const Playlist = mongoose.model('Playlist', playlistSchema);

const favoriteSongs = new Playlist({
  name: 'FavSongs',
});

favoriteSongs.save(function displayError(err) {
  if (err) console.error(err);
  mongoose.disconnect();
});
