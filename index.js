const music = new Audio('indexsong/1.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Kalank<br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "indeximg/1.jpg"
    },
    {
        id: 2,
        songName: `Khairiyat <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "indeximg/2.jpg"
    },
    {
        id: 3,
        songName: `Channa Mereya <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster: "indeximg/3.jpg"
    },
    {
        id: 4,
        songName: `Ek tarfa Reprise <br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "indeximg/4.jpg"
    },
    {
        id: 5,
        songName: `Rabba Meher Kari <br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "indeximg/5.jpg"
    },
    {
        id: 6,
        songName: `Tera Zikr <br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "indeximg/6.jpg"
    },
    {
        id: 7,
        songName: `Alvida <br>
        <div class="subtitle">KK</div>`,
        poster: "indeximg/7.jpg"
    },
    {
        id: 8,
        songName: `Ajab Si<br>
        <div class="subtitle">KK</div>`,
        poster: "indeximg/8.jpg"
    },
    {
        id: 9,
        songName: `Jeena Jeena<br>
        <div class="subtitle">Atif Aslam</div>`,
        poster: "indeximg/9.jpg"
    },
    {
        id: 10,
        songName: `Dil Diya Gallan <br>
        <div class="subtitle">Atif Aslamr</div>`,
        poster: "indeximg/10.jpg"
    },
    {
        id: 11,
        songName: `Mere Dholna<br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: "indeximg/11.jpg"
    },
    {
        id: 12,
        songName: `Teri Meri<br>
        <div class="subtitle">Shreya Ghoshal</div>`,
        poster: "indeximg/12.jpg"
    },
    {
        id: 13,
        songName: `Boba Tunnelbr>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "indeximg/13.jpg"
    },
    {
        id: 14,
        songName: `Amake Amar Moton <br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "indeximg/14.jpg"
    },
    {
        id: 15,
        songName: `Ekbar Bol <br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "indeximg/15.jpg"
    },
    {
        id: 16,
        songName: `Tumi Jaake Valobasho <br>
        <div class="subtitle">Imon Chakraborty</div>`,
        poster: "indeximg/16.jpg"
    },
    {
        id: 17,
        songName: `Aro Ekbar <br>
        <div class="subtitle">Fossils</div>`,
        poster: "indeximg/17.jpg"
    },
    {
        id: 18,
        songName: `Khnoro Amar Fossils <br>
        <div class="subtitle">Fossils</div>`,
        poster: "indeximg/18.jpg"
    },
    {
        id: 19,
        songName: `Bishakto Manush <br>
        <div class="subtitle">Fossils</div>`,
        poster: "indeximg/19.jpg"
    },
    {
        id: 20,
        songName: `Keno Korle <br>
        <div class="subtitle">Fossils</div>`,
        poster: "indeximg/20.jpg"
    },
    {
        id: 21,
        songName: `Acid <br>
        <div class="subtitle">Fossils</div>`,
        poster: "indeximg/21.jpg"
    },
    {
        id: 22,
        songName: `Akhon Onek Raat <br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "indeximg/22.jpg"
    },
    {
        id: 23,
        songName: `Bariye Dao <br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "indeximg/23.jpg"
    },
    {
        id: 24,
        songName: `We don't Talk Anymore <br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "indeximg/24.jpg"
    },
    {
        id: 25,
        songName: `Left And Right <br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "indeximg/25.jpg"
    },
    {
        id: 26,
        songName: `One Call Away <br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "indeximg/26.jpg"
    },
    {
        id: 27,
        songName: `Sorry <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "indeximg/27.jpg"
    },
    {
        id: 28,
        songName: `Lonely <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "indeximg/28.jpg"
    },
    {
        id: 29,
        songName: `Ghost <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "indeximg/29.jpg"
    },
    {
        id: 30,
        songName: `Attention <br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "indeximg/30.jpg"
    },
    {
        id: 31,
        songName: `Baila Conmigo <br>
        <div class="subtitle">Selena Gomez</div>`,
        poster: "indeximg/31.jpg"
    },
    {
        id: 32,
        songName: `Paper Rings <br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "indeximg/32.jpg"
    },
    {
        id: 33,
        songName: `Lover <br>
        <div class="subtitle"></div>`,
        poster: "indeximg/33.jpg"
    },
    {
        id: 34,
        songName: `Night Changes <br>
        <div class="subtitle"></div>`,
        poster: "indeximg/34.jpg"
    }
] 



const toll = [
    {
        id: 1,
        songName: `Boba Tunnel<br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "indeximg/13.jpg"
    },
    {
        id: 2,
        songName: `Amake Amar Moton <br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "indeximg/14.jpg"
    },
    {
        id: 3,
        songName: `Ekbar Bol <br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "indeximg/15.jpg"
    },
    {
        id: 4,
        songName: `Tumi Jaake Valobasho <br>
        <div class="subtitle">Imon Chakraborty</div>`,
        poster: "indeximg/16.jpg"
    },
    {
        id: 5,
        songName: `Aro Ekbar <br>
        <div class="subtitle">Fossils</div>`,
        poster: "indeximg/17.jpg"
    },
    {
        id: 6,
        songName: `Khnoro Amar Fossils <br>
        <div class="subtitle">Fossils</div>`,
        poster: "indeximg/17.jpg"
    },
    {
        id: 7,
        songName: `Bishakto Manush <br>
        <div class="subtitle">Fossils</div>`,
        poster: "indeximg/17.jpg"
    },
    {
        id: 8,
        songName: `Keno Korle <br>
        <div class="subtitle">Fossils</div>`,
        poster: "indeximg/17.jpg"
    },
    {
        id: 9,
        songName: `Acid <br>
        <div class="subtitle">Fossils</div>`,
        poster: "indeximg/17.jpg"
    },
    {
        id: 10,
        songName: `Akhon Onek Raat <br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "indeximg/22.jpg"
    },
    {
        id: 11,
        songName: `Bariye Dao <br>
        <div class="subtitle">Anupam Roy</div>`,
        poster: "indeximg/23.jpg"
    }
]


const holl = [
    {
        id: 1,
        songName: `We don't Talk Anymore <br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "indeximg/24.jpg"
    },
    {
        id: 2,
        songName: `Left And Right <br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "indeximg/25.jpg"
    },
    {
        id: 3,
        songName: `One Call Away <br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "indeximg/26.jpg"
    },
    {
        id: 4,
        songName: `Sorry <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "indeximg/27.jpg"
    },
    {
        id: 5,
        songName: `Lonely <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "indeximg/28.jpg"
    },
    {
        id: 6,
        songName: `Ghost <br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "indeximg/29.jpg"
    },
    {
        id: 7,
        songName: `Attention <br>
        <div class="subtitle">Charlie Puth</div>`,
        poster: "indeximg/30.jpg"
    },
    {
        id: 8,
        songName: `Baila Conmigo <br>
        <div class="subtitle">Selena Gomez</div>`,
        poster: "indeximg/31.jpg"
    },
    {
        id: 9,
        songName: `Paper Rings <br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "indeximg/32.jpg"
    },
    {
        id: 10,
        songName: `Lover <br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "indeximg/33.jpg"
    },
    {
        id: 11,
        songName: `Night Changes <br>
        <div class="subtitle">Taylor Swift</div>`,
        poster: "indeximg/34.jpg"
    }
]







Array.from(document.getElementsByClassName('con')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

Array.from(document.getElementsByClassName('con2')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = toll[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = toll[i].songName;
});

Array.from(document.getElementsByClassName('con3')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = holl[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = holl[i].songName;
});


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        

    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-circle-fill');
        masterPlay.classList.remove('bi-pause-circle-fill');
        
    }
});

//master play

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}



let index =0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `indexsong/${index}.mp3`;
        poster_master_play.src = `indeximg/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        download_music.href = `indexsong/${index}.mp3`;
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        // makeAllBackground();
        // Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
        // makeAllplays();
        // el.target.classList.remove('bi-play-circle-fill');
        // el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
        
       

    });
})

//music bar

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(sec1);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

//volume bar

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `indexsong/${index}.mp3`;
        poster_master_play.src = `indeximg/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
         
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        // makeAllBackground();
        // Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
        // makeAllplays();
        // el.target.classList.remove('bi-play-circle-fill');
        // el.target.classList.add('bi-pause-circle-fill');
        // wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `indexsong/${index}.mp3`;
        poster_master_play.src = `indeximg/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
         
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
        });

        // makeAllBackground();
        // Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
        // makeAllplays();
        // el.target.classList.remove('bi-play-circle-fill');
        // el.target.classList.add('bi-pause-circle-fill');
        // wave.classList.add('active1');
})











//scroll



let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];



pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
})





let pop_song_left2 = document.getElementById('pop_song_left2');
let pop_song_right2 = document.getElementById('pop_song_right2');
let pop_song2 = document.getElementsByClassName('pop_song2')[0];



pop_song_right2.addEventListener('click', () => {
    pop_song2.scrollLeft += 330;
})
pop_song_left2.addEventListener('click', () => {
    pop_song2.scrollLeft -= 330;
})


let pop_song_left3 = document.getElementById('pop_song_left3');
let pop_song_right3 = document.getElementById('pop_song_right3');
let pop_song3 = document.getElementsByClassName('pop_song3')[0];



pop_song_right3.addEventListener('click', () => {
    pop_song3.scrollLeft += 330;
})
pop_song_left3.addEventListener('click', () => {
    pop_song3.scrollLeft -= 330;
})


let shuffle =document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-repeat-1');
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
    
        case  "repeat":
            shuffle.classList.remove('bi-repeat-1');
            shuffle.classList.remove('bi-repeat');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

            case  "random":
            shuffle.classList.remove('bi-repeat-1');
            shuffle.classList.add('bi-repeat');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});


music.addEventListener('ended', ()=>{
    indexv++;
    music.src = `indexsong/${index}.mp3`;
        poster_master_play.src = `indeximg/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
        // download_music.href = `indexsong/${index}.mp3`;
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            // download_music.setAttribute('download', songName);
        });

        // makeAllBackground();
        // Array.from(document.getElementsByClassName('songItem'))[index-1].style.background ="rgb(105, 105, 105, .1)";
        // makeAllplays();
        // el.target.classList.remove('bi-play-circle-fill');
        // el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})







const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');

showPopup.onclick = () => {
    popupContainer.classList.add('active');
}

closeBtn.onclick = () => {
    popupContainer.classList.remove('active');
}