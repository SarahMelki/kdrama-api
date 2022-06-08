document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const kDramaName = document.querySelector('input').value
    try{
        const response = await fetch(`https://kdrama-hub-api.herokuapp.com/title/${kDramaName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('.releaseYear').innerText = data.releaseYear
        document.querySelector('.genre').innerText = data.genre
        document.querySelector('.seasons').innerText = data.seasons
        document.querySelector('.episodes').innerText = data.episodes
        document.querySelector('.epRunTime').innerText = data.epRunTimeMinutes
        document.querySelector('.starring').innerText = data.starring
        document.querySelector('.rating').innerText = data.googleRating
        document.querySelector('.writtenBy').innerText = data.writtenBy
    }
    catch(error){
        console.log(error)
    }
}