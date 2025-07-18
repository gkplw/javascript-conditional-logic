//Exercise 2
let lightBulbStatus = "On";
lightBulbStatus = "Broken"; // ถ้าใช้ค่าอื่น จะเข้าเงื่อนไข สุดท้าย “Please choose the correct input (On/Off/Broken)”

// Start coding here.
if (lightBulbStatus === "On") {
  console.log("Light bulb is On.");
} else if (lightBulbStatus === "Broken") {
  console.log("Light bulb is Broken.");
} else {console.log('Please'+' '+'choose'+' '+'the'+' '+'correct'+' '+'input'+' '+'(On/Off/Broken)');}
