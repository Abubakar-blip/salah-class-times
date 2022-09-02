import { render } from "@testing-library/react";
import React, { useState } from "react";


export default function Form() {
  const [newCity, setCity] = useState("");
  const [newMonth, setMonth] = useState("");
  const [newYear, setYear] = useState("");
  const [newCountry, setCountry] = useState("United States");

  const [newMethod, setMethod] = useState(2);
  const [newAnnual, setAnnual] = useState(1);

  const [users, setUsers] = useState([])


  
 
  const fetchData = () => {
    fetch(`http://api.aladhan.com/v1/calendarByCity?city=${newCity}&country=${newCountry}&method=${newMethod}&month=${newMonth}&year=${newYear}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }




  function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}




  return (
        <form>
          <input
            value={newCity}
            onChange={(e) => setCity(e.target.value)}
            label="city"
          />

          <input
            value={newCountry}
            onChange={(e) => setCountry(e.target.value)}
            label="country"
          />  


          <input
            value={newMonth}
            onChange={(e) => setMonth(e.target.value)}
            label="month"
          />
       
          <input
            value={newYear}
            onChange={(e) => setYear(e.target.value)}
            label="year"
          />

           

          
          <button onClick = { () => alert('hello')}> 
            Click Me!
          </button>
        </form>
  );
}