const API_KEY = '7c762bfb6037c182684f38571dbfacc8';

let inpFrm = document.querySelector('.form-inline');
inpFrm.addEventListener('submit', submitFrm);

function submitFrm(e) {
    e.preventDefault()
    formInp = document.querySelector('.form-control').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${formInp}&appid=${API_KEY}&units=metric`;
    axios.get(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            let data = response.data;
            console.log(data)
            localStorage.setItem('cityName', `${formInp}`)
            document.getElementById('cityName').innerHTML = localStorage.getItem('cityName')

            localStorage.setItem('latitude', `Latitude: ${data.coord.lat}`)
            document.querySelector('.lat').innerHTML = localStorage.getItem('latitude')

            localStorage.setItem('longitude', `Longitude: ${data.coord.lon}`)
            document.querySelector('.long').innerHTML = localStorage.getItem('longitude')

            localStorage.setItem('country', `Country: ${data.sys.country}`)
            document.querySelector('.country').innerHTML = localStorage.getItem('country')

            localStorage.setItem('wind', `Wind: ${data.wind.deg} deg`)
            document.querySelector('.wind').innerHTML = localStorage.getItem('wind')

            localStorage.setItem('humidity', `humidity: ${data.main.humidity}`)
            document.querySelector('.humidity').innerHTML = localStorage.getItem('humidity')

            localStorage.setItem('temperature', `Temperature: ${data.main.temp}`)
            document.querySelector('.temp').innerHTML = localStorage.getItem('temperature')

            localStorage.setItem('cloud', `Cloud: ${data.clouds.all}`)
            document.querySelector('.clouds').innerHTML = localStorage.getItem('cloud')

            localStorage.setItem('des', `${data.weather[0].description}`)
            document.querySelector('.des').innerHTML = localStorage.getItem('des')

            localStorage.setItem('des-type', `It is ${data.weather[0].main} in ${formInp}`)
            document.querySelector('.des-cloud').innerHTML = localStorage.getItem('des-type')

        })
        .catch((error) => {
            console.log(error);
            if (error.response.status == 404) {
                document.getElementById("alert").innerHTML = `
        <div class="alert alert-warning w-50 text-center">Error: Location cant find
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
        </div>`
            } else {
                document.getElementById("alert").innerHTML = `
        <div class="alert alert-warning w-50 text-center">${error}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
        </div>`

            }
        })

}

function getPost() {
    document.getElementById('cityName').innerHTML = localStorage.getItem('cityName')
    document.querySelector('.lat').innerHTML = localStorage.getItem('latitude')
    document.querySelector('.country').innerHTML = localStorage.getItem('country')
    document.querySelector('.wind').innerHTML = localStorage.getItem('wind')
    document.querySelector('.humidity').innerHTML = localStorage.getItem('humidity')
    document.querySelector('.clouds').innerHTML = localStorage.getItem('cloud')
    document.querySelector('.temp').innerHTML = localStorage.getItem('temperature')
    document.querySelector('.des').innerHTML = localStorage.getItem('des')
    document.querySelector('.long').innerHTML = localStorage.getItem('longitude')
    document.querySelector('.des-cloud').innerHTML = localStorage.getItem('des-type')

}

getPost();