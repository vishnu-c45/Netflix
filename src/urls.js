import {Api_key} from './cosnstants/constants'

export const trend=`https://api.themoviedb.org/3/trending/all/day?api_key=6c9f7a054dee6a65249ec871cd298ee3
`

export const Action=`https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`