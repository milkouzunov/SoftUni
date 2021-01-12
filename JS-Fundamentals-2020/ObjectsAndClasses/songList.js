function songList(arrOfSongs) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        
    }
    let songs = [];
    let numberOfSongs = arrOfSongs.shift();
    let typeSong = arrOfSongs.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let [typeList, name, time] = arrOfSongs[i].split('_');
        let song = new Song(typeList, name, time);
        songs.push(song);

      
    }
    if (typeSong === 'all') {
        songs.forEach((song) => console.log(song.name));
    } else {
        let filtered = songs.filter((curruntSong) => curruntSong.typeList === typeSong);
        filtered.forEach((curruntSong) => console.log(curruntSong.name));
    }
    
}

songList([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'favourite']
    )