const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })

    .then(function(jsonObject) {
        console.table(jsonObject); // temporary checking valid response and data parsing

        // store the data received into an variable
        const towns = jsonObject['towns'];
        console.log(towns);

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                let townCards = document.createElement("section");
                let div = document.createElement("div");
                let h2 = document.createElement("h2");
                let h3 = document.createElement("h3");
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                let p3 = document.createElement("p");
                let image = document.createElement("img");

                h2.textContent = towns[i].name; 
                h3.textContent = towns[i].motto; 
                p1.textContent = "Year Founded: " + towns[i].yearFounded;
                p2.textContent = "Population: " + towns[i].currentPopulation;
                p3.textContent = "Annual Rain Fall: " + towns[i].averageRainfall + " In" ;

                if (towns[i].name == "Preston") {image.setAttribute("src", "images/home/preston.jpg")}
                if (towns[i].name == "Fish Haven") {image.setAttribute("src", "images/home/fishhaven.jpg")}
                if (towns[i].name == "Soda Springs") {image.setAttribute("src", "images/home/sodasprings.jpg")}

                image.setAttribute("alt", towns[i].name + " - " + (i + 1));

                div.appendChild(h2);
                div.appendChild(h3);
                div.appendChild(p1);
                div.appendChild(p2);
                div.appendChild(p3);

                townCards.appendChild(div);
                townCards.appendChild(image);

                document.querySelector("div.town-cards").appendChild(townCards);
            }
            
        }
    })