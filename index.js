//document.getElementById("count-el").innerText = 5

let countEl= document.getElementById("count-el")
 console.log(countEl)

let count = 0;

function increment() {
    count = count + 1
    countEl.innerHTML = count
    console.log(count)
}
increment()





function save() {
    console.log(count)
}
