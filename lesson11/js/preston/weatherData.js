const d = new Date();

const todayDayNumber = d.getDay();

const theWeekDay = new Array(7);
theWeekDay[0] = "Sunday";
theWeekDay[1] = "Monday";
theWeekDay[2] = "Tuesday";
theWeekDay[3] = "Wednesday";
theWeekDay[4] = "Thursday";
theWeekDay[5] = "Friday";
theWeekDay[6] = "Saturday";

const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5604473&appid=fa87a3e2f8852a06dafa05368ef0fa93&units=imperial";


fetch(apiURL) 
    .then((response) => response.json())
    .then((weatherInfo)  => {
        console.log(weatherInfo);

        /* update the current temperature */
        document.getElementById("townName").textContent = weatherInfo.city.name;


        let myList = weatherInfo.list;

        let forecastDayNumber = todayDayNumber;

        /* update the current information for the weather summary */
        document.getElementById("temp_max").textContent = weatherInfo.list[forecastDayNumber].main.temp_max;
        document.getElementById("temp_min").textContent = weatherInfo.list[forecastDayNumber].main.temp_min;

        document.getElementById("speed").textContent = weatherInfo.list[forecastDayNumber].wind.speed;


        for (i = 0; i<myList.length; i ++ ) {
            var time = myList[i].dt_txt;

            if (time.includes('18:00:00')) {

                forecastDayNumber += 1;
                if (forecastDayNumber === 7) {forecastDayNumber = 0};

                // create the day nameme
                let theDayName = document.createElement("h3");
                theDayName.textContent = weekDay[forecastDayNumber];
                
                let theTemp = document.createElement("p");
                theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0F";

                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconpath = 'https://openweathermap.org/img/w/' + iconcode + '.png';
                let theIcon = document.createElement("img");
                theIcon.src = iconpath;

                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theIcon);
                theDay.appendChild(theTemp);

                // this will automatically add the div to our html page
                document.querySelector(".forecast").appendChild(theDay);
            } // end if 
        } // end for
    } )


