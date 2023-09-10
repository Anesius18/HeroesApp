import {heroes} from '../data/heroes'

export const getHeroesByPublisher = (publisher) => {


if (!['DC Comics', 'Marvel Comics'].includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`)
}

return heroes.filter(heroe => heroe.publisher === publisher)
}