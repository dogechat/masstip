// Actual mass tip js code in a nice format!
a = prompt('How many users do you wish to tip?', 5);
b = Number(prompt('How much do you wish to tip each user?', 10));
if (users[currentRoom].length - 1 < a && a && b) {
    alert('There aren'
        t that many users here!');}else if(Number($('#
        balance ').html())<a*b){alert('
        You don 't have enough doge for that!');
} else if (b < 5) {
    alert('You must tip at least 5 to each user!');
} else {
    socket.emit('chat', {
        room: currentRoom,
        color: color,
        message: '/me is mass tipping: ' + users[currentRoom].slice(0, a).join(', ') + '!'
    });
    tips = 0;
    for (var i = 0; i < a + 1; i++) {
        if (username != users[currentRoom][i] && tips < a) {
            tips++;
            socket.emit('tip', {
                user: users[currentRoom][i],
                tip: b,
                room: currentRoom,
                message: 'Mass tip from ' + username
            });
        }
    }
}