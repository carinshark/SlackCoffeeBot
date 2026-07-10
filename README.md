# Coffee Bot!

### This bot is active on the hackclub slack page.

## List of commands:

`/coffeebot-help` - shows a list of all the other commands you can run.

`/coffeebot-ping` - check latency of bot

`/coffeebot-catcafe` - get a random cat fact! uses the [Cat Fact API](https://catfact.ninja/fact)

`/coffeebot-caffinate` - get a random picture of coffee! uses [Coffee API](https://coffee.alexflipnote.dev/random.json)

## To run locally:

1. download the repository
2. create a .env file in the main folder
3. add these lines to it:  `SLACK_BOT_TOKEN=<REPLACE WITH TOKEN>` and `SLACK_APP_TOKEN=<REPLACE WITH TOKEN>`  
4. open a terminal and go to the folder the repository is on with the [cd command](https://www.geeksforgeeks.org/linux-unix/cd-command-in-linux-with-examples/) run the following commands
5. `npm init -y`
6. `npm install @slack/bolt dotenv`
7. `node index.js`
8. test out the bot in the slack workspace that the bot is assigned to!

Note:  
    You will need a slack bot before doing this tutorial.  
    The bot token (Bot User OAuth Token) should start with `xoxb` and is acquired from OAuth & Permissions  
    The app token (App-Level Token) should start with `xapp` and is acquired from Basic Information → App-Level Tokens]  
    You will need to have [node.js](https://nodejs.org/en/download) installed before running the terminal commands.  
