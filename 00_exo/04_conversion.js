// Page Js pour 04/conversion

// alert('coucou');


// console.log(celsius);


// let degre = prompt('Rentrez une température en Celsius :');
//         console.log(degre);

//         let celsius = 33.8;
//         let fahrenheit = degre * 33.8;


//         var select = document.getElementsByTagName('li');
//         console.log(select, select.length);

//         select[0].innerHTML = '1 degré Celsius = 33.8 Fahrenheit';
//         select[1].innerHTML = celsius +' degrés Celsius = '+fahrenheit+ ' Fahrenheit';
//         // select[2].innerHTML = temperature;
//         select[3].innerHTML = '1 degré Fahrenheit = -17.22222222222 Celsius'
//         select[4].innerHTML = '68 degrés Fahrenheit = 20 Celsius'

let temperature = prompt('Rentrez une température en Celsius :');
        console.log(temperature);
        
        let fahrenheit = (temperature* 9/5) + 32;
        
        var select = document.getElementsByTagName('li');
        console.log(select, select.length);
        select[0].innerHTML = '1 degré Celsius = 33.8 Fahrenheit';
        select[1].innerHTML = temperature +' degrés Celsius = '+fahrenheit+ ' Fahrenheit';
        // select[2].innerHTML = 'temperature est '+temperature;
        select[3].innerHTML = '1 degré Fahrenheit = -17.22222222222 Celsius';
        select[4].innerHTML = '68 degrés Fahrenheit = 20 Celsius';