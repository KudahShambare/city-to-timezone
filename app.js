const express = require("express");
const tz = require("city-timezones")

const app = express();





app.get("/:city",(req,resp)=>{
	const cityName = req.params.city;

let val = tz.lookupViaCity(cityName);

if(val.length != 0){
	let zone = val[0].timezone;

resp.send(zone);
}else{
	resp.send("Unknown City")
}


})


const PORT = 7000 || process.env.PORT;

app.listen(PORT,()=>{
	console.log("Sever running at Port: "+PORT);
})