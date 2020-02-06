const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=80ed441ec2a312821ba2173060b2fbbc&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}