import "../scss/main.scss";
import Weather from "./api";
import getInput from "./input";

// instatiates input class
const input = new getInput();

// form sent to input methods to get the value from, instead of each method creating their own variable every time theyre called
const formWeather = document.querySelector(".form-input");

// event listener for submitting the form
formWeather.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    input.setLocation();
    input.setDegree();

    weatherAPI();
});

const weatherAPI = async () =>{
    const results =document.querySelector(".weather-results");
    const getWeather = new Weather(input.location, input.degree);
    // needs to wait for weather to fetched before storing into temp value
    const  temp = await getWeather.getTemp();
    
    results.textContent =  `The temperature in ${input.location} is currently ${temp}`;
}