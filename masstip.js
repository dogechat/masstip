function tip(tipuser) {
    socket.emit('tip', {
        user: tipuser,
        tip: amount,
        room: currentRoom,
        message: 'Mass tip from ' + username
    });
}
number = prompt('How many users do you wish to tip?', 5);
amount = Number(prompt('How much do you wish to tip each user?', 10));
if (users[currentRoom].length - 1 < number && (number && amount)) {
    alert('There are not that many users here!');
} else if (Number($('#balance').html()) < number * amount) {
    alert('You do not have enough doge for that!');
} else if (amount < 5) {
    alert('You must tip at least 5 to each user!');
}
socket.emit('chat', {
    room: currentRoom,
    color: color,
    message: '/me is mass tipping: ' + users[currentRoom].slice(0, number).join(', ') + '!'
});
var tips = 0;
var time = 0;
for (var i = 0; i < number + 1; i++) {
    if (username != users[currentRoom][i] && tips < number) {
        tips++;
        time = time + 500;
        setTimeout(tip, time, users[currentRoom][i]);
    }
}
