// Task 40: Album
function make_album(artist: string, album_title: string, tracks?: number): { artist: string, album_title: string, tracks?: number } {
  let album: { artist: string, album_title: string, tracks?: number } = {
      artist: artist,
      album_title: album_title
  };
  if (tracks !== undefined) {
      album.tracks = tracks;
  }
  return album;
}

// Create three albums
let album1 = make_album('Artist1', 'Album1', 10);
let album2 = make_album('Artist2', 'Album2');
let album3 = make_album('Artist3', 'Album3', 15);

console.log(album1);
console.log(album2);
console.log(album3);
