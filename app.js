
const API_KEY = '6d6b298a738ea278c8c263f2cdf6ac87';

const horario = document.getElementById('hours')
const fetchData = position => {
    const { latitude, longitude } = position.coords;
     
    //fetch(`https://api.openweathermap.org/data/2.5/onecall?units=metric&lang=es&lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${API_KEY}`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lang=es&lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
   
        .then(response => response.json())
    .then(data => setWeatherData(data))
}

const setWeatherData = data => {
    console.log(data);

    const weatherData = {
        
        location: data.name,
        description: data.weather[0].description,
        clouds: data.clouds.all,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        temperature: Math.round(data.main.temp),
        feels_like: Math.round(data.main.feels_like),
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        wind: data.wind.speed,
        date: getDate(),
        hours: getDateHours(),
        
    }
    
    
    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key];

    });
    

    const iconoAnimado = document.getElementById('icono-animado');
    const iconoAnimadoDos = document.getElementById('icono-animado-dos');
    // const div = document.querySelector('div');
    // div.className = '';
   
   
    
    console.log(data.weather[0].main)
    console.log(dianoche)
    

    if ( data.weather[0].main == "Clear" && dianoche > 7 && dianoche < 17) {      
        iconoAnimado.src = 'animated/sol.png'
        iconoAnimadoDos.src = 'animated/sol.png'
        document.body.classList.toggle('clear')
        iconoAnimado.classList.add('svgimg2')
        iconoAnimadoDos.classList.add('svgimg3')

        // div.classList.toggle('clouds')
    } else if (data.weather[0].main == "Clear" && dianoche == 6 ) {
        iconoAnimado.src = 'animated/solama.png'
        iconoAnimadoDos.src = 'animated/solama.png'
        document.body.classList.toggle('amanecer')
    } else if (data.weather[0].main == "Clear" && dianoche == 18 ) {
        iconoAnimado.src = 'animated/solata.png'
        iconoAnimadoDos.src = 'animated/solata.png'
        document.body.classList.toggle('atardecer')
    }else if(data.weather[0].main == "Clear") {
        iconoAnimado.src = 'animated/luna2.png'
        iconoAnimadoDos.src = 'animated/estrellas.png'
        document.body.classList.toggle('clearNight')
        iconoAnimado.classList.add('svgimg4')
        iconoAnimadoDos.classList.add('svgimg4')
        
        

    } else if (data.weather[0].main == "Clouds" && dianoche > 7 && dianoche < 19) {
        iconoAnimado.src = 'animated/sol.png'
        iconoAnimadoDos.src = 'animated/nubesmov.png'
        document.body.classList.toggle('diaNublado')
        iconoAnimado.classList.add('svgimg2')
        iconoAnimadoDos.classList.add('movlat')
        
    } else if (data.weather[0].main == "Clouds") {
        iconoAnimado.src = 'animated/luna2.png'
        iconoAnimadoDos.src = 'animated/nubesmov.png'
        document.body.classList.toggle('diaNublado')
        iconoAnimadoDos.classList.add('movlat')

    } else if (data.weather[0].main == "Thunderstorm") {
        iconoAnimado.src = 'animated/nubetormenta.png'
        iconoAnimadoDos.src = 'animated/rayo.png'
        document.body.classList.toggle('tormenta')
        iconoAnimado.classList.add('movlat')
        iconoAnimadoDos.classList.add('rayo')

    } else if (data.weather[0].main == "Drizzle") {
        iconoAnimado.src = 'animated/nubellovizna.png'
        iconoAnimadoDos.src = 'animated/llovizna.png'
        document.body.classList.toggle('llovizna')
        iconoAnimado.classList.add('movlat')
        iconoAnimadoDos.classList.add('rayo')

    } else if (data.weather[0].main == "Snow") {
        iconoAnimado.src = 'animated/nieve.png'
        iconoAnimadoDos.src = 'animated/nieve.png'
        document.body.classList.toggle('nieve')
        iconoAnimado.classList.add('movlat')
        iconoAnimadoDos.classList.add('movlat')

    } else if (data.weather[0].main == "Rain") {
        iconoAnimado.src = 'animated/nubelluvia.png'
        iconoAnimadoDos.src = 'animated/lluvia.png'
        document.body.classList.toggle('lluvia')
        iconoAnimado.classList.add('movlat')
        iconoAnimadoDos.classList.add('rayo')

    } else if (dianoche > 7 && dianoche < 19){
        iconoAnimado.src = 'animated/sol.png'
        iconoAnimadoDos.src = 'animated/nubesmov.png'
        document.body.classList.toggle('diaNublado')
        iconoAnimado.classList.add('svgimg2')
        iconoAnimadoDos.classList.add('movlat')
    } else {
        iconoAnimado.src = 'animated/luna2.png'
        iconoAnimadoDos.src = 'animated/nubesmov.png'
        document.body.classList.toggle('diaNublado')
        iconoAnimadoDos.classList.add('movlat')
    }
                        
    //  switch (data.weather[0].main, dianoche) {
    //      case dianoche > 8 && dianoche < 18 && "Clear":
    //          iconoAnimado.src = 'animated/sol.png'
    //          document.body.classList.toggle('clear')
    //          break;
    //      case dianoche == 7 && "Clear":
    //          iconoAnimado.src = 'animated/solama.png'
    //    document.body.classList.toggle('amanecer')
    //          break;
    //      case "Thunderstorm":
    //          iconoAnimado.src = 'animated/thunder.svg'
    //          break;
    //      case "Drizzle":
    //          iconoAnimado.src = 'animated/rainy-3.svg'
    //          break;
    //      case "Snow":
    //          iconoAnimado.src = 'animated/snowy-6.svg'
    //          break;
    //      case "Rain":
    //          iconoAnimado.src = 'animated/rainy-7.svg'
    //          break;
    //      case "Rain":
    //          iconoAnimado.src = 'animated/rainy-7.svg'
    //          break;
    //      default:
    //          iconoAnimado.src = 'animated/cloudy.svg'
    //  }

    
}


const getDate = () => {
    let date = new Date();
        dia = date.getDate(),
        mes = date.getMonth() + 1,
        anio = date.getFullYear(),
        diaSemana = date.getDay();
    
    dia = ('0' + dia).slice(-2);
    mes = ('0' + mes).slice(-2);
    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let showSemana = (semana[diaSemana]);
    
    return `${date.getDate()}-${( '0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()} ${showSemana}`;
}

const getDateHours = () => {
    let hours = new Date();
        let timeString = hours.toLocaleTimeString();
    horario.innerHTML = timeString;
    let hora = hours.getHours();
    dianoche = hora
    console.log(hora);
}





const onload = () => {
    navigator.geolocation.getCurrentPosition(fetchData);
}

setInterval(() => {
getDateHours()
}, 1000);
