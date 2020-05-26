// console.log("Hello mavis");
var numberOfButtons = document.querySelectorAll('.btn').length;
var testHeading = document.querySelector("h1");



function makeSound(key){
    switch (key){
        case 'a':
            var dog = new Audio('sounds/dog.mp3');
            dog.play();
        break;
        case 's':
            var chicken = new Audio('sounds/chicken.mp3');
            chicken.play();
        break;
        case 'd':
            var cow = new Audio('sounds/cow.mp3');
            cow.play();
        break;
        case 'f':
            var pig = new Audio('sounds/pig.mp3');
            pig.play();
        break;
        case 'g':
            var dog = new Audio('sounds/goat.mp3');
            dog.play();
        break;
        case 'h':
            var sheep = new Audio('sounds/sheep.mp3');
            sheep.play();
        break;
        default: console.log(key);
    }
}

function buttonAnimation(currentButton){
    var currentBtn = document.querySelector("."+currentButton);
    // console.log(currentBtn);
    currentBtn.classList.add("pressed");

    setTimeout(function(){
        currentBtn.classList.remove('pressed');
    });

}

for(var i = 0; i <numberOfButtons; i++){
    document.querySelectorAll('.btn')[i].addEventListener("click",function(){
        var buttonSelected = this.innerHTML;
        //testHeading.innerHTML = buttonSelected;
        makeSound(buttonSelected);
        buttonAnimation(buttonSelected);
    });
}


// console.log(numberOfButtons)



document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});