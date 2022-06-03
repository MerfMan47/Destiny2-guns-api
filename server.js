const express = require('express')
const app = express()
const PORT = 8000

const guns = {
    'telesto':{
        'type':'special',
        'rarity':'Exotic',
    }, 
    'whisper of the worm':{
        'type':'heavy',
        'rarity':'Exotic',
    },
    'unknown':{
        'type':'unknown',
        'rarity':'unknown',
    },
}


app.get('/', (request, responce)=>{
    responce.sendFile(__dirname + '/index.html')
})

app.get('/api/:name',(request,responce)=>{

    const gunName = request.params.name.toLowerCase()
    if( guns[gunName] ){
        Response.json(guns[gunName])
    }else{
        responce.json(guns['unknown'])
    }



    // responce.json(guns)
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on ${PORT}! Better Go Catch It!`)
})