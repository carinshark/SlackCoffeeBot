require("dotenv").config();

const { App } = require("@slack/bolt");

const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

app.command("/coffeebot-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/coffeebot-help",async({ack,respond})=>{
    await ack()
    await respond({
        text:
        `*Available Commands:*
        /coffeebot-ping - Check bot latency
        /coffeebot-caffinate - get a picture of coffee
        /coffeebot-catcafe - get a random cat fact!
        `
    });
})


app.command("/coffeebot-caffinate",async ({command,ack,respond}) => {
    await ack();

    try {
        const response = await axios.get("https://coffee.alexflipnote.dev/random.json")
        await respond({"blocks":
            [
                {
                    "type":"image",
                    "title":{
                        "type":"plain_text",
                        "text":"Enjoy your virtual drink!"
                    },
                    "image_url":response.data.file,
                    "alt_text":"picture of coffee"
                }
            ]
        });
    } catch(err){
        console.log(err)
        await respond({text:"we ran out of coffee :(\ntry another time!"})
    }
    
});

app.command("/coffeebot-catcafe",async ({command,ack,respond})=>{
    await ack()
    try {
        const response= await axios.get("https://catfact.ninja/fact");
        await respond({"text":`Welcome to the cat cafe! Here is your cat fact!\n${response.data.fact}`});
    } catch(err){
        await respond({"text":"The cat cafe is currently closed!\nPlease try again later"})
    }
}

);


(async () => {
  await app.start();
  console.log("bot is running!");
})();
