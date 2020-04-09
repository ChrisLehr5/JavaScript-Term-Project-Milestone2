var currentRoom = "start";
var commands = ["go", "look", "talk"];
var inventory = ["leather belt", "coin", "ribbon"];
var item = ["old penny", "pet rock", "crumbled piece of paper"];

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir]
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
    } else {
        $('#game-text').append("<p>You cannot go that way!</p>");
    }
}

function showHelp() {
    $('#game-text').append("<p>Here are the possible commands: </p>");
    $('#game-text').append("<ul>");
    for (var i = 0; i < commands.length; i++) {
        $('#game-text').append("<li>" + commands[i] + "</li>");
    }
    $('#game-text').append("</ul>");
}

function showInventory() {
    if (inventory.length == 0) {
        $('#game-text').append("<p>You are not carrying anything!</p>");
        return;
    }
    $('#game-text').append("<p>Here is your inventory: </p>");
    $('#game-text').append("<ul>");
    for (var i = 0; i < inventory.length; i++) {
        $('#game-text').append("<li>" + inventory[i] + "</li>");
    }
    $('#game-text').append("</ul>");
}

function gameEnd() {
    $('#game-text').append("<p>Thank you for playing! Try again later!</p>");
}

//working on this one 
function showItem() {
    $('#game-text').append("<p>" + rooms[currentRoom].look + "</p>");

}

function talkNpc(input) {
    $('#game-text').append("<p>" + rooms[currentRoom].talk + "</p>");
}






function playerInput(input) {
    var command = input.split(" ")[0];
    switch (command) {
        case "go":
            var dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "inventory":
            showInventory();
            break;
        case "look":
            showItem();
            break;
        case "talk":
            talkNpc();
            break;
        case "end":
        case "quit":
            gameEnd();
            break;
        default:
            $('#game-text').append("<p>You cannot go that way!</p>");

    }
}

$(document).ready(function() {
    $('#game-text').append("<p>" + rooms.start.description + "</p>");
    $(document).keypress(function(key) {
        if (key.which == 13 && $('#user-input').is(':focus')) {
            var value = $('#user-input').val().toLowerCase();
            $('#user-input').val("");
            playerInput(value);
        }
    })

});