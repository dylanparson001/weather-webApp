Weather App

Specs From the odin project

This project uses the open weather API, the user enters their city, and uses the radio buttons to pick whether they want the weather in Celsius or Fahrenheit.
It is compiled and minified using webpack, each piece of functionality is assigned to their own module. Webpack also imports all of these modules in the correct order. 

This project also uses the SASS preprocessor, very little style is applied as of now. I want to make a more intricate design and implement it. As of now the project is fully functional, and does what I wanted to accomplish. 


Improvements: 
  Form: 
    When the user enters a city that does not exist it returns an error message saying what went wrong, as of right now nothing happens if nothing is received from     the fetch request. My plan for a solution is to send an error when the fetch returns a failure at the time of the fetch request
    
  Style and UI/UX:
    Display an icon depending on chance of rain, clouds
    
    Design a more modern color pallet, font, animations, ease ins 
