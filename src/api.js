
const API_URL = `https://api.themoviedb.org/3/`;
const API_KEY = 'd73711f75d852eb912c0d4955eb96e08';
const API_LANG = 'language=ru-RU';

const Api = {

    getMovieDataList: (page) => {
        console.log("2",page)
        return fetch(`${API_URL}movie/popular?api_key=${API_KEY}&${API_LANG}&page=${page}`)
            .then(data => data.json())
            .then(data => { return data })
    },

    getSeriesDataList: (page) => {
        return fetch(`${API_URL}tv/popular?api_key=${API_KEY}&${API_LANG}&page=${page}`)
            .then(data => data.json())
            .then( data => { return data })
    },

    // getSingleDataMovie: (id) => {
    //     return fetch(`https://api.themoviedb.org/3/movie/284054?api_key=d73711f75d852eb912c0d4955eb96e08&language=ru-RU`)
    //         .then(data => data.json()) 
    //         .then(data => { return data})
    // },

    // getSingleDataSeries: (id) => {
    //     return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=d73711f75d852eb912c0d4955eb96e08&language=ru-RU`)
    //         .then(data => data.json()) 
    //         .then(data => { return data})
    // }
}
export default Api;
