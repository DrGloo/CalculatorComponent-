let totalPrice 
let baseFeee

function testResults (form) {
  console.log("button pressed")
   //let x = document.forms["form1"].value;
  let classValue = document.getElementById("classBox")
  let propValue = document.getElementById("propBox")
  let sqValue = document.getElementsByTagName("input")[0].value
  let ffValue = document.getElementsByTagName("input")[1].value
  let csfRate = 0
  let ffRate = 0
  let totalCost = 0
  console.log("form1 value is " + classValue.value)
  console.log("form2 value is " + propValue.value)
  console.log("form3 value is " + sqValue)
  console.log("form4 value is " + ffValue)
  if (classValue.value == "A"){
    console.log("customer is class a")
    document.getElementById("propBox").value = "Commercial";
    if (sqValue < 15000){
      console.log("sqFt is less than 15K")
      csfRate = 40  
      totalCost = 500 + (csfRate * sqValue) + (ffValue * 48)
      document.getElementById("totalBox").innerHTML = "Total is " + totalCost
    } else if (sqValue >= 15000){
      console.log("sqFt is more than 15K")
      csfRate = 0.33
      document.getElementById("classBox").value = "B"
      totalCost = 500 + (csfRate * sqValue) + (ffValue * 48)
      document.getElementById("totalBox").innerHTML = "Total is " + totalCost 
    }
    console.log("totalCost is " + totalCost)
  } else if (classValue.value == "B"){
      console.log("customer is class b")
      document.getElementById("propBox").value = "Commercial"
      if (sqValue < 15000){
        console.log("sqFt is less than 15k")
        csfRate = 40
        totalCost = 500 + (csfRate * sqValue) + (ffValue * 48)
        document.getElementById("classBox").value = "A"
        document.getElementById("totalBox").innerHTML = "Total is " + totalCost
      } else if (sqValue > 15000){
        console.log("sqFt is more than 15k")
        csfRate = 0.33
        document.getElementById("totalBox").innerHTML = "Total is " + totalCost 
      }
  } else if (classValue == "C"){
    console.log("customer is class c")
    document.getElementById("propBox").value = "Residential"
    totalCost = 0
  } else if (classValue == "D"){
    console.log("customer is class d")
    document.getElementById("propBox").value = "Goverment/Exempt"
    
  }
}

// CLASS A
// BASE FEE = 500$
// ANNUAL ASSESMENT RATE
// FF rate + CSF rate + Base Fee 
// approximately $48 per frontage foot (FF)
// + $.40 per commercial square foot(CSF)
// + 500 base fee

// CLASS B
// BASE FEE = 500$
// ANNUAL ASSESMENT RATE 
// FF rate + CSF rate + Base Fee 
// approximately $48 per frontage foot (FF)
// + $.33 per commercial square foot(CSF)
// + 500 base fee

// RESIDENTIAL 
//BASE FEE = 0
// ANNUAL ASSESMENT RATE 1$

//GOVERNMENT/EXEMPT 
// BASE FEE = 0
// ANNUEL ASSESMENT RATE 0$
