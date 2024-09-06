async function weath(){
    let apikey='aa5fd7a651184af09fa75447240309';
    let city=document.getElementById('te').value;
    let result=document.getElementById('info');

    if(city=== ''){
        result.innerHTML="<p style='font-size:20px;'>Please Enter City Name</p>";
        return;
    }
    const url = `
    https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`;

     try {
const response = await fetch(url);
const data = await response.json();

if (response.ok) {
    result.innerHTML = `
        <h1>Weather of ${data.location.name}</h1>
        <p id="la"><strong>Last Updated:</strong> ${data.current.last_updated}</p>
<p id='temp'> ${data.current.temp_c}°C </p>

<img src="http:${data.current.condition.icon}" alt="${data.current.condition.text}">
<div id="last">
<div id="hh">
<p ><strong><i class="fa-solid fa-temperature-empty"></i> Humidity<br></strong> ${data.current.humidity}%</p>
</div>
<div id="cc">
<p ><strong><i class="fa-solid fa-droplet"></i> Condition<br></strong> ${data.current.condition.text}</p>
</div>
<div>
 `;

} else {
    result.innerHTML = '<p>City not found. Please try again.</p>';
}
} catch (error) {
result.innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
}
    

}

function displayCurrentDate() {
const now = new Date();
const formattedDate = now.toLocaleDateString('en-GB', { 
weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric' 
});

// Select the <p> element with the id "formatted-date"
const dateElement = document.getElementById('date');

// Set the text content of the <p> element to the formatted date
dateElement.textContent = formattedDate;
}

// Display the current date when the page loads
document.addEventListener('DOMContentLoaded', displayCurrentDate);	