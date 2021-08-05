module.exports = {
    name: 'clear',
    description: "This command deletes messages.",
    execute(client, message, args, Discord){
        
    if (!message.member.hasPermission('MANAGE_MESSAGES'))  return message.channel.send("You cannot delete messages :/");
    if(!args[0]) return message.reply(" How many messages do you want to delete (limit 99)");
    if(parseInt(args[0]) > 99) return message.reply("You can't delete more than 99 messages at once dude!!");
     {
    message.channel.bulkDelete(parseInt(args[0]) + 1 )    
}
}
}
