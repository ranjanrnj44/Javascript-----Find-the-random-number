//onload of screen catch the username and display in header
document.addEventListener("DOMContentLoaded", function() {
    // alert("inside null fun");
    prompt_if_null();
});     
    function prompt_if_null(){

        let my_heading = document.querySelector("h3");
        let new_user_name = prompt("Hi there, Enter your name");

        if(!new_user_name || new_user_name === null){
            alert("Please provide the username and continue");
            prompt_if_null();
        }
        else{
            my_heading.textContent = `Welcome to our game, ${new_user_name}`;
        }
    }

//create all the necessary variables
let random_num = Math.floor(Math.random() * 100 + 1);

const my_previous_guess = document.querySelector(".previous_guess");
const my_guess_right_or_wrong = document.querySelector(".guess_right_or_wrong");
const my_low_or_high = document.querySelector(".low_or_high");

const my_input_field = document.querySelector(".input_field");
const my_ok_button = document.querySelector(".ok_button");

let guess_count = 1;
let reset_button;

//this is the cursor will be in input field area as soon as the page is loaded so user can type without dragging mouse
my_input_field.focus();



    //perform_task starts
    function perform_task(){
        let user_guess = Number(my_input_field.value);
        if(guess_count === 1){
            my_previous_guess.textContent = "previous tries are: ";
        }
        my_previous_guess.textContent+= user_guess + " ";

        if(user_guess === random_num){
            my_guess_right_or_wrong.textContent = `congrats, you won the game`;
            my_guess_right_or_wrong.style.backgroundColor = "green";
            my_low_or_high.textContent = " ";
            start_game();
        }
        else if(guess_count === 10){
            my_guess_right_or_wrong.textContent = `It was really very good try, Go for another try`
            my_guess_right_or_wrong.style.backgroundColor = "orange";
            start_game();
        }
        else{ 
            my_guess_right_or_wrong.textContent = `wrong guess try once again`;
            my_guess_right_or_wrong.style.backgroundColor = "red";

            if(user_guess < random_num){
                my_low_or_high.textContent = `Your value is too low`;
            }  
            else if(user_guess > random_num){
                my_low_or_high.textContent = `Your value is too high`;
            }
        }

        guess_count++;
        my_input_field.value = " ";
        my_input_field.focus();
    }


//button click function
my_ok_button.addEventListener("click", perform_task);



    //start_game function
    function start_game(){
        my_input_field.disabled = true;
        my_ok_button.disabled = true;

        reset_button = document.createElement("button");
        reset_button.textContent = "Reset Game";
        document.body.appendChild(reset_button);
        reset_button.addEventListener("click", restart_game);
    }

    //restart_game function, also having looping statement
    function restart_game(){

        prompt_if_null();
        
        guess_count = 1;

        const paragraph = document.querySelectorAll(".main_container p");
        
        for(let i=0; i<paragraph.length; i++){
            paragraph[i].textContent = " ";
        }

        reset_button.parentNode.removeChild(reset_button);

        my_input_field.disabled = false;
        my_ok_button.disabled = false;
        my_input_field.value = " ";
        my_input_field.focus();

        my_guess_right_or_wrong.style.backgroundColor = "white";
        
        random_num = Math.floor(Math.random() * 100 + 1);
    }