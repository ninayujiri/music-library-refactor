var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
                      name: "Coding Music"
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
              }
  },
  printPlaylists: function () {
    for (var playlist in this.playlists) {
    this.playlistPrint(this.playlists[playlist].id);
    }
  },
  playlistPrint: function (playlistId) {
    console.log(this.playlists[playlistId].id + ": " + this.playlists[playlistId].name + " - " + this.playlists[playlistId].tracks.length + " tracks");
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(this.tracks[trackId].id);
  },
  printPlaylist: function (playlistId) {
    var playlist = this.playlists[playlistId];
    console.log(playlistId + ": " + playlist.name + " - " + playlist.tracks.length + " tracks");
    for (var index in this.playlists[playlistId].tracks) {
    this.printTrack(this.playlists[playlistId].tracks[index]);
    }
  },
  printTracks: function () {
    for (var track in this.tracks) {
    this.printTrack(this.tracks[track].id);
    }
  },
  printTrack: function (trackId) {
    console.log(this.tracks[trackId].id + ": " + this.tracks[trackId].name + " by " + this.tracks[trackId].artist + " (" + this.tracks[trackId].album + ")");
  },
  addTrack: function (name, artist, album) {
    let newTrack = {
      "id": uid(),
      "name": name,
      "artist": artist,
      "album": album
  }
  this.tracks[newTrack.id] = newTrack;
  return newTrack;
  },
  addPlaylist: function (name) {
    let newPlaylist = {
     "id": uid(),
     "name": name,
     "tracks": []
     }

  this.playlists[newPlaylist.id] = newPlaylist;
  return newPlaylist;
  },
 }

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

// console.log(library.printPlaylists());
//
// library.addTrackToPlaylist('t03', 'p01');
//
// library.printPlaylist(library.playlists.p01.id);
//
// console.log(library.printTracks(library));
//
// library.addTrack("Death Grips", "The Money Store", "Get Got");
//
// library.addPlaylist("Death Grips");