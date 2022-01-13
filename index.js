// Code your solution in this file!

const headQ = 42
const feet = 264
function distanceFromHqInBlocks(pickup){
    if(pickup > 42){
        return (pickup - headQ);
    } else if (pickup < 42){
        return (headQ - pickup);
  }
}
    function distanceFromHqInFeet(someValue){
        return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, end){
    if (start < end){
        return (end - start) * 264;
    } else {
        return (start - end) *264;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) < 400) {
        return 0;
    }
    if (
        distanceTravelledInFeet(start, destination) > 400 &&
        distanceTravelledInFeet(start, destination) < 2000
    ) {
        return 2.56;
    }
    if (
        distanceTravelledInFeet(start, destination) > 2000 && 
        distanceTravelledInFeet(start, destination) < 2500
    ) {
        return 25;
    }
    if (distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far";
    }
}