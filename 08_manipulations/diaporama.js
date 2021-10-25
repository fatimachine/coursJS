// Page JS diaporama
//diaporama 2
// console.log(document.getElementById('btnDiapo2'));
//une fonction anonyme
document.getElementById('btnDiapo2').addEventListener('click',function() {
    document.getElementById('imgDiapo2').src = 'img/piscine2.jpg';
    document.getElementById('imgDiapo2').alt = 'une piscine aux Maldives';
})

//diaporama 3
//on va faire une fonction tourneImages()

function tourneImages() {
    var getImage3 = document.getElementById('imgDiapo3').getAttribute('src');
    console.log(getImage3);// ce console.log ne s'affiche qu'au click
    switch(getImage3) {
        case 'img/plage1.jpg':
            document.getElementById('imgDiapo3').src = 'img/plage2.jpg'
            document.getElementById('imgDiapo3').alt = 'une plage aux Bahamas';
            break;
    }
    switch(getImage3) {
        case 'img/plage2.jpg':
            document.getElementById('imgDiapo3').src = 'img/plage3.jpg'
            document.getElementById('imgDiapo3').alt = 'une plage aux Seychelles';
            break;
    }
    switch(getImage3) {
        case 'img/plage3.jpg':
            document.getElementById('imgDiapo3').src = 'img/plage4.jpg'
            document.getElementById('imgDiapo3').alt = 'une piscine aux Maldives';
            break;
    }
    switch(getImage3) {
        case 'img/plage4.jpg':
            document.getElementById('imgDiapo3').src = 'img/plage1.jpg'
            document.getElementById('imgDiapo3').alt = 'une plage en Corse';
            break;
    }
}//fin fonction