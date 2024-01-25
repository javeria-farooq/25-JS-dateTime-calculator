// let date = new Date()
// let cnvrt = date.toString()
// let month = cnvrt.slice(4, 7)
// let day = cnvrt.slice(0, 4)
// let dateCopy = date.slice(0, 4)
// document.write(dateCopy)
// document.write(typeof date)
// document.write(new Date())

// document.write(date.getDate() + '<br>')

// month k lye cnvrt krna prta h
// document.write(date.getMonth())
// document.write(month + '<br>')

// document.write(date.getFullYear() + '<br>')
// document.write(date.getHours(), ' : ')
// document.write(date.getMinutes(), ' : ')
// document.write(date.getSeconds(), '<br>')
// day k lye bh cnvrt krna prta h qk ye dnon strings hn 
// document.write(date.getDay())
// document.write(day)

// my age calculator:
// let yearOfBirth = prompt('Enter your year of birth')
// let year = date.getFullYear()

// let age = year - yearOfBirth
// confirm('Your current age is ' + age)

// age calculator in class by sr:

// *
// let date = new Date() // ab yhn ye lkhne se puri ki puri date aarh hgi yni jsmn 10 methods
// saare ek sth aarh hnge thk h. lkn hmn kia krna h hmn is date mn se srf time nklna h with
// hours, min, sec, milisec. t iska kia method th iska method th .time

// *
// let dateTime = date.getTime() //t ab yhn pe hmne time t nkl lia h lkn ye time khn se de rh h
// ye de rh h 1970 se utha k abhi tk jtna bh time hwa h wo utha k de rh lkn mujhe whn se time
// nh chahiye mn ise kh rh hn k apke ps jo time aarh h mujhe whn se nh blke mn jhn se paida
// hwi hn mujhe whn se time do ab iske lye mujhe zhir h isko apni DOB btani pregi or ye mn alg
// variable mn bnaoungi qk mujhe 2 varbls of time ki need t pregi na ek mn mri dob hgi or ek
// mn total ab tk jtna time gzra wo hga 

// *
// let dob = new Date('14 nov, 2003')
// let dobTime = dob.getTime()

// document.write(dateTime + '<br>')
// document.write(dobTime, '<br>', '<br>')

// ab simple c bt h mne total time or mra apna time get krlia mn total mn sse apne wle ko minus
// krwa dti hn t mujhe jo bch gya wo mra time hga jo mujhe pta chl jaega

// *
// let minus = dateTime - dobTime
// document.write(minus, '<br>')  // ab yhn mri age t aagai h lkn do msle hgae hn ek t ye k ye hr milisec
// pe brh rh h qk mn hr milisec pe bri bh t hrh hn na or dsra ye k ye mri age t mujhe de rh h
// lkn mili sec k hisab se k mn ktne mlisec bri hgai hun lkn hm t salon mn age ko calculate
// krte hn t ab mn kia krngi mn in mili sec ko years mn lke jaoungi yni cnvrt krngi.

// *
// let ageFormula = minus / (1000 * 60 * 60 * 24 * 365)
// let age = Math.floor(ageFormula)
// document.write('Your age is: ', age)

// let dob = new Date('14 aug, 1947')
// let dobMili = dob.getTime()
// document.write(dobMili, '<br>')

// let date = new Date()
// let dateMili = date.getTime()
// document.write(dateMili, '<br>')

// let minus = dateMili - dobMili
// let formula = minus / (1000 * 60 * 60 * 24 * 365)
// let age = Math.floor(formula)
// document.write(age)




// assignment:

// ask user's age then tell him his age if he tells the invalid age the code will tell him

// let pro = prompt('Enter your date of birth')

// let date = new Date()
// let dateMili = date.getTime()

// let dob = new Date (pro)
// let dobMili = dob.getTime()

// let minus = dateMili - dobMili
// let formula = minus / (1000 * 60 * 60 * 24 * 365)
// let age = Math.floor(formula)

// if (age >= 0) {
//     alert('your age is : ' + age)
// }

// else {
//     alert('Invalid age')
// }