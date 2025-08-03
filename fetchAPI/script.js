const getAllProducts = async () => {
    try{
        const response = await fetch('https://dummyjson.com/products/',{
        method:'GET'
        });
        const data = await response.json();
        console.log(data);
    }catch (error){
        console.log(error);
    }
        
}

getAllProducts()

























































/*

//MÉTODO POST

fetch('https://dummyjson.com/products/add', {
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify({
        description: 'Iphone 19',
        price:'1000',
        rating:'9/10'
    })
})
.then((reponse) => {
    return reponse.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {

})

//MÉTODO PUT
fetch('https://dummyjson.com/products/1', {
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify({
        title:'Iphone 19',
        description: 'Changed to Iphone 19',
        price:'1000',
        rating:'9/10'
    })
})
.then((reponse) => {
    return reponse.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {

})
//MÉTODO DELETE
fetch('https://dummyjson.com/products/2', {
    method:'DELETE',
})
.then((reponse) => {
    return reponse.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log(error)
})
//MÉTODO GET
fetch('https://dummyjson.com/products/2', {
    method:'GET',
})
.then((reponse) => {
    return reponse.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {

})

*/ 