const exp=require("express")
let app=exp()
app.set("view engine","ejs")
console.log(app);
//creating server
let port=3000
app.get("/",(req,res)=>{
    res.send('Home Page')
})
app.get("/ig/:user",(req,res)=>{
let followers=["bob","james","slice"]
    let{user} = req.params
    res.render("first.ejs",{user,followers})
   
})
app.listen(port,()=>{
    console.log("My server is running on port",3000);
    
})