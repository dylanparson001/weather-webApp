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
    
    input.setLocation(formWeather);
    input.setDegree(formWeather);

    //passing in the value directly (need to fix get methods)
    weatherAPI();
});

const weatherAPI = async () =>{
    const getWeather = new Weather(input.location);
    // needs to wait for weather to fetched before storing into temp value
    const  temp = await getWeather.getTemp();
    
    document.querySelector(".weather-results").textContent =  temp;
}