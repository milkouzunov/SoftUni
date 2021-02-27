let forecast = document.getElementById('forecast');
function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather);
}

attachEvents();


async function getWeather() {
    try {
        let input = document.getElementById('location');
        let cityName = input.value;

        const code = await getCityCode(cityName);

        const [currentWeather, upcomingWeather] = await Promise.all([
            getCurrentWeather(code),
            getUpcomingWeather(code)
        ])

        buildHtml(currentWeather, upcomingWeather);
    } catch (err) {
        forecast.style.display = 'block';
        forecast.textContent = 'Error';
    }


}

function buildHtml(currentWeather, upcomingWeather) {
    forecast.style.display = 'block';

    function currentIcon(currentWeat) {
        let cWeather;
        switch (currentWeat) {
            case 'Sunny': cWeather = '☀';
                break;
            case 'Partly sunny': cWeather = '⛅';
                break;
            case 'Overcast': cWeather = '☁'
                break;
            case 'Rain': cWeather = '☂';
                break;
        }
        return cWeather;
    }
    
    document.getElementById('current').innerHTML = '<div class="label">Current conditions</div> '
    let forecastData = createElement('div', { className: 'forecasts' },
        createElement('span', { className: 'condition symbol' }, currentIcon(currentWeather.forecast.condition)),
        createElement('span', { className: 'condition' },
            createElement('span', { className: `forecast-data` }, currentWeather.name),
            createElement('span', { className: `forecast-data` }, `${currentWeather.forecast.low}°/${currentWeather.forecast.high}°`),
            createElement('span', { className: `forecast-data` }, currentWeather.forecast.condition)
        ));
    document.getElementById('current').appendChild(forecastData);
    
    document.getElementById('upcoming').innerHTML = '<div class="label">Three-day forecast</div>';
    let upcomingForecastData = createElement('div', { className: 'forecast-info' },
        createElement('span', { className: 'upcoming' },
            createElement('span', { className: 'symbol' }, currentIcon(upcomingWeather.forecast[0].condition)), createElement('span', { className: 'forecast-data' }, `${upcomingWeather.forecast[0].low}°/${upcomingWeather.forecast[0].high}°`), createElement('span', { className: 'forecast-data' }, upcomingWeather.forecast[0].condition)),
        createElement('span', { className: 'upcoming' },
            createElement('span', { className: 'symbol' }, currentIcon(upcomingWeather.forecast[1].condition)), createElement('span', { className: 'forecast-data' }, `${upcomingWeather.forecast[1].low}°/${upcomingWeather.forecast[1].high}°`), createElement('span', { className: 'forecast-data' }, upcomingWeather.forecast[1].condition)),
        createElement('span', { className: 'upcoming' },
            createElement('span', { className: 'symbol' }, currentIcon(upcomingWeather.forecast[2].condition)), createElement('span', { className: 'forecast-data' }, `${upcomingWeather.forecast[2].low}°/${upcomingWeather.forecast[2].high}°`), createElement('span', { className: 'forecast-data' }, upcomingWeather.forecast[2].condition))
    )

    document.getElementById('upcoming').appendChild(upcomingForecastData)
}

async function getCityCode(cityName) {
    let url = 'http://localhost:3030/jsonstore/forecaster/locations';
    let response = await fetch(url);
    let data = await response.json();
    return data.find(c => c.name.toLowerCase() == cityName.toLowerCase()).code;
}


async function getCurrentWeather(cityCode) {
    let url = 'http://localhost:3030/jsonstore/forecaster/today/' + cityCode;
    let response = await fetch(url);
    let data = await response.json();

    return data;
}

async function getUpcomingWeather(cityCode) {
    let url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + cityCode;
    let response = await fetch(url);
    let data = await response.json();

    return data;
}

function createElement(type, attributes = {}, ...content) {
    let result = document.createElement(type);

    for (const attr in attributes) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2), attributes[attr]);
        } else {
            result[attr] = attributes[attr];
        }
    }

    content.forEach(e => {
        if (typeof e == 'string') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });
    return result;
}

