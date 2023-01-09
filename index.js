const http = require('http')

const PORT = 3000;

const server = http.createServer()
    
server.on('request',(req,res) => {
    const items = req.url.split('/');
    if (items[1] === 'friends'){
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'application/json')
    res.end(JSON.stringify({
        id: 1,
        name: 'David yayo locorrr',
    }))
}else if (items[1] === 'messages'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<body>')
    res.write('<ul>')
    res.write('<li> this is </li>')
    res.write('</ul>')
    res.write('</body>')
    res.write('</html>')
    res.end();
} else {
    res.statusCode = 404
}

})

server.listen(PORT, ()=>{
    console.log('its working cograts bebes')
})
