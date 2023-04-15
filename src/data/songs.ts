import { Song } from '../models/song'

import song0 from '../public/songs/Michel Berger - Les Princes Des Villes (1983).mp3'
import song1 from '../public/songs/X2Download.app - Alors regarde (128 kbps).mp3'
import song2 from '../public/songs/X2Download.app - Amsterdam (320 kbps).mp3'
import song3 from '../public/songs/X2Download.app - Daniel Balavoine - Tous les cris les S.O.S. (Audio Officiel) (128 kbps).mp3'
import song4 from '../public/songs/X2Download.app - France Gall - Poupée de cire, poupée de son (1965) Stéréo HQ (320 kbps).mp3'
import song5 from "../public/songs/X2Download.app - Michel Delpech - Quand j'étais chanteur (Audio Officiel) (128 kbps).mp3"
import song6 from '../public/songs/X2Download.app - Michel Sardou - Afrique Adieu (Audio Officiel) (128 kbps).mp3'
import song7 from '../public/songs/X2Download.app - Sheila. _Comme les Rois mages_ (128 kbps).mp3'

export const songs: Song[] = [
    {
        id: 0,
        link: song0,
        artist: { name: 'Michel Berger' },
        title: 'Les princes des villes',
    },
    {
        id: 1,
        link: song1,
        artist: { name: 'Patrick Bruel' },
        title: 'Alors regarde',
    },
    {
        id: 2,
        link: song2,
        artist: { name: 'Jacques Brel' },
        title: 'Amsterdam',
    },
    {
        id: 3,
        link: song3,
        artist: { name: 'Daniel Balavoine' },
        title: 'Tous les cris les SOS',
    },
    {
        id: 4,
        link: song4,
        artist: { name: 'France Gall' },
        title: 'Poupée de cire, poupée de son',
    },
    {
        id: 5,
        link: song5,
        artist: { name: 'Michel Delpech' },
        title: "Quand j'étais chanteur",
    },
    {
        id: 6,
        link: song6,
        artist: { name: 'Michel Sardou' },
        title: 'Afrique adieu',
    },
    {
        id: 7,
        link: song7,
        artist: { name: 'Sheila' },
        title: 'Les rois mages',
    },
]
