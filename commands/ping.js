 module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(client, message, args, Discord){
        message.channel.send('pong!');
        message.channel.send(`🏓Latency is ${message.createdTimestamp - Date.now()}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}