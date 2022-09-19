const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req,res) =>{
    res.send("Hello there, my name is Alejandro Rodríguez Moreno. I finally made this work.");
});

app.listen(PORT, () => {
    console.log('App up at port ${PORT}');
});