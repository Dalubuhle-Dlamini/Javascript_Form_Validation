//THIS WILL CHANGE BORDER COLOR WHEN IT IS FOCUSED ON
setInterval( () => {
    //VARIABLES
    let div1 =document.querySelector("#div1") //DIV1
    let div2 =document.querySelector("#div2") //DIV2
    let div3 =document.querySelector("#div3") //DIV3
    let div = document.querySelector("#div"); //DIV
    let input = document.querySelector("#input"); //INPUT
    let input1 = document.querySelector("#input1"); //INPUT1
    let input2 = document.querySelector("#input2"); //INPUT2
    let input3 = document.querySelector("#input3"); //INPUT3
    let active = document.activeElement;

    //IF STATEMENT
    if(input === active){
        div.style.border = "solid 1px red";
        div.style.transition = "2s"

    }else if(input1 === active){
        div1.style.border = "solid 1px red";
        div1.style.transition = "2s"

    }else if(input2 === active){
        div2.style.border = "solid 1px red";
        div2.style.transition = "2s"

    }else if(input3 === active){
        div3.style.border = "solid 1px red";
        div3.style.transition = "2s"

    }else if((input && input1 && input2 && input3) !== active){
        div.style.border = "solid 1px white"

    }
}, 500)

//PASSWORD VALIDATION
