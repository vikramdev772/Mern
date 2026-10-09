const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.log("\n\t error : " + err);
  }
  console.log(data);
});


fs.writeFile("A.java"," hello world ",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log("\n\t file created sucessfully ")
})


