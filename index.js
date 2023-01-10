const http = require('http')

const PORT = 3003;

const server = http.createServer()

const friends = [
    {
      id: 0,
      name: 'Nikola Tesla',
    },
    {
      id: 1,
      name: 'Sir Isaac Newton',
    },
    {
      id: 2,
      name: 'Albert Einstein',
    }
  ];
  
    
server.on('request',(req,res) => {
    const items = req.url.split('/');

    if (req.method === 'POST' && items[1] === 'friends'){
        req.on('data', (data) => {
            const friend = data.toString();
            console.log('Request', friend);
            friends.push(JSON.parse(friend))
        });
        req.pipe(res)
    }
    else if (req.method === 'GET' && items[1] === 'friends'){
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'application/json')
    if (items.length === 3){
        const friendIndex = Number(items[2]);
        res.end(JSON.stringify(friends[friendIndex]))
    } else {
        res.end(JSON.stringify(friends))
    }
    
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
    res.statusCode = 404;
    res.end()
}

})

server.listen(PORT, ()=>{
    console.log('its working cograts bebes')
})
