function Library (name, creator) {

  this.name = name;
  this.creator = creator;
  this.playlists = [];

}

Library.prototype.addPlaylist = function (playlist) {
  if (Array.isArray(playlist)) {
    playlist.forEach((item) => {
      this.playlists.push(item);
    });
  } else {
    this.playlists.push(playlist);
  }
};

function Playlist (name) {
  
  this.name = name;
  this.tracks = [];
  this.playlistRating = 0;

}

Playlist.prototype.avgRating = function () {
  let totalRating = 0;
  let count = 0;

  if (this.tracks) {
    this.tracks.forEach((track) => {
      totalRating += Number(track.rating);
      count++;
    });
    return totalRating / count;

  } else {
    return 0;
  }
};

Playlist.prototype.addTrack = function (track) {
  if (Array.isArray(track)) {
    track.forEach((item) => {
      this.tracks.push(item);
    });
  } else {
    this.tracks.push(track);
  }
  this.playlistRating = this.avgRating();
};

Playlist.prototype.totalDuration = function () {
  let duration = 0;

  this.tracks.forEach((track) => {
    duration += Number(track.duration);
  });

  return duration;
};



function Track (name, rating, duration) {
  
  this.name = name;
  this.rating = rating;
  this.duration = duration;

}

const myLib = new Library('myLib', 'Benji');

const plist1 = new Playlist('Puscifer');

const track1 = new Track('Toma', 5, 219);
const track2 = new Track('Dozo', 4.5, 240);

plist1.addTrack([track1, track2]);
console.log(plist1.avgRating());
console.log(plist1.totalDuration());

const plist2 = new Playlist('Tool');

const track3 = new Track('Hooker With a Penis', 5, 273);
const track4 = new Track('Aenema', 5, 405);

plist2.addTrack([track3, track4]);
console.log(plist2.avgRating());
console.log(plist2.totalDuration());

myLib.addPlaylist([plist1, plist2]);
console.log(myLib.playlists);
