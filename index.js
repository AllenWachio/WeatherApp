const apiKey = "51db86e17ccfb520deafb394bb15a636"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weather_Icon = document.querySelector(".weatherIcon")


async function checkWeather(cityName){
    const response = await fetch(apiURL + cityName + `&appid=${apiKey}`)

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }else {
        var data = await response.json()

        console.log(data)

        document.querySelector(".cityName").innerHTML = data.name
        document.querySelector(".temp").innerHTML = data.main.temp + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + "  km/hr"

        if (data.weather[0].main == "Clouds") {
            weather_Icon.src = "images/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weather_Icon.src = "images/clear.png"
        } else if (data.weather[0].main == "Rain") {
            weather_Icon.src = "images/rain.png"
        } else if (data.weather[0].main == "Drizzle") {
            weather_Icon.src = "images/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weather_Icon.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"

    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})

