window.addEventListener('load', ()=> {
    let long;
    let lat;
    let api_key;
    let temperature_degree = document.querySelector('.temperature_degree');
    let temperature_description = document.querySelector('.temperature_description');
    let location_timezone = document.querySelector('.location_timezone');
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            
            api_key = '********************';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}`;
            
            fetch(api)
                .then(response =>{
                    return response.json();
                })
                .then(data =>{
                    console.log(data);
                    const {temp} = data.main;
                    const {description} = data.weather[0];
                    const {name} = data;
                    const {icon} = data.weather[0];
                    const {id} = data.weather[0];

                    if (id > 800 && id < 805 || id >= 500 && id <= 531) {
                        document.getElementsByTagName('body') [0].className = 'clouds';
                    }
                    
                    document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                    temperature_description.textContent = description;
                    temperature_degree.textContent = `${temp - 273.15}°`;
                    location_timezone.textContent = name;
                });
            
        }); 

        
    }
    else{
        h1.textContent = "You need to enable location to use this site..."
    }
});