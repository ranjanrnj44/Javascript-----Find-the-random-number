//document DOMContentLoaded
document.addEventListener("DOMContentLoaded" , function(){
    let username = prompt(`Enter your name`);
    let heading = document.querySelector(`h3`);
    heading.textContent = `Welcome ${username}`;
});  
    
    //define all variables
    let ip_field = document.querySelector(`input`);
    let ok_button = document.querySelector(`button`);

    let random_num = Math.floor(Math.random()*100+1);

    let guesses = document.querySelector(`.previous_guess`);
    let prev_guesses = document.querySelector(`.guess_right_or_wrong`);
    let high_low = document.querySelector(`.low_or_high`);

    let reset_button;
    let guess_count = 1;


        //starting the guess
        function guess_start(){
            let my_input = Number(ip_field.value);
            if(guess_count === 1){
                guesses.textContent = `Previous guesses are : `;
            }
            guesses.textContent+= my_input + ` `;
            //configuring attempts
            if(my_input === random_num){
                prev_guesses.textContent = `Congrats, you've won the game`;
                prev_guesses.style.backgroundColor = `green`;
                prev_guesses.style.padding = `10px`;
                prev_guesses.style.boxShadow = '3px 3px 6px silver';
                high_low.textContent = ` `;
                stop_game(); 
            }
            else if(guess_count === 10){
                prev_guesses.textContent = `Your guess was close enough, try once again`;
                prev_guesses.style.backgroundColor = `orange`;
                prev_guesses.style.padding = `10px`;
                prev_guesses.style.boxShadow = '3px 3px 6px black';
                stop_game();
            }
            else{
                prev_guesses.textContent = `Wrong guess, try again`;
                prev_guesses.style.backgroundColor = "red";
                prev_guesses.style.padding = `10px`;
                prev_guesses.style.boxShadow = '3px 3px 6px royalblue';
                if(my_input > random_num){
                    high_low.textContent = `your value is higher than the targeted number `;
                }
                else if(my_input < random_num){
                    high_low.textContent = `your value is Lower than the targeted number `;
                }
            }
            //increasing count , making fields empty and focusing it
            guess_count++;
            ip_field.value = ` `;
            ip_field.focus();
        }
            ok_button.addEventListener(`click` , guess_start);


                //stop game functionality and disabling fields
                function stop_game(){
                    ip_field.disabled = true;
                    ok_button.disabled = true;
                    reset_button = document.createElement(`button`);
                    reset_button.textContent = `RESET GAME`;
                    document.body.appendChild(reset_button);
                    reset_button.addEventListener(`click` , start_game);
                }


                    //start a fresh game
                    function start_game(){
                        guess_count = 1;
                        //removing all paragraphs
                        let para = document.querySelectorAll(`p`);
                        for(let i=0 ; i<para.length ; i++){
                            para[i].textContent = ` `;
                        }
                        //remove reset button
                        reset_button.parentNode.removeChild(reset_button);
                        //start game functionality and enabling fields
                        ip_field.disabled = false;
                        ok_button.disabled = false;
                        ip_field.textContent = ` `;
                        ip_field.focus();
                        prev_guesses.style.backgroundColor = `white`;
                        prev_guesses.style.padding = `0px`;
                        prev_guesses.style.boxShadow = 'none';
                        random_num = Math.floor(Math.random()*100+1);
                    }