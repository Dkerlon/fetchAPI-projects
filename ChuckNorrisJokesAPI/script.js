const btn = document.querySelector('#load_button');
const p = document.querySelector('#p_jokes');

btn.addEventListener('click',()=>{
    loadJokes()
})

async function loadJokes() {
    try{
        const response = await fetch('http://api.chucknorris.io/jokes/random',{
        method:'GET',
        headers:{
            accept:"application/json"
        }
    })
    const data = await response.json()
    console.log(data)

    p.textContent = data.value
    }catch (error){
        console.log(error)
    }
}