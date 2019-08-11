$(document).ready(function(){

    var history = [];
    var clearflag = false;
    var lastoperator = "";

    $(".keypad-num").on("click", function(){
        //If a result is displayed and we begin typing, clear the result and continue.
        if(!clearflag){
            document.getElementById("calc-output").innerHTML = $(this).val();
            clearflag = true;
        }
        else{
            document.getElementById("calc-output").innerHTML += $(this).val();
        }
    });

    $(".keypad-div").on("click", function(){

        //Get the last input number
        var num = document.getElementById("calc-output").innerHTML;

        //Add number to array
        history.push(num);

        //Display input with operator
        document.getElementById("calc-input").innerHTML += num.toString() + " " + $(this).val() + " ";

        ClearInput()

        //Set last used operator value to this
        lastoperator = $(this).val();

        //If our array length is above 1, do quick maths
        if(history.length > 1){
            divide(history[history.length - 2], history[history.length - 1]);
        }

    });

    $(".keypad-mul").on("click", function(){

        //Get the last input number
        var num = document.getElementById("calc-output").innerHTML;

        //Add number to array
        history.push(num);

        //Display input with operator
        document.getElementById("calc-input").innerHTML += num.toString() + " " + $(this).val() + " ";

        ClearInput()

        //Set last used operator value to this
        lastoperator = $(this).val();

        //If our array length is above 1, do quick maths
        if(history.length > 1){
            multiply(history[history.length - 2], history[history.length - 1]);
        }

    });

    $(".keypad-min").on("click", function(){

        //Get the last input number
        var num = document.getElementById("calc-output").innerHTML;

        //Add number to array
        history.push(num);

        //Display input with operator
        document.getElementById("calc-input").innerHTML += num.toString() + " " + $(this).val() + " ";

        ClearInput()

        //Set last used operator value to this
        lastoperator = $(this).val();

        //If our array length is above 1, do quick maths
        if(history.length > 1){
            minus(history[history.length - 2], history[history.length - 1]);
        }

    });

    $(".keypad-pls").on("click", function(){

        //Get the last input number
        var num = document.getElementById("calc-output").innerHTML;

        //Add number to array
        history.push(num);

        //Display input with operator
        document.getElementById("calc-input").innerHTML += num.toString() + " " + $(this).val() + " ";

        ClearInput()

        //Set last used operator value to this
        lastoperator = $(this).val();

        //If our array length is above 1, do quick maths
        if(history.length > 1){
            addition(history[history.length - 2], history[history.length - 1]);
        }

    });

    $(".keypad-eql").on("click", function(){

        //Get the last input number
        var num = document.getElementById("calc-output").innerHTML;

        //Add number to array
        history.push(num);

        //Display input with operator
        document.getElementById("calc-input").innerHTML += num.toString();

        ClearInput()

        //If our array length is above 1, do quick maths
        if(history.length > 1){
            equals(history[history.length - 2], history[history.length - 1]);
        }

    });

    $("#clear").on("click", function(){

        document.getElementById("calc-output").innerHTML = "";
        document.getElementById("calc-input").innerHTML = "";
        history = [];

    });

    $("#clear-current").on("click", function(){

        document.getElementById("calc-output").innerHTML = "";
    });

    function multiply(num1, num2){

        //quick maths
        var result = num1 * num2;

        //display result
        document.getElementById("calc-output").innerHTML = result.toString();

        //add result to array
        history.push(result);

        //set clear flag to false for future clearing
        clearflag = false;
    }

    function divide(num1, num2){

        //quick maths
        var result = num1 / num2;

        //display result
        document.getElementById("calc-output").innerHTML = result.toString();

        //add result to array
        history.push(result);

        //set clear flag to false for future clearing
        clearflag = false;
    }

    function minus(num1, num2){

        //quick maths
        var result = num1 - num2;

        //display result
        document.getElementById("calc-output").innerHTML = result.toString();

        //add result to array
        history.push(result);

        //set clear flag to false for future clearing
        clearflag = false;
    }

    function addition(num1, num2){
        alert("test");
        //quick maths
        var result = +num1 + +num2;

        alert(result);

        //display result
        document.getElementById("calc-output").innerHTML = result.toString();

        //add result to array
        history.push(result);

        //set clear flag to false for future clearing
        clearflag = false;
    }

    function equals(num1, num2){

        //quick maths
        var result = "";

        if(lastoperator == "/"){
            result = num1 / num2
        }
        else if(lastoperator == "*"){
            result = num1 * num2
        }
        else if(lastoperator == "-"){
            result = num1 - num2
        }
        else if(lastoperator == "+"){
            result = +num1 + +num2;
        }

        //display result
        document.getElementById("calc-output").innerHTML = result.toString();

        //add result to array
        history.push(result);

        //set clear flag to false for future clearing
        clearflag = false;

        document.getElementById("calc-input").innerHTML = "";
        history = [];
    }

    function ClearInput(){
        if(document.getElementById("calc-output").innerHTML != "")
        document.getElementById("calc-output").innerHTML = "";
    }

});