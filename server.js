const express= require("express")
const app = express()
const port=5051

app.set('view engine','ejs');
app.set('views', './views')

app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/services',(req, res)=>{
    res.render('home')
})

app.listen(port,()=>{
    console.log('Running at 5051')
})