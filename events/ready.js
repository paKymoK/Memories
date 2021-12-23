module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        client.user.setPresence({
            activities: [{
                name: 'Gun Girl Z',
                type: 'STREAMING',
                // url: 'Revived Witch'
            }]
        });
    },
};