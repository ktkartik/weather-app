const input_city =document.querySelector('.city-input');
const search =document.querySelector('.btn');
const notfound =document.querySelector('.search-city');
const wetherinfo =document.querySelector('.wether-info');
const apikey='cd518b6b94087006dd0cc1f2bba1e128';

search.addEventListener('click' ,()=>{
     
    if(input_city.value.trim() !=  ''){
        console.log(input_city.value);  
        input_city.blur();
        updateweather(input_city);
    }
   
})

input_city.addEventListener('keydown',(event)=>{
   if(event.key =='Enter'&& input_city.value.trim() !=  ''){
       updateweather(input_city);
      console.log(input_city.value);
      input_city.value ='';
      input_city.blur();
   }
    
})
 async function getfetchdata(endpoint,city){
    const apiurl=`https://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&appid=${apikey}&units=metric`;
    const response =await fetch(apiurl);
    return response.json();

 }
 function showdisplaysecction(){

 }
   async function updateweather(city){
   const data = await getfetchdata('weather','city');
   if(data.cod !=200){
    showdisplaysecction(notfound);
    return;
   }
   console.log(data);
   

 }