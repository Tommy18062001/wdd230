const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=fa87a3e2f8852a06dafa05368ef0fa93";

fetch (apiURL) 
    .then((response) => response.json())
    .then((jsObject)  => {
        console.log(jsObject);

        /* update the current temperature */
        document.getElementById("current-temp").innerHTML = jsObject.main.temp;

        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    } )