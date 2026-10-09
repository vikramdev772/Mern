const fs=require("fs")

let data = "MERN stack "

fs.writeFile("App.py",data,(err,data)=>{
    if(err){
        console.log("\n\t error :" +err);
    }
    console.log("\n\t file is created sucessfully ....\n");

})

fs.rename("App.py","A.json",(err)=>{
    if(err){console.log("\n\t error : "+err)

    }else{
        console.log("\n\t file modified sucess \n")
    }
})

fs.unlink("A.json",(err)=>{
    if(err){
        console.log("error : "+err);
    }
    console.log("\n\t file deleted sucess \n");
})
