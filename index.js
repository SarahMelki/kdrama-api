document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const kDramaName = document.querySelector('input').value
    try{
        const response = await fetch(`https://kdrama-hub-api.herokuapp.com/title/${kDramaName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('h2').innerText = data
    }catch(error){
        console.log(error)
    }
}