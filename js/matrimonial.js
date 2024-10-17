let gender = "Male"
let age = 27
let area = "Dhanmondi"
let haveJob = true
let salary = 30000

if (gender === "Male") {
  if(age >= 26){
    if(area === "Dhanmondi"){
      if(haveJob === true){
        if(salary >= 30000){
          console.log("You're selected for soyongbora")
        }
        else{
          console.log("Sorry, the candidate must have a minimum 30k salary.")
        }
      }
      else{
        console.log("Sorry, the candidate must have a job.")
      }
    }
    else{
      console.log("Sorry, the candidate must be from Dhanmondi.")
    }
  }
  else{
    console.log("Sorry, the candidate must be over 25 years old.")
  }
} else {
  console.log("Sorry, the candidate must be a male.")
}