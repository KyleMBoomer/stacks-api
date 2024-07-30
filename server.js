const express = require('express');
const app = express();
const cors = require('cors')

app.use(express.json())
app.use(cors())


app.set('port', process.env.PORT || 3000);
app.locals.title = 'Stacks';

app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
})

app.locals.albums = [
    {
        id: 'P-AL-33453-4L',
        albumName: 'Wish You Were Here',
        artist: 'Pink Floyd',
        releaseDate: 'September 12th, 1975',
        genre: 'Rock',
        bandMembers: ['Roger Waters', 'David Gilmour', 'Rick Wright', 'Nick Mason'],
        label: 'Harvest/Columbia',
        isBandTogether: false,
        rollingStoneReview: '*****',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=TMy_mYkwl4M',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/a/a4/Pink_Floyd%2C_Wish_You_Were_Here_%281975%29.png',
        albumsSold: 130000000,
    },
    {
        id: 'S-66100-724352775316',
        albumName: 'Kid A',
        artist: 'Radiohead',
        releaseDate: 'October 2nd, 2000',
        genre: 'Rock',
        bandMembers: ['Thom Yorke', 'Jonny Greenwood', 'Ed O/Brien', 'Phil Selway', 'Colin Greenwood'],
        label: 'Parlophone/Capitol',
        isBandTogether: true,
        rollingStoneReview: '****',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=NUnXxh5U25Y&list=PLtP8IJbMRbLwJwxyaCUaUWtBo1KK2K7RG',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/0/02/Radioheadkida.png',
        albumsSold: 4000000,
    },
    {
        id: '61422-31160',
        albumName: 'Lateralus',
        artist: 'TOOL',
        releaseDate: 'May 15th, 2001',
        genre: 'Rock',
        bandMembers: ['Maynard James Keenan', 'Adam Jones', 'Danny Carey', 'Justin Chancellor'],
        label: 'Volcano',
        isBandTogether: true,
        rollingStoneReview: '****',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=3BXyEUOuNds&list=PLESF6Vbm19P2IGN0wvksh-SYVWWj4lrxN',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/6/63/Tool_-_Lateralus.jpg',
        albumsSold: 3470000,
    },
    {
        id: '82876-50133-BB-SB-REI',
        albumName: 'Speakerboxxx/The Love Below',
        artist: 'Outkast',
        releaseDate: 'September 23rd, 2003',
        genre: 'Hip-Hop',
        bandMembers: ['Antwan Andre Patton', 'Andre Lauren Benjamin'],
        label: 'Arista',
        isBandTogether: true,
        rollingStoneReview: '***',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=RWof0wCG0Mw&list=PLC80P4gsPr-btAs663t1glvlOmy7kCUTi',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/54/Speakerboxxx-The_Love_Below.png',
        albumsSold: 11000000,
    },
    {
        id: 'MCR-902',
        albumName: 'Voodoo',
        artist: 'D`Angelo',
        releaseDate: 'January 25th, 2000',
        genre: 'Pop',
        bandMembers: ['Michael Euguene Archer', 'Ahmir Thompson', 'Pino Palladino', 'Charlie Hunter'],
        label: 'Virgin',
        isBandTogether: false,
        rollingStoneReview: '***',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=eo3iqsOH_54&list=PLj0iicDFTqJq8CcEMDS1VUbT0DPjFYOm1',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Voodoo_UK.jpg',
        albumsSold: 1700000
    },
    {
        id: '602547306777',
        albumName: 'Currents',
        artist: 'Tame Impala',
        releaseDate: 'July 17th, 2015',
        genre: 'Rock',
        bandMembers: ['Kevin Parker'],
        label: 'Modular',
        isBandTogether: true,
        rollingStoneReview: '****',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=LM6b85stNWI',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png',
        albumsSold: 1325034,
    },
    {
        id: '07243-849608',
        albumName: 'Discovery',
        artist: 'Daft Punk',
        releaseDate: 'March 12th, 2001',
        genre: 'Pop',
        bandMembers: ['Thomas Bangalter', 'Guy-Manuel de Homem-Christo'],
        label: 'Daft House',
        isBandTogether: true,
        rollingStoneReview: '***',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=A2VpR8HahKc&list=PLSdoVPM5WnndSQEXRz704yQkKwx76GvPV',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png',
        albumsSold: 2856000,
    },
    {
        id: 'DFA-2250LP',
        albumName: 'This is Happening',
        artist: 'LCD Soundsystem',
        releaseDate: 'May 17th, 2010',
        genre: 'Pop',
        bandMembers: ['James Murphy', 'Nancy Whang', 'Pat Mahoney', 'Tyler Pope', 'Al Doyle', 'Matt Thornley', 'Korey Richey'],
        label: 'DFA/Virgin/Parlophone',
        isBandTogether: true,
        rollingStoneReview: '****',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=9ZNkPA_zUd4&list=OLAK5uy_lGgRvgGZf4SkJH8vN5Vt-5JBPwxgqNGgQ',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/7/7e/Lcdthisishappening.jpg',
        albumsSold: 300000,
    },
    {
        id: 'V6-8409',
        albumName: 'The Essential Charlie Parker',
        artist: 'Charlie Parker',
        releaseDate: '1961',
        genre: 'Jazz',
        bandMembers: ['Charlie Parker', 'Max Roach', 'Thelonius Monk', 'Miles Davis', 'Dizzy Gillespie', 'Teddy Kotick'],
        label: 'Verve',
        isBandTogether: false,
        rollingStoneReview: 'N/A',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=yOKtvLqzhBg',
        imgURL: 'https://i.discogs.com/pzRJY2IbBKGnkaw9-jT1w7Y1ImsnTSg7-twB_ycnEzw/rs:fit/g:sm/q:90/h:591/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMzNDI2/NzQtMTM5Mjc1NjUx/OS00MjUwLmpwZWc.jpeg',
        albumsSold: 1,
    },
    {
        id: 'AFL1-2686',
        albumName: 'Waylon & Willie',
        artist: 'Willie Nelson',
        releaseDate: 'January 1978',
        genre: 'Country',
        bandMembers: ['Willie Nelson', 'Waylon Jennings'],
        label: 'RCA',
        isBandTogether: false,
        rollingStoneReview: 'N/A',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=i85ob2DackI&list=OLAK5uy_nOKWcp0nCDApfOzl2YXxfc3OaJMdvBtIM',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/9/9a/JenningsNelsonWaylon%26Willie.jpg',
        albumsSold: 21000000,
    },
    {
        id: 'T-416',
        albumName: 'The Hit Makers!',
        artist: 'Les Paul and Mary Ford',
        releaseDate: '1955',
        genre: 'Jazz',
        bandMembers: ['Les Paul', 'Mary Ford'],
        label: 'Capitol',
        isBandTogether: false,
        rollingStoneReview: 'N/A',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=6agWO5f4Tzs',
        imgURL: 'https://i.discogs.com/pK2s6x4w0YRfEUrzE5Gd-bdL5jAb7LjHv-V8Tnwqlek/rs:fit/g:sm/q:90/h:596/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMDYx/MTUtMTQ2NDQ0NjI3/MS01NDgxLmpwZWc.jpeg',
        albumsSold: 1000000,
    },
    {
        id: 'CL-2249',
        albumName: 'WEDNESDAY MORNING, 3AM',
        artist: 'Simon and Garfunkel',
        releaseDate: 'October 19th, 1964',
        genre: 'Folk',
        bandMembers: ['Paul Simon', 'Art Garfunkel'],
        label: 'Columbia',
        isBandTogether: false,
        rollingStoneReview: '',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=1CAlRaLHINw&list=PLiN-7mukU_RGs6EIvLhRff-PVLG25otOV',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Simon_%26_Garfunkel%2C_Wednesday_Morning%2C_3_A.M._%281964%29.png',
        albumsSold: 1000000,
    },
    {
        id: 'EKS-74071',
        albumName: 'Fun House',
        artist: 'the Stooges',
        releaseDate: 'May 11th, 1970',
        genre: 'Rock',
        bandMembers: ['Iggy Pop', 'Ron Asheton', 'Scott Asheton', 'Dave Alexander', 'Steve Mackay'],
        label: 'Elektra',
        isBandTogether: false,
        rollingStoneReview: '*****',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=1OedEgzDl_I',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/6/6d/StoogesFunHouse.jpg',
        albumsSold: 89000,
    },
    {
        id: 'B0026745-01',
        albumName: 'DAMN',
        artist: 'Kendrick Lamar',
        releaseDate: 'July 14th, 2017',
        genre: 'Hip-Hop',
        bandMembers: ['Kendrick Lamar'],
        label: 'Interscope/Aftermath',
        isBandTogether: true,
        rollingStoneReview: '*****',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=5OaGBXAzFY0',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png',
        albumsSold: 4255414,
    },
    {
        id: 'PSR-OO16-1',
        albumName: 'Frizzle Fry',
        artist: 'Primus',
        releaseDate: 'February 7th, 1990',
        genre: 'Rock',
        bandMembers: ['Les Claypool', 'Larry LaRonde', 'Tim Alexander'],
        label: 'Caroline Records',
        isBandTogether: true,
        rollingStoneReview: '***',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=AccbAu2KmFg&list=PLC80P4gsPr-b2fLjtJcKy9sFAoXk345Y9',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/e/ed/Primus-Frizzle_Fry.jpg',
        albumsSold: 1,
    },
    {
        id: '-509996-94239-18',
        albumName: 'Hello Nasty',
        artist: 'Beastie Boys',
        releaseDate: 'July 14th, 1998',
        genre: 'Hip-Hop',
        bandMembers: ['Adam Horovitz', 'Adam Yauch', 'Michael Diamond'],
        label: 'Grand Royal',
        isBandTogether: false,
        rollingStoneReview: '****',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=LdqzOldqRxo&list=PLrI4QPCrk2Hicbia7Pm6r3wcw_efNEwhQ',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/7/78/Beastie_Boys_-_Hello_Nasty.png',
        albumsSold: 4928000,
    },
    {
        id: '828-522-1',
        albumName: 'Dummy',
        artist: 'Portishead',
        releaseDate: 'August 22nd, 1994',
        genre: 'Rock',
        bandMembers: ['Beth Gibbons', 'Jeff Barrow', 'Adrian Utley'],
        label: 'Go!Beat London',
        isBandTogether: true,
        rollingStoneReview: '****',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=GxWgRnnWfcc&list=PLH1JGOJgZ2u2J7bRnfjl-7kDj_vQKTPa6',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Portishead_-_Dummy.png',
        albumsSold: 2735000,
    },
    {
        id: '-SP-034',
        albumName: 'Bleach',
        artist: 'Nirvana',
        releaseDate: 'June 15th, 1989',
        genre: 'Rock',
        bandMembers: ['Kurt Cobain', 'Krist Novoselic', 'Chad Channng', 'Jason Everman', 'Dave Grohl'],
        label: 'Sub Pop',
        isBandTogether: false,
        rollingStoneReview: '****',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=VdPdFNptSU0',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/a/a1/Nirvana-Bleach.jpg',
        albumsSold: 2389530,
    },
    {
        id: 'CBS-80193',
        albumName: 'Thrust',
        artist: 'Herbie Hancock',
        releaseDate: 'September 6th, 1974',
        genre: 'Jazz',
        bandMembers: ['Herbie Hancock', 'Bennie Maupin', 'Paul Jackson', 'Mike Clark', 'Bill Summers'],
        label: 'Columbia',
        isBandTogether: false,
        rollingStoneReview: '***',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=v1cjzTFAVmc',
        imgURL: 'https://upload.wikimedia.org/wikipedia/en/1/10/Herbie_hancock_Thrust.jpg',
        albumsSold: 1,
    },
    {
        id: 'STL-M01',
        albumName: 'The Late Piano Concertos',
        artist: 'Wolfgang Amadeus Mozart',
        releaseDate: '1979',
        genre: 'Classical',
        bandMembers: ['Wolfgang Amadeus Mozart'],
        label: 'Time Life Records',
        isBandTogether: false,
        rollingStoneReview: '',
        youTubeAlbumURL: 'https://www.youtube.com/watch?v=DI7GkDes1Eo&list=PLxA0fo4jnSpd0Kcb5ao5UnfBe9VaKEG9E',
        imgURL: 'https://i.discogs.com/eiovgOpzntJ56YIckc1bLPwKhhUn7DdlmCKlw3-QuWI/rs:fit/g:sm/q:90/h:600/w:576/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyOTUx/NzYtMTQwNTc5MjE2/NS01NDU4LmpwZWc.jpeg',
        albumsSold: 1,
    },
]

app.get('/albums', (request, response) => {
    const albums = app.locals.albums
    response.json(albums)
});

app.get('/:id', (req, res) => {
    const { id } = req.params
    const album = app.locals.albums.find(album => album.id === id)
    if (!album) {
        return res.sendStatus(404)
    }

    res.status(200).json(album)
})

app.post('/', (req, res) => {
    const newAlbum = req.body;
    if (!newAlbum || Object.keys(newAlbum).length === 0) {
        return res.status(400).send({ message: 'Invalid album data' });
    }
    app.locals.albums.push(newAlbum);
    res.status(201).send(newAlbum);
});


