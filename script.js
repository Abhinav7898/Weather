const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "44f6453687msh6c8faf3ef29bea7p1d8cfdjsnd86976d091b3",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
var id = document.getElementById("lblmsg");
const getWeather = (city)=>{
fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
  .then((response) => response.json())
  .then((response) => {
    debugger
    if(!response.error){
      document.getElementById('close1').style.visibility = "hidden";
    id.innerHTML = "";
    temp.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    humidity.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    sunrise.innerHTML = response.sunrise;
    sunset.innerHTML = response.sunset;
    cityName.innerHTML = city;
    Updatefunction(response,city);
    }
    else{
      debugger
      document.getElementById('close1').style.visibility = "visible";
      
    }
  })
  .catch((err) => 
  {
    document.getElementById('close1').style.visibility = "visible";
    console.error(err)});
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})
getWeather("Delhi")


// Update Recent Search

function Updatefunction(response,City){
  var count1 = document.getElementById('count').value;
  count1 = parseInt(count1);
  document.getElementById("r"+count1).innerHTML = City;
    var c1 = count1;
    for(let i=1;i<10;i++){
      let tableId = "r"+c1+""+i;
      if(i==1){
        document.getElementById(tableId).innerHTML = response.temp;
      }
      else if(i==2){
        document.getElementById(tableId).innerHTML = response.min_temp;
      }
      else if(i==3){
        document.getElementById(tableId).innerHTML = response.max_temp;
      }
      else if(i==4){
        document.getElementById(tableId).innerHTML = response.wind_speed;
      }
      else if(i==5){
        document.getElementById(tableId).innerHTML = response.wind_degrees;
      }
      else if(i==6){
        document.getElementById(tableId).innerHTML = response.feels_like;
      }
      else if(i==7){
        document.getElementById(tableId).innerHTML = response.sunrise;
      }
      else if(i==8){
        document.getElementById(tableId).innerHTML = response.sunset;
      }
      else if(i==9){
        document.getElementById(tableId).innerHTML = response.humidity;
      }
    }
    var c2 = (count1+1);
    debugger
    if(c2==6){
      document.getElementById('count').value = 1;
    }
    else{
    document.getElementById('count').value = c2;
    }
  console.log(c2+" "+document.getElementById('count').value)
}

function myFunction(){
  debugger
  document.getElementById('close1').style.visibility = "hidden";
}