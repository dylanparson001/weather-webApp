import "../scss/main.scss";
import Weather from "./api";
import getInput from "./input";
import createCard from "./cardDisplay";

// instantiate input class

// form sent to input methods to get the value from, instead of each method creating their own variable every time they're called
const formWeather = document.querySelector(".form-input");

// event listener for submitting the form
formWeather.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = new getInput();
  input.setLocation();
  input.setDegree();

  weatherAPI(input);
});

const weatherAPI = async (input) => {
  // call weather api class
  const getWeather = new Weather(input.location, input.degree);

  // create local scope for location
  const location = input.location;

  // array to store all the data that will be put into the card display
  let data = [];

  // receive data from weather api class
  data = await getWeather.getInfo();

  // pass data to display
  createCard(location, data);
};
