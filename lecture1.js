//const firstName = "Tedy";
//console.log(firstName + ' ' +"Aemiro");
//console.log(firstName + ' ' +"Aemiro");

/*const arr = [
    "tedy",
    3,
    () => {
        console.log("My age is: " + 9)
    }
]

for(let i = 0, len = arr.length; i < len; i++)
{
    if(i < len-1)
    {
        console.log(arr[i])
    }
    else{
        arr[i]()
    }
    
}*/


/*let arr = []

for(let i = 0; i < 5; i++){
    arr.push(i)
}
// arr [0,1,2,3,4]

arr = arr.reduce((num,nume) => {
    if(num == 0){
         num + nume
    }
    else{
        num * nume
    }
}
)

console.log(arr)*/



/*const grab = {
    name: "tedy",
    greet: function() {
        console.log("Your name is: ", this.name)
    }
}

grab.greet()

const dontGrab = {
    name: "Sarah",
}


dontGrab.greet = grab.greet

dontGrab.greet()*/


/*const grab = {
    name: "tedy",
    greet: function() {
        console.log("Your name is: ", this.name)
    }
}

grab.greet()

const grabber = grab.greet.bind(grab)

grabber()*/

let checkbox = document.querySelector('.todo-checkbox')
let counter = document.getElementById("unchecked-count")
let you = 'me'

checkbox.onclick = () => {
    if(checkbox.checked == false){
        counter.innerHTML = 1
    }
    else{
        counter.innerHTML = 10;
    }
    
}
