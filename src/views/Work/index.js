
console.log("success")
const newGIF = (search) => {
    const img = document.querySelector('img')
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=ZeZ0GJgQMw7pQJhs5XYbj1X7C1o50epK&s=' + search, {mode: 'cors'})
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            img.src = response.data.images.original.url
        })
}
document.addEventListener("DOMContentLoaded", newGIF("penguin"));

const refresh = () => {
    let search = prompt("generate new gif of: ")
    newGIF(search)
}

const resetButton = document.querySelector('#refresh')
resetButton.addEventListener("click", refresh)   