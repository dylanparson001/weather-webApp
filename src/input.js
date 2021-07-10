export default class getInput{
    
    constructor(){
        this.location = "undefined";
        this.degree = "undefined";
    };
   
    // set location 
    setLocation(weatherForm){
        const locationValue = document.querySelector("#form-input-location").value;
        
        this.location = locationValue;
    }    
    
    // set degree (celsius or fahrenheit)
    setDegree(weatherForm){
        // grab whichever radio button is checked, fahrenheit is the default
        const degreeValue = document.querySelector('input[name="degree"]:checked').value;
        
        this.degree = degreeValue;
    }

    // for some reason not working with api call, not returning value
    /*
    getLocation(){
        return this.location;
    }
    // get degree
    getDegree(){
        return this.degree;
    }
    */
    
    // return object with location and degree properties
}