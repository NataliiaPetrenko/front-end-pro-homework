const minEntrance = 1;
const maxEntrance = 10;
const minFloor = 1;
const maxFloor = 25;
const minApartment = 1;
const maxApartment = 20;
const minGeneralApartment = 1;
const maxGeneralApartment = 5000;

do {
    do {
        var entrance = Number(prompt(`Kindly how many entrances you have: (where min: ${minEntrance}, max: ${maxEntrance})`));

    } while (entrance < minEntrance || entrance > maxEntrance);

    do {
        var floor = Number(prompt(`Kindly enter how many floors your house has: (where min: ${minFloor}, max: ${maxFloor})`));

    } while (floor < minFloor || floor > maxFloor);

    do {
        var apartments = Number(prompt(`Kindly specify how any apartments you have per floor: (where min: ${minApartment}, max: ${maxApartment})`));

    } while (apartments < minApartment || apartments > maxApartment);

    do {

        var userApartment = Number(prompt(`Kindly enter the number of your apartments: (where min: ${minGeneralApartment}, max: ${maxGeneralApartment})`));

    } while (userApartment < minGeneralApartment || userApartment > maxGeneralApartment);

    console.log(userCalc());

function userCalc () {
    for (var userEntrance = 1; userEntrance <= entrance; userEntrance++ ){
        if (userApartment <= floor * apartments * entrance) {
            console.log ('Your entrance is: ' + userEntrance);
            return;
        }
    } 
}

} while (confirm(("Do you want to repeat this program?")));

