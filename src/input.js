export default class getInput{
    
    constructor(){
        //create object properties, don't know what they are yet
        this.location = "undefined";
        this.degree = "undefined";
    };
   
    // set location 
    setLocation(){
        const locationValue = document.querySelector("#form-input-location").value;
        
        this.location = locationValue;
    }    
    
    // set degree (celsius or fahrenheit)
    setDegree(){
        // grab whichever radio button is checked, fahrenheit is the default
        let degreeValue = document.querySelector('input[name="degree"]:checked').value;
        if(degreeValue == "Fahrenheit"){
            //convert to imperial or metric for api 
            degreeValue = "imperial";
        }
        else {
            degreeValue = "metric";
        }
        this.degree = degreeValue;
    }
}