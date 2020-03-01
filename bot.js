const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: 'Hopalonghacksaw',
    password: 'oauth:zzw2s1vxpfz5bt6ny802ettu7rygby'
  },
  channels: [
    'Hopalonghacksaw'
  ]
};
var keys = ["Q","W","E","A","S","D","Space","1","2","3","4","5","6","7","8","9","0","Ctrl","Left","Right","Up","Down","Break","Place","Shift"]
// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();
  var spawn = require("child_process").spawn;
  // If the command is known, let's execute it
  if (commandName === '!dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);
  } else if(commandName === '!help'){
    client.say(target, 'This is a game of minecraft where Twitch Is in control. To learn to play type "!commands"');
    }else if(commandName === '!commands'){
    client.say(target, 'The Commands are simple, they are the default keybindings for minecraft, Indepth commands: "!commands 2"');
    }else if(commandName === '!commands 2'){
    client.say(target, 'W = Forward, A = Left, S = backwards, D = Right, Space = Jump , Ctrl = Sprint, Mouse Commands "!commands 3"');
    }else if(commandName === '!commands 2'){
    client.say(target, 'Break = Left Click/ Break, Place = Right Click/ Place, Up / Down = Move Mouse Up and Down, Left / Right = Move Mouse left and right "!commands 4"');
    }else if(commandName === '!commands 2'){
    client.say(target, '1-9 = Inventory Hot Keys, E = Open Inventory ');
    } else if(keys.includes(commandName)){

  var process = spawn('python',["./key.py",
                            commandName]);
  console.log(`* Executed ${commandName} command`);
  client.say(target, 'Command Accepted');
  } else {
    console.log(`* Unknown command ${commandName}`);
  }

}
// Function called when the "dice" command is issued
function rollDice () {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
}
