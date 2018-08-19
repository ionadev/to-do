const { Client } = require('klasa');
require('dotenv').config()

const client = new Client({
    fetchAllMembers: false,
    prefix: '+',
    commandEditing: true,
    typing: true,
    readyMessage: (client) => `Successfully initialized. Ready to serve ${client.guilds.size} guilds.`
});
client.login(process.env.token);

module.exports = client;