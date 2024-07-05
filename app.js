/*//now we explored date object

let today = new Date()
console.log(today)

let birthday = new Date("nov 14, 2003")
console.log(birthday)
let birthday2 = new Date("11 14, 2003")
console.log(birthday2)
let birthday3 = new Date("11 14, 2003")
console.log(birthday3.getMonth())

// now we observe how the date object work when we give our date to it.

let month = ["jan 1", "feb 2", "march 3", "april 4", "may 5", "june 6", "july 7", "aug 8", "sep 9", "oct 10", "nov 11", "dec 12"]

console.log(month)
console.log(`nov 11 : ${month.indexOf("nov 11")}`)*/

// age calculator Assignment. // I have also built calculator with the help of dateInput but when I understand the ISO string .max, and "T"[0] then I include this method.

/*accessing html elements */
let dateInp = document.querySelector(".dateInp")
let btn = document.querySelector(".calculateBtn")
let ageContainer = document.querySelector(".ageContainer")
let userAgeDiv = document.querySelector(".userAgeDiv")

/*create new date object */
let today = new Date()
let todayMiliSec = today.getTime()

/*calculate btn */
btn.addEventListener("click", () => {
    let dateStr = dateInp.value
    if(dateStr.length === 0) {
        alert("Please Enter Your Date of birth!")
    }

    else{
        let userDateInp = dateStr

        let userDOB = new Date(userDateInp)
        let userDOBMiliSec = userDOB.getTime()

        let finalMiliSec = todayMiliSec - userDOBMiliSec
     
        let formula = finalMiliSec / (1000 * 60 * 60 * 24 * 365)
    
        let userAge = Math.floor(formula)

        if(userAge > 0) {
            ageContainer.classList.remove("hide")
            ageContainer.classList.add("active")
            userAgeDiv.innerText = userAge
        }

        else{
            alert("invalid age")            
        }
    }
})