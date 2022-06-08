const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const PORT = 8000

const kdrama = {
    'my secret romance': {
        'releaseYear': 2017,
        'genre': 'Romance, Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Song Hoon, Song Ji Eun, Kim Jae Young, Da Sol Jung',
        'googleRating': '90%',
        'writtenBy': 'Kim Ha-na, Kim Young-yoon'
    },

    'my secret terius': {
        'releaseYear': 2018,
        'genre': 'Mystery',
        'seasons': 1, 
        'episodes': 32,
        'epRunTimeMinutes': 35,
        'starring': 'So Ji-sub, Jung In-sun, Son Ho-jun, Kang Ki-young',
        'googleRating': '92%',
        'writtenBy': 'Oh Ji-young'
    },

    'memories of the alhambra': {
        'releaseYear': 2018,
        'genre': 'Scienc Fantasy, Action, Thriller, Romance',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Hyun Bin, Park Shin-hye, Park Hoon, Chanyeol',
        'googleRating': '91%',
        'writtenBy': 'Song Jae-jung'
    },

    'the k2': {
        'releaseYear': 2016,
        'genre': 'Action, Melodrama, Politics',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Ji Chang-wook, Song Yoon-ah, Im Yoon-ah, Jo Sung-ha',
        'googleRating': '89%',
        'writtenBy': 'Jang Hyuk-rin'
    },

    'because this is my first life': {
        'releaseYear': 2017,
        'genre': 'Romantic Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Jung So-min, Lee Min Ki, Park Byeong-eun, Esom',
        'googleRating': '88%',
        'writtenBy': 'Yoon Nan-joong'
    },

    'chocolate': {
        'releaseYear': 2019,
        'genre': 'Romance',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Yoon Kye-sang, Ha Ji-won, Jang Seung-jo, Min Jin-Woong',
        'googleRating': '86%',
        'writtenBy': 'Lee Kyung-hee'
    },

    'vagabond': {
        'releaseYear': 2019,
        'genre': 'Spy, crime, Action, Thriller, Romance',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Lee Seung-gi, Bae Suzy, Shin Sung-rok, Moon Jeong-hee',
        'googleRating': '93%',
        'writtenBy': 'Jang Young-chul, Jung Kyung-soon'
    },

    'hospital playlist': {
        'releaseYear': 2020,
        'genre': 'Medical Drama, Romance, Comedy, Slice-of-life',
        'seasons': 2, 
        'episodes': 24,
        'epRunTimeMinutes': 72,
        'starring': 'Jeong Mi-do, Jo Jung-Suk, Yoo Yeon-seok, Jun Kyung-ho',
        'googleRating': '96%',
        'writtenBy': 'Lee Woo-jung'
    },

    'uncontrollably fond': {
        'releaseYear': 2016,
        'genre': 'Romance, Melodrama',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Kim Woo-bin, Bae Suzy, Lim Ju-eun, Lim Ju-hwan',
        'googleRating': '87%',
        'writtenBy': 'Lee Kyung-hee'
    },
    
    'her private life': {
        'releaseYear': 2019,
        'genre': 'Romantic Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Kim Jae-wook, Park Min-young, Jung Je-won, Ahn Bo-hyun',
        'googleRating': '87%',
        'writtenBy': 'Kim Hye-young'
    },

    'itaewon class': {
        'releaseYear': 2020,
        'genre': 'Drama',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Park Seo-joon, Kim Da-mi, Yoo Jae-myung, Kwon Nara',
        'googleRating': '96%',
        'writtenBy': 'Gwang Jin'
    },

    'oh my venus': {
        'releaseYear': 2015,
        'genre': 'Romance, Drama, Comedy, Fitness',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'So Ji-sub, Shin Min-a, Sung Hoon, Yoo In-young',
        'googleRating': '94%',
        'writtenBy': 'Kim Eun-ji'
    },

    'fight for my way': {
        'releaseYear': 2017,
        'genre': 'Workplace, Slice-of-life, Romance',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Park Seo-joon, Kim Ji-won, Choi Woo-shik, Song Ha-na',
        'googleRating': '90%',
        'writtenBy': 'Im Sang-choon'
    },

    'find me in your memory': {
        'releaseYear': 2020,
        'genre': 'Romance, Drama, Mystery',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 35,
        'starring': 'Moon Ga-young, Kim dong-wook, Rowoon, Kim Seon-ho',
        'googleRating': '79%',
        'writtenBy': 'Kim Yoon-joo, Yoon Ji-hyun'
    },

    'w': {
        'releaseYear': 2016,
        'genre': 'Fantasy, Romance, Comedy, Thriller, Action',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Lee Jong-suk, Han Hyo-joo, Jeong Eu-Gene, Lee Tae-hwan',
        'googleRating': '91%',
        'writtenBy': 'Song Jae-jung'
    },

    'suspicious partner': {
        'releaseYear': 2017,
        'genre': 'Legal, Crime, Romantic Comedy',
        'seasons': 1, 
        'episodes': 40,
        'epRunTimeMinutes': 30,
        'starring': 'Ji Chang-wook, Nam Ji-hyun, Choi Tae-joon, Kwon Nara',
        'googleRating': '89%',
        'writtenBy': 'Kwon Ki-young'
    },

    'the king: eternal monarch': {
        'releaseYear': 2020,
        'genre': 'Romance, Fantasy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 75,
        'starring': 'Lee Min-ho, Kim Go-eun, Woo Do-hwan, Jung Eun-chae',
        'googleRating': '93%',
        'writtenBy': 'Kim Eun-sook'
    },

    'its okay to not be okay': {
        'releaseYear': 2020,
        'genre': 'Romantic Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 80,
        'starring': 'Kim Soo-hyun, Seo Yae-ji, Oh Jung-se, Park Gyu-young',
        'googleRating': '97%',
        'writtenBy': 'Jo Yong'
    },

    'pinocchio': {
        'releaseYear': 2014,
        'genre': 'Romance, Drama, Comedy, Family',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Lee Jong-suk, Park Shin-hye, Kim Young-kwang, Lee Yu-bi',
        'googleRating': '91%',
        'writtenBy': 'Park Hye-ryun'
    },

    'crash landing on you': {
        'releaseYear': 2020,
        'genre': 'Romantic Drama, Romantic Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 100,
        'starring': 'Hyun Bin, Son Ye-jin, Kim Jung-hyun, Seo Ji-hye',
        'googleRating': '97%',
        'writtenBy': 'Park Ji-eun'
    },

    'revolutionary love': {
        'releaseYear': 2017,
        'genre': 'Romantic Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Choi Si-won, Kang So-ra, Gong Myung, Lee Jae-yoon',
        'googleRating': '71%',
        'writtenBy': 'Joo Hyun'
    },

    'run on': {
        'releaseYear': 2020,
        'genre': 'Drama, Romance, Life, Sports',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Im Si-wan, Shin Se-kyung, Choi Soo-young, Kang Tae-oh',
        'googleRating': '85%',
        'writtenBy': 'Park Shi-hyun'
    },

    'lovestruck in the city': {
        'releaseYear': 2020,
        'genre': 'Romance',
        'seasons': 1, 
        'episodes': 17,
        'epRunTimeMinutes': 35,
        'starring': 'Ji Chang-wook, Kim Ji-won, Kim Min-seok, Han Ji-eun',
        'googleRating': '82%',
        'writtenBy': 'Jung Hyun-jung, Jung Da-yun'
    },

    'healer': {
        'releaseYear': 2014,
        'genre': 'Action, Thriller, Romance',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Ji Chang-wook, Park Min-young, Yoo Ji-tae',
        'googleRating': '90%',
        'writtenBy': 'Song Ji-na'
    },

    'five fingers': {
        'releaseYear': 2012,
        'genre': 'Romance, Music',
        'seasons': 1, 
        'episodes': 30,
        'epRunTimeMinutes': 60,
        'starring': 'Ju Ji-hoon, Chae Shi-ra, Ji Chang-wook, Jin Se-yeon',
        'googleRating': '75%',
        'writtenBy': 'Kim Soon-ok'
    },

    'my father is strange': {
        'releaseYear': 2017,
        'genre': 'Family, Drama, Romance, Comedy',
        'seasons': 1, 
        'episodes': 52,
        'epRunTimeMinutes': 65,
        'starring': 'Lee Joon, Jung So-min, Lee Yu-ri, Ahn Hyo-seop',
        'googleRating': '89%',
        'writtenBy': 'Lee Jung Sun'
    },

    'my father is strange': {
        'releaseYear': 2017,
        'genre': 'Family, Drama, Romance, Comedy',
        'seasons': 1, 
        'episodes': 52,
        'epRunTimeMinutes': 65,
        'starring': 'Lee Joon, Jung So-min, Lee Yu-ri, Ahn Hyo-seop',
        'googleRating': '89%',
        'writtenBy': 'Lee Jung Sun'
    },

    'boys over flowers': {
        'releaseYear': 2009,
        'genre': 'Romance, Comedy, Drama',
        'seasons': 1, 
        'episodes': 25,
        'epRunTimeMinutes': 60,
        'starring': 'Lee Min-ho, Koo Hye-sun, Kim Bum, Kim Hyun-joong',
        'googleRating': '95%',
        'writtenBy': 'Yoon Ji-ryun'
    },

    'marry me, mary': {
        'releaseYear': 2010,
        'genre': 'Romance, Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Jang Keun-suk, Moon Geun-young, Kim Jae-wook, Geum Ho-suk',
        'googleRating': '92%',
        'writtenBy': 'Yoon Ji-ryun'
    },

    'love rain': {
        'releaseYear': 2012,
        'genre': 'Romance, Melodrama',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Jang Keun-suk, Im Yoon-ah, Kim Shi-hoo, Lee Mi-sook',
        'googleRating': '94%',
        'writtenBy': 'Yoon Seok-ho'
    },

    'he is beautiful': {
        'releaseYear': 2009,
        'genre': 'Romance, Comedy, Musical, Drama',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Park Shin-hye, Jang Keun-suk, Lee Hong-gi, Jung Yong-hwa',
        'googleRating': '94%',
        'writtenBy': 'Hong Jung-eun, Hong Mi-ran'
    },

    'personal taste': {
        'releaseYear': 2010,
        'genre': 'Romance, Comedy, Drama',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Lee Min-ho, Son Ye-jin, Wang Ji-hye, Yoon Eun-hye',
        'googleRating': '95%',
        'writtenBy': 'Kim Hee-ju'
    },

    'start-up': {
        'releaseYear': 2020,
        'genre': 'Drama, Romance',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 80,
        'starring': 'Bae Suzy, Nam Joo-hyuk, Kim Seon-ho, Kang Han-na',
        'googleRating': '92%',
        'writtenBy': 'Park Hye-ryun'
    },

    'dream high': {
        'releaseYear': 2011,
        'genre': 'Music, Teen, Romantic Comedy',
        'seasons': 1, 
        'episodes': 17,
        'epRunTimeMinutes': 65,
        'starring': 'Bae Suzy, Ok Taec-yeon, Kim Soo-hyun, IU, Ham Eun-jung',
        'googleRating': '90%',
        'writtenBy': 'Park Hye-ryun'
    },

    'gu family book': {
        'releaseYear': 2013,
        'genre': 'Historical, Romance, action, Fantasy',
        'seasons': 1, 
        'episodes': 24,
        'epRunTimeMinutes': 60,
        'starring': 'Lee Seung-gi, Bae Suzy, Sung Joon, Lee Yu-bi',
        'googleRating': '94%',
        'writtenBy': 'Kang Eun-kyung'
    },

    'the heirs': {
        'releaseYear': 2013,
        'genre': 'Romance, Drama, Teen',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Lee Min-ho, Park Shin-hye, Kim Woo-bin',
        'googleRating': '94%',
        'writtenBy': 'Kim Eun-sook'
    },

    'doctors': {
        'releaseYear': 2016,
        'genre': 'Medical, Drama, Romance',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Kim Rae-won, Park Shin-hye, Yoon Kyun-sang, Lee Sung-kyun',
        'googleRating': '89%',
        'writtenBy': 'Ha Myung-hee'
    },

    'heartsrings': {
        'releaseYear': 2011,
        'genre': 'Romance, Melodrama, Musical',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Park Shin0hye, Jung Yong-hwa, Moon Ga-young, Kang Min-hyuk',
        'googleRating': '95%',
        'writtenBy': 'Lee Myung-sook'
    },

    'city hunter': {
        'releaseYear': 2011,
        'genre': 'Action, Thriller, Romance',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 70,
        'starring': 'Lee Min-ho, Park Min-young, Lee Joon-hyuk, Kim Sang-joong',
        'googleRating': '95%',
        'writtenBy': 'Hwang Eun-kyung, Choi Soo-jin'
    },

    'bride of the century': {
        'releaseYear': 2014,
        'genre': 'Comedy, Romance, Fantasy, Melodrama',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Lee Hong-ki, Yang Jin-sung, Sung Hyuk, Jung Hae-in',
        'googleRating': '91%',
        'writtenBy': 'Baek Young-sook'
    },

    'my lovely girl': {
        'releaseYear': 2014,
        'genre': 'Romance, Musical, Drama',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Jung Ji-hoon (Rain), Krystal Jung, L, Cha Ye-ryun',
        'googleRating': '71%',
        'writtenBy': 'Noh Ji-seol'
    },

    'whats wrong with secretary kim': {
        'releaseYear': 2018,
        'genre': 'Romantic Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Park Seo-joon, Park Min-young',
        'googleRating': '94%',
        'writtenBy': 'Jung Eun-young'
    },

    'hyde, jekyll, me': {
        'releaseYear': 2015,
        'genre': 'Romance, Comedy, Drama',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Hyun Bin, Han Ji-min, Sung Joon, Lee Hey-ri',
        'googleRating': '73%',
        'writtenBy': 'Kim Ji-woon'
    },

    'the masters sun': {
        'releaseYear': 2013,
        'genre': 'Romantic Comedy, Fantasy, Horror, Mystery',
        'seasons': 1, 
        'episodes': 17,
        'epRunTimeMinutes': 60,
        'starring': 'So Ji-sub, Gong Hyo-jin, Seo In-guk, Kim Yoo-ri',
        'googleRating': '90%',
        'writtenBy': 'Hong Sisters'
    },

    'cinderella man': {
        'releaseYear': 2009,
        'genre': 'Romance, Drama',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Kwon Sang-woo, Im Yoon-ah, Han Eun-jung, Song Chang-eul',
        'googleRating': '86%',
        'writtenBy': 'Cho Yoon-young'
    },

    'the lies within': {
        'releaseYear': 2019,
        'genre': 'Thriller',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Lee Min-ki, Lee Yoo-young',
        'googleRating': '72%',
        'writtenBy': 'Jeon Young-sin, Won Yoo-jung'
    },

    'my fellow citizens!': {
        'releaseYear': 2019,
        'genre': 'Comedy, Crime',
        'seasons': 1, 
        'episodes': 36,
        'epRunTimeMinutes': 35,
        'starring': 'Choi Si-won, Lee Yoo-young, Kim Min-jung',
        'googleRating': '84%',
        'writtenBy': 'Han Jung-hoon'
    },

    'the beauty inside': {
        'releaseYear': 2018,
        'genre': 'Fantasy, Melodrama, Romance',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Seo Hyun-jin, Lee Min-ki, Lee Da-hee, Ahn Jae-hyun',
        'googleRating': '85%',
        'writtenBy': 'Im Mea-ri'
    },

    'the king 2 hearts': {
        'releaseYear': 2012,
        'genre': 'Romance, Drama, Action',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Ha Ji-won, Lee Seung-gi',
        'googleRating': '91%',
        'writtenBy': 'Hong Jin-ah'
    },

    'doctor john': {
        'releaseYear': 2019,
        'genre': 'Medical Drama',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Ji Sung, Lee Se-kyung, Lee Kyu-hyung, Hwang Hee',
        'googleRating': '92%',
        'writtenBy': 'Kim Ji-woon'
    },

    'wok of love': {
        'releaseYear': 2018,
        'genre': 'Drama, Romance, Comedy',
        'seasons': 1, 
        'episodes': 38,
        'epRunTimeMinutes': 35,
        'starring': 'Lee Jun-ho, Jang Hyuk, Jung Ryeo-won',
        'googleRating': '91%',
        'writtenBy': 'Seo Sook-hyang'
    },

    'sisyphus: the myth': {
        'releaseYear': 2021,
        'genre': 'Science Fiction, Thriller, Drama, Action',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Cho Seung-woo, Park Shin-hye',
        'googleRating': '82%',
        'writtenBy': 'Lee Je-in, Jeon Chan-ho'
    },

    'clean with passion for now': {
        'releaseYear': 2018,
        'genre': 'Romantic Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Kim Yoo-jung, Yoon Kyun-sang, Song Jae-rim',
        'googleRating': '88%',
        'writtenBy': 'Han Ji-jung'
    },

    'tale of the nine tailed': {
        'releaseYear': 2020,
        'genre': 'Fantasy, Action, Romance, Drama, Suspense, Horror',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Lee Dong-wook, Jo Bo-ah, Kim Bum, Kim Yong-ji',
        'googleRating': '95%',
        'writtenBy': 'Han Woo-ri'
    },

    'vincenzo': {
        'releaseYear': 2021,
        'genre': 'Crime Drama, Dark Comedy',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Song Joong-ki, Jeon Yeo-been, Ok Taecyeon, Kwak Dong-yeon',
        'googleRating': '97%',
        'writtenBy': 'Park Jae-bum'
    },

    'come and hug me': {
        'releaseYear': 2018,
        'genre': 'Romance, Melodrama, Thriller, Mystery',
        'seasons': 1, 
        'episodes': 32,
        'epRunTimeMinutes': 35,
        'starring': 'Jang Ki-yong, Jin Ki-joo, Heo Joon-ho',
        'googleRating': '91%',
        'writtenBy': 'Lee A-ram'
    },

    'search www': {
        'releaseYear': 2019,
        'genre': 'Romance, Melodrama',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Im Soo-jung, Jang Ki-yong, Lee Da-hi, Lee Jae-wook',
        'googleRating': '87%',
        'writtenBy': 'Kwon Do-eun'
    },

    'flower of evil': {
        'releaseYear': 2020,
        'genre': 'Melodrama, Suspense',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Lee Joon-gi, Moon Chae-won, Jang Hee-jin, Seo Hyun-woo',
        'googleRating': '92%',
        'writtenBy': 'Yoo Jung-hee'
    },

    'black knight: the man who guards me': {
        'releaseYear': 2017,
        'genre': 'Fantasy, Romance, Melodrama',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Kim Rae-won, Shin Se-kyung, Seo Ji-hye, Chang Mi-hee',
        'googleRating': '74%',
        'writtenBy': 'Kim In-yeong'
    },

    'cinderella and the four knights': {
        'releaseYear': 2016,
        'genre': 'Romantic Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Park So-dam, Jung Il-woo, Ahn Jae-hyun, Lee Jung-Shin',
        'googleRating': '92%',
        'writtenBy': 'Min Ji-eun, Won Young-sil'
    },

    'our beloved summer': {
        'releaseYear': 2021,
        'genre': 'Romantic Comedy, Coming-of-age',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 65,
        'starring': 'Choi Wook-shik, Kim Da-mi, Kim Sung-cheol, Roh Jeong-eul',
        'googleRating': '97%',
        'writtenBy': 'Lee Na-eun'
    },

    'beautiful gong shim': {
        'releaseYear': 2016,
        'genre': 'Romance, Comedy',
        'seasons': 1, 
        'episodes': 20,
        'epRunTimeMinutes': 60,
        'starring': 'Namkoong Min, Bang Minah, On Joo-wan, Seo Hyo-rim',
        'googleRating': '83%',
        'writtenBy': 'Lee Hee-myung'
    },

    'descendants of the sun': {
        'releaseYear': 2016,
        'genre': 'Romance, Melodrama, Action',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Song Joong-ki, Song Hye-kyo, Kim Ji-won, Jon Goo',
        'googleRating': '96%',
        'writtenBy': 'Kim Eun-sook, Kim Won-seok'
    },

    'business proposal': {
        'releaseYear': 2022,
        'genre': 'Romantic Comedy',
        'seasons': 1, 
        'episodes': 12,
        'epRunTimeMinutes': 60,
        'starring': 'Ahn Hyo-seop, Kim Sejeong, Seol In-ah, Kim Min-kyu',
        'googleRating': '98%',
        'writtenBy': 'Han Seol-ho, Hong Bo-hee'
    },

    'forecasting love and weather': {
        'releaseYear': 2022,
        'genre': 'Romantic Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Park Min-young, Song Kang, Yoon Park, Yura',
        'googleRating': '89%',
        'writtenBy': 'Seon Yeong'
    },

    'rain or shine': {
        'releaseYear': 2017,
        'genre': 'Romance Melodrama',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 70,
        'starring': 'Lee Jun-ho, Won Jin-ah, Lee Ki-woo, Kang Han-na',
        'googleRating': '88%',
        'writtenBy': 'Yoo Bo-ra'
    },

    'the sound of magic': {
        'releaseYear': 2022,
        'genre': 'Musical, Fantasy, Coming-of-age',
        'seasons': 1, 
        'episodes': 6,
        'epRunTimeMinutes': 72,
        'starring': 'Ji Chang-wook, Choi Sung-eun, Hwang In-youp',
        'googleRating': '98%',
        'writtenBy': 'Kim Min-jeong'
    },

    'thirty nine': {
        'releaseYear': 2022,
        'genre': 'Romance',
        'seasons': 1, 
        'episodes': 12,
        'epRunTimeMinutes': 75,
        'starring': 'Son Ye-jin, Jeon Mi-do, Kim Ji-hyun',
        'googleRating': '92%',
        'writtenBy': 'Yoo Yeong-ah'
    },

    'my liberation notes': {
        'releaseYear': 2022,
        'genre': 'Slice-of-life',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Lee Min-ki, Kim Ji-won, Son Seok-koo, Lee El',
        'googleRating': '96%',
        'writtenBy': 'Park Hae-young'
    },

    'touch your heart': {
        'releaseYear': 2019,
        'genre': 'Romantic Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Yoo In-na, Lee Dong-wook',
        'googleRating': '92%',
        'writtenBy': 'Lee Myung-suk, Choi Bo-rim'
    },

    'guardian: the lonely and great god': {
        'releaseYear': 2016,
        'genre': 'Fantasy, Romance, Drama, Comedy',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 75,
        'starring': 'Gong Yoo, Kim Go-eun, Lee Dong-wook, Yoo In-na, Yook Sung-jae',
        'googleRating': '94%',
        'writtenBy': 'Kim Eun-sook'
    },

    'that winter, the blows': {
        'releaseYear': 2013,
        'genre': 'Romance, Melodrama',
        'seasons': 1, 
        'episodes': 16,
        'epRunTimeMinutes': 60,
        'starring': 'Jo In-sung, Song Hye-kyo, Kim Bum',
        'googleRating': '82%',
        'writtenBy': 'Noh Hee-kyung'
    },

    'that winter, the blows': {
        'releaseYear': 2012,
        'genre': 'Romance, Melodrama, Crime, Mystery, Thriller, Suspense, Action',
        'seasons': 1, 
        'episodes': 21,
        'epRunTimeMinutes': 60,
        'starring': 'Yoon Eun-hye, Yoo Seung-ho, Park Yoochun, Kim So-hyun',
        'googleRating': '90%',
        'writtenBy': 'Moon Hee-jung'
    },

    'unknown':{
        'releaseYear': 'unknown',
        'genre': 'unknown',
        'seasons': 'unknown', 
        'episodes': 'unknown',
        'starring': 'unknown',
        'googleRating': 'unknown',
        'writtenBy': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/style.css', (req,res)=>{
    res.sendFile(__dirname + '/style.css')
  })
  
app.get('/index.js', (req,res)=>{
    res.sendFile(__dirname + '/index.js')
  })
  
app.get('/title', (request, response) => {
    response.json(kdrama)
})  
  

app.get('/title/:name', (request, response) => {
    const kdramaTitle = request.params.name.toLowerCase()
    if(kdrama[kdramaTitle]){
        response.json(kdrama[kdramaTitle])
    }else{
        response.json(kdrama['unknown'])
    }
})

// app.get('/api/:name', (request, response) => {
//     console.log(request.params.name)
//     response.json(kdrama)
// })



app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})