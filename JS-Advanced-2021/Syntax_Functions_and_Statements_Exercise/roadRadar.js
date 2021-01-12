// function roadRadar(currentSpeed, area) {
//     currentSpeed = Number(currentSpeed);
    
//     if(area === 'motorway') {
//         let limit = 130;
//         let speed = currentSpeed - limit;
//         if (speed <= 0) {
//             console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`);
//         } else if(speed > 0 && speed < 20) {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - speeding`);
//         } else if(speed >= 20 && speed < 40) {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - excessive speeding`);
//         } else {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - reckless driving`);
//         }
//     } else if(area === 'interstate') {
//         let limit = 90;
//         let speed = currentSpeed - limit;
//         if (speed <= 0) {
//             console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`);
//         } else if(speed > 0 && speed < 20) {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - speeding`);
//         } else if(speed >= 20 && speed < 40) {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - excessive speeding`);
//         } else {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - reckless driving`);
//         }
//     } else if(area === 'city') {
//         let limit = 50;
//         let speed = currentSpeed - limit;
//         if (speed <= 0) {
//             console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`);
//         } else if(speed > 0 && speed < 20) {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - speeding`);
//         } else if(speed >= 20 && speed < 40) {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - excessive speeding`);
//         } else {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - reckless driving`);
//         }
//     } else if(area === 'residential') {
//         let limit = 20;
//         let speed = currentSpeed - limit;
//         if (speed <= 0) {
//             console.log(`Driving ${currentSpeed} km/h in a ${limit} zone`);
//         } else if(speed > 0 && speed < 20) {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - speeding`);
//         } else if(speed >= 20 && speed < 40) {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - excessive speeding`);
//         } else {
//             console.log(`The speed is ${speed} km/h faster than the allowed speed of ${limit} - reckless driving`);
//         }
//     }
// }


function solve(speed, area) {
    speed = Number(speed);
    let allowedSpeeds = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    }
    if (speed > allowedSpeeds[area]) {
        let speeding = speed - allowedSpeeds[area];
        logSpeeding(speeding);
    } else {
        console.log(`Driving ${speed} km/h in a ${allowedSpeeds[area]} zone`);  
    }
 
    function logSpeeding(speeding) {
         if(speeding <= 20) {
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - speeding`);
        } else if(speeding <= 40) {
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - excessive speeding`);
        } else {
            console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${allowedSpeeds[area]} - reckless driving`);
        }
    }
}

solve(200, 'motorway')
