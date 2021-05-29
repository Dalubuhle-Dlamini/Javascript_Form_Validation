//THIS WILL CHANGE BORDER COLOR WHEN IT IS FOCUSED ON


setInterval( () => {
    //VARIABLES
    let active = document.activeElement;
    let div = document.querySelector("#div"); //DIV
    let input = document.querySelector("#input"); //INPUT

    //IF STATEMENT
    if(input === active){
        div.style.border = "solid 1px red";
        div.style.transition = "2s"

    }else{div.style.border = "solid 1px white"}
}, 500)

setInterval( () => {
    let active = document.activeElement;
    let input1 = document.querySelector("#input1");
    let div1 =document.querySelector("#div1")

    if(input1 === active){
        div1.style.border = "solid 1px red";
        div1.style.transition = "2s"

    }else{div1.style.border = "solid 1px white"}
}, 500)

setInterval( () => {
    let active = document.activeElement;
    let input2 = document.querySelector("#input2");
    let div2 =document.querySelector("#div2")

    if(input2 === active){
        div2.style.border = "solid 1px red";
        div2.style.transition = "2s"

    }else{div2.style.border = "solid 1px white"}
}, 500)

setInterval( () => {
    let active = document.activeElement;
    let input3 = document.querySelector("#input3");
    let div3 =document.querySelector("#div3")

    if(input3 === active){
        div3.style.border = "solid 1px red";
        div3.style.transition = "2s"

    }else{div3.style.border = "solid 1px white"}
}, 500)
/*here i made the code long because if i made an else if statement the
result/output did not give me what i wanted if you have a solution to this 
problem please let me know*/


//PASSWORD VALIDATION
