const fs=require("fs");

let data = "Hello everyone welcome to programming world"

// fs.writeFile("App.html",data,(err,data)=>{
//     if(err){
//         console.log("\n\t error :" +err);
//     }
//     console.log("\n\t file is created sucessfully ....\n");

// })
fs.rename("App.html","newfile.py",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("\n\t modified sucess ")
    }
})
