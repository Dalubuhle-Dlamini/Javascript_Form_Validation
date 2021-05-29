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
function validate(){
    let password = document.querySelector("#input2").value;
    let retypePassword = document.querySelector("#input3").value;
    let notSimilar = document.createTextNode("Passwords are not similar");
    let weak = document.createTextNode("Must contain A-Z, a-z, number, symbol");
    let p = document.createElement("p");
    let div = document.querySelector(".error");

    if(password != retypePassword){
        div.appendChild(p);
        p.appendChild(notSimilar);
        p.setAttribute('class', 'text');
        setTimeout( function(){
            p.remove();
        }, 5000 )
        return false;

    }else if (!password.match(/[A-Z]/g) || !password.match(/[0-9]/g) || !password.match(/[a-z]/g) || !password.match(/[!@#$%^&*]/g)){
        div.appendChild(p);
        p.appendChild(weak);
        p.setAttribute('class', 'text');
        setTimeout( function(){
            p.remove();
        }, 5000 )
        return false;
    }else{
    alert("Form successfully submitted")
    return true;}
}

//TO VIEW PASSWORD
function hidePassword(){
    let password = document.querySelector("#input2")

    if (password.type === 'password'){
        password.type = "text";
    }else{
        password.type = "password"
    }

}

function hideCheck(){
    let retypePassword = document.querySelector("#input3");

    if(retypePassword.type === 'password'){
        retypePassword.type = "text";
    } else {
        retypePassword.type = "password";
    }
}
