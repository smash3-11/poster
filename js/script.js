import { movies } from "./db.js";
console.log(movies);
let ul = document.querySelector('.promo__interactive-list')
let promo_bg = document.querySelector('.promo__bg')
let promo_genre = document.querySelector('.promo__genre')
let promo_title = document.querySelector('.promo__title')
let promo_descr = document.querySelector('.promo__descr')
let span_imbd = document.querySelector('.imbd')
let span_rating = document.querySelector('.rating')



movies.sort((a, b) => {
    let titleA = a.Title.toLowerCase();
    let titleB = b.Title.toLowerCase();

    if (titleA < titleB) {
        return -1
    } else if (titleA > titleB) {
        return 1
    } else {
        return 0
    }
})

if (movies.length > 0) {
    promo_bg.style.backgroundImage = `url('${movies[0].Poster}')`
    promo_genre.innerHTML = movies[0].Genre
    promo_title.innerHTML = movies[0].Title
    promo_descr.innerHTML = movies[0].Plot
    span_imbd.innerHTML = `IMDb: ${movies[0].imdbRating}`
    span_rating.innerHTML = `NETFLIX: ${movies[0].imdbRating}`
}

for (let item of movies) {


    let li = document.createElement('li')
    li.classList.add('promo__interactive-item')

    li.innerHTML = item.Title

    let del_li = document.createElement('div')
    del_li.classList.add('delete')

    li.append(del_li)
    ul.append(li)

    li.onclick = () => {
        promo_bg.style.backgroundImage = `url('${item.Poster}')`
        promo_genre.innerHTML = item.Genre
        promo_title.innerHTML = item.Title
        promo_descr.innerHTML = item.Plot
        span_imbd.innerHTML = `IMDb: ${item.imdbRating}`
        span_rating.innerHTML = `NETFLIX: ${item.imdbRating}`

    }

    del_li.onclick = () => {
        let del = movies.map(movie => movie.Title).indexOf(item.Title)
        li.remove()
    }

    let form_add = document.querySelector('.add')

    form_add.addEventListener('Добавить', (event) => {
        event.preventDefault()
    })

    function hideTitle() {
        promo_descr.style.overflow = 'hidden';
        promo_descr.style.textOverflow = 'ellipsis';
        promo_descr.style.display = '-webkit-box';
        promo_descr.style.webkitBoxOrient = 'vertical';
        promo_descr.style.webkitLineClamp = '3';
    }
    hideTitle()



}





