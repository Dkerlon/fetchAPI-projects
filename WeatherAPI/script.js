const date = document.querySelector('#date');
const titleCity = document.querySelector('#titleCity');
const clima = document.querySelector('#clima');
const temperatura = document.querySelector('#temperatura');
const highs = document.querySelector('#highs');
const lows = document.querySelector('#lows');
const linputCityws = document.querySelector('#inputCity');
const lupa = document.querySelector('#lupa');
const apiKey = 'XkOTfVldKi0vnstx'
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];


let dateObj = new Date();
let day = dateObj.getUTCDate();
let year = dateObj.getFullYear();
let month = months[dateObj.getMonth()];

date.innerHTML=`${month} ${day}, ${year}`;


const fetchApi = async () => {
    try{
       const response = await fetch(`https://my.meteoblue.com/packages/basic-1h_basic-day?lat=-22.8808&lon=-43.1043&apikey=${apiKey}`,{
            method:'GET',
            headers:{
                
            }
        })
        const data = await response.json()
        console.log(data)
    }catch (error){
        console.log(error)
    }
}

fetchApi()