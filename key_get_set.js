var redis = require("redis");
var client = redis.createClient({
    socket: {
        port: 6379,
        host: "127.0.0.1"
    }
});

(async () => {
    try {
        await client.connect();
        //console.log('connected');
    } catch (err) {
        console.log(err);
    }
})()

client.on('connect', function () {
    console.log('Connected!');
});

//console.log('connected');
// singer value write & read
client.set("my_key", "Hello World!");
client.get("my_key", function(err, reply) {
    console.log(reply);
});

// multiple value write & read
client.mSet('header',0,'left',0,'article',0,'right',0,'footer',0);
client.mGet(['header','left','article','right','footer'],
    function(err,value) {
        console.log(value);
});



client.quit();