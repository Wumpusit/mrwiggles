const express = require("express");
const app = express();
const port = 3000;
const talkedRecently = new Set();

app.get("/", (req, res) => res.send("Goodbye World!"));

app.listen(port, () => console.log(`http://localhost:${port}`));

const Discord = require("discord.js");
const Embed = new Discord.MessageEmbed();
const client = new Discord.Client();
const cooldowns = new Discord.Collection();
const TicTacToe = require("discord-tictactoe");
const ms = require("ms");
const twitch = require("twitch-api-v5");
const emotes = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "0️⃣"];
const fruits = ["⛔", "😀"];
twitch.clientID = "v4p7octo4gsw6cygjiyv3jbihvmsbe";
const DOG_API_URL = "https://api.thedogapi.com/";
const DOG_API_KEY = "106ba47e-d909-4b63-b2ce-10da069036d8";

const prefix = "mr";

client.once(
  "ready",
  () => {
    console.log("working");
    client.user.setActivity(
      "#Roadto100servers add me at go.wumpusstudios.gq/c/wb"
    );
  }

  //client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  //console.log(`Joined new server: ${guild.id}`);
  //var channel = client.channels.cache.get('761348067810213908')
  //channel.send(`I joined a new server 🥳:\n **IP:** ${guild.id} \n **NAME:** ${guild.name}`);
);

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  let args = message.content.substring(prefix.length).split(/ +/);

  switch (args[0]) {










    
      
    //TODO: Add the dog api and the cat API
    case "help":
      const help = new Discord.MessageEmbed()
        .setTitle(
          `Hey, ${message.author.username} We are here to help. Sorry for bot going off and on but were solving a bug.`
        )
        .setAuthor(
          `${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setColor("7982DA")
        .setDescription(
          "Hi, Thanks for being intrested in Mr.Wiggles. **ALL** commands start with: mr\n\n\n✅  Useful\n`avatar`\n\n⚙️ Server admins\n`cleartopic` `ban` `kick`\n\n🚿 Form The creators\n`technews` `contribute`.\n\n😀 Others\n `servercount`\n\n⚙️Random Responses\n`topic`\n\n📹Twitch\n`streams` `chstreams`\n\n **Quick links**:\n[Support server](https://discord.gg/hwMPeU2) `|` [Invite Me](https://discord.com/oauth2/authorize?client_id=758424457781313540&permissions=2080898263&redirect_uri=https%3A%2F%2Fmrwiggles.cf%2Flanding%2F&response_type=code&scope=identify%20bot) `|` [Suport Docs](https://docs.mrwiggles.cf/) `|` [repl.it (Bot hosting provider)](https://repl.it/) "
        )
        .setFooter(
          `Reqested by: ${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setTimestamp();
      if (!args[1]) {
        message.channel.send(help).then((sentMessage) => {
          message.channel.send(
            "#Roadto100servers add me at https://go.wumpusstudios.gq/c/wb."
          );
          const channel = client.channels.cache.get("761348067810213908");
          channel.send(`<@${message.author.id}> Ran the command Help!`);
        });
        break;
      }

    case "avatar":
      const av = new Discord.MessageEmbed()
        .setTitle("Your avatar:")
        .setImage(message.author.displayAvatarURL())
        .setFooter(
          `Reqested by: ${message.author.username} • If you can\'t see it, It does not want to load or we can\'t feach it now!'`,
          message.author.displayAvatarURL()
        )
        .setTimestamp()
        .setColor("7982DA");
      if (!args[1]) {
        message.channel.send(av).then((sentMessage) => {
          const channel = client.channels.cache.get("761348067810213908");
          channel.send(`<@${message.author.id}> Ran the command avatar!`);
        });
        break;
      }

    case "contribute":
      const contribute = new Discord.MessageEmbed()
        .setTitle("Do you want to contribue to Mr.Wiggles?")
        .setDescription(
          "How To is on our docs [here](https://docs.mrwiggles.cf/contriblue/what-its-about)"
        )
        .setColor("7982DA")
        .setFooter(
          `Reqested by: <@${message.author.id}>`,
          message.author.displayAvatarURL()
        )
        .setTimestamp();
      if (!args[1]) {
        message.channel.send(contribute).then((sentMessage) => {
          const channel = client.channels.cache.get("761348067810213908");
          channel.send(`<@${message.author.id}> Ran the command contribute!`);
        });
        break;
      }

    case "technews":
      const news = new Discord.MessageEmbed()
        .setTitle("Form the creators: Techyy News")
        .setDescription(
          "Techyy News is the **BEST** Place to find news scams, About discord, And more\n\n\n[Click here to visit the website!](https://www.techyynews.cf/home/)"
        )
        .setColor("7982DA")
        .setFooter(
          `Reqested by: <@${message.author.id}>`,
          message.author.displayAvatarURL()
        )
        .setTimestamp();
      if (!args[1]) {
        message.channel.send(news).then((sentMessage) => {
          const channel = client.channels.cache.get("761348067810213908");
          channel.send(
            `<@${message.author.id}> Ran the command news! (teccynews)`
          );
        });
        break;
      }

    case "info":
      const info = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setFooter(
          `Reqested by: ${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setColor("7982DA")
        .setDescription(
          "Mr.Wiggles Made by:\n\nIdeas:\n`appmonster` `Pyczowskyy` `Trent`\nDevs:\n`Seenloveswumpus` `RandomKittens`"
        );
      if (!args[1]) {
        message.channel.send(info).then((sentMessage) => {
          const channel = client.channels.cache.get("761348067810213908");
          channel.send(`<@${message.author.id}> Ran the command info!`);
        });
        break;
      }

    case "servercount":
      const servers = new Discord.MessageEmbed()
        .setAuthor(
          `${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setFooter(
          `Reqested by: ${message.author.username}`,
          message.author.displayAvatarURL()
        )
        .setColor("7982DA")
        .setDescription(`I am in ${client.guilds.cache.size} Servers 🎉`);
      if (!args[1]) {
        message.channel.send(servers);
        break;
      }

    case "emojis":
      message.channel.send(
        "Here are my emojis that I can send:\n<:Yes:765731247225176105> <:WumpusLove:765731247116386344> <:Seenloveswumpus:765731244288901151> <:Opps:765731243970658355> <:No:765731243945099274>"
      );
      break;

    case "topic":
      const Responses = [
        "Have you ever noticed somthing out of the ordnary what was it?",
        "Have you ever been exused of doing somting you did not do? What was it?",
        "What is your skill?",
        "After you find a rude person will you stay away from him or try to be his/her friend?",
        "Are you a spender or a saver?",
        "What inspires you as a person?",
        "Do you believe in astrology?",
        "Do you believe in love at first sight?",
        ,
        "Are you a planner or a spontaneous person?",
        "Do you believe in life after death?",
        "Tell us about a signature dish you cook?",
        "What is the craziest thing you have done?",
        "Are exams a good way to judge us?",
        "Is Facebook good or bad?",
        "Do you watch horror movies?",
        "Are you a dreamer or a doer?",
        "How do you make new friends?",
        "Is luck a big part of life?",
        "Hey, This is the end run the command again or add a topic at https://go.wumpusstudios.gq/wumpusbot/addtopic",
      ];

      const Response = Math.floor(Math.random() * Responses.length);

      message.channel
        .send(Responses[Response])

        .then((updated) => console.log(`Channel's new topic is`));
      message.channel.setTopic(Responses[Response]).catch(console.error);

    case "cleartopic":
      if (message.member.hasPermission("MANAGE_CHANNELS")) {
        message.channel.setTopic("");
        break;
      }

    case "catfact":
      const req = fetch("https://catfact.ninja/fact");
      const data = req.json();
      const catfact = new Discord.MessageEmbed()
        .setDescription(`Cat fact: ${fact} `)
        .setURL("https://discord.com")
        .setColor("7982DA")
        .setFooter("Powerd by cat fact. lol");
      message.channel.send(catfact);
      break;

    case "report":
      if (talkedRecently.has(message.author.id)) {
        const Embed = new Discord.MessageEmbed()
          .setColor("fcba03")
          .setTitle("<:No:765731243945099274> Error.")
          .setDescription(
            `You have to wait before you can report again <@` +
            message.author +
            ">"
          );
        message.channel.send(Embed);
      } else {
        if (!args[1]) {
          const Embed = new Discord.MessageEmbed()
            .setColor("fcba03")
            .setTitle("<:No:765731243945099274> Error.")
            .setDescription("You need to type: ```mrreport [BUG REPORT]```");
          message.channel.send(Embed);
        } else {
          let messageArgs = args.slice(1).join(" ");

          message.channel
            .send(
              "**Ok I have sent the reprt to the staff team**\n  YOU HAVE SUBMITTED A BUG REPORT!\nRemember that you can only send one Bug report in 24 hours."
            )
            .then((sentMessage) => {
              const channel = client.channels.cache.get("767485680213295114");
              channel.send(
                `🚨🚨**ALERT**🚨🚨\n**BUG REPORT:** ${messageArgs}\nThis bug report was submitted by <@${message.author.id}>\n<@&762644839014596608>`
              );
            });
          // the user can type the command ... your command code goes here :)
          talkedRecently.add(message.author.id);
          // Adds the user to the set so that they can't talk for a minute
        }
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 43200000);
      }
      break;
    case "streams":
      const query = message.content.substring(9);
      if (query.length == 0)
        return message.channel.send("You must type search keywords");
      twitch.search.streams({ query: query, limit: 10 }, async function(
        err,
        x
      ) {
        const results = x.streams;
        if (results.length == 0) return message.channel.send("No results");
        let I = [];
        for (let x = 0; x < 10; x++) {
          if (results[x] != undefined) I.push(results[x]);
        }
        let display = [];
        for (let x = 0; x < I.length; x++) {
          display.push(`${emotes[x]} ${I[x].channel.display_name}`);
        }
        const msg = await message.channel.send(
          new Discord.MessageEmbed()
            .setDescription(display)
            .setTitle("I found these channels streaming")
        );

        for (let x = 0; x < I.length; x++) msg.react(emotes[x]);

        const filter = (reaction, user) => {
          return emotes.includes(reaction.emoji.name) && user.bot != true;
        };

        const collector = msg.createReactionCollector(filter, { time: 360000 });

        collector.on("collect", (reaction, user) => {
          const choice = I[emotes.indexOf(reaction.emoji.name)];
          if (choice == undefined) return;
          const S = new Discord.MessageEmbed()
            .setTitle(choice.channel.display_name)
            .addFields(
              { name: "Average fps", value: choice.average_fps },
              {
                name: "Broadcast language",
                value: choice.channel.broadcaster_language,
              },
              { name: "Game", value: choice.average_fps },
              { name: "Link", value: choice.channel.url }
            )
            .setImage(choice.preview.large);

          message.channel.send(S);
        });
      });
      break;

    case "chstreams":
      const Query = message.content.substring(12);
      if (Query.length == 0)
        return message.channel.send("you must put channel name");
      twitch.search.channels({ query: Query, limit: 10 }, async function(
        err,
        A
      ) {
        if (err) throw err;
        if (A.channels.length == 0) return message.channel.send("no results");
        let i = [];
        for (let x = 0; x < 10; x++) {
          if (A.channels[x] != undefined) i.push(A.channels[x]);
        }
        const display = i.map(function(x) {
          return `${emotes[i.indexOf(x)]} ${x.display_name}`;
        });
        const Msg = await message.channel.send(
          new Discord.MessageEmbed()
            .setDescription(display)
            .setTitle("I found these channels")
        );
        for (let x = 0; x < i.length; x++) Msg.react(emotes[x]);

        const filter = (reaction, user) => {
          return emotes.includes(reaction.emoji.name) && user.bot != true;
        };

        const collector = Msg.createReactionCollector(filter, { time: 360000 });

        collector.on("collect", (reaction, user) => {
          const choice = i[emotes.indexOf(reaction.emoji.name)];
          if (choice == undefined) return;
          twitch.streams.channel({ channelID: choice._id }, async function(
            err,
            X
          ) {
            if (X.stream == null) {
              const M = await message.channel.send(
                new Discord.MessageEmbed().setDescription(
                  "I didn't find any streams for this channel react to get videos instead"
                )
              );
              M.react("▶️");

              const filter = (reaction, user) => {
                return reaction.emoji.name === "▶️" && user.bot != true;
              };

              const collector = M.createReactionCollector(filter, { max: 1 });

              collector.on("collect", async (reaction, user) => {
                twitch.channels.videos(
                  { channelID: choice._id },
                  async function(err, V) {
                    const videos = V.videos;
                    if (videos == undefined || videos.length == 0)
                      return message.channel.send(
                        "No videos found for this channel"
                      );
                    let I = [];
                    for (let index = 0; index < 10; index++) {
                      if (videos[index] != undefined) I.push(videos[index]);
                    }
                    const Display = I.map(function(vid) {
                      return `${emotes[I.indexOf(vid)]} ${vid.title}`;
                    });
                    const MSG = await message.channel.send(
                      new Discord.MessageEmbed().setDescription(Display)
                    );
                    for (let index = 0; index < I.length; index++) {
                      MSG.react(emotes[index]);
                    }

                    const filter = (reaction, user) => {
                      return (
                        emotes.includes(reaction.emoji.name) && user.bot != true
                      );
                    };

                    const collector = MSG.createReactionCollector(filter, {
                      time: 360000,
                    });

                    collector.on("collect", (reaction, user) => {
                      const choice = I[emotes.indexOf(reaction.emoji.name)];
                      if (choice == undefined) return;
                      const Note = new Discord.MessageEmbed()
                        .setTitle(choice.title)
                        .addFields(
                          { name: "Game", value: choice.game },
                          { name: "Language", value: choice.language },
                          { name: "Publish date", value: choice.published_at },
                          { name: "Link", value: choice.url }
                        )
                        .setImage(choice.preview.large);

                      message.channel.send(Note);
                    });
                  }
                );
              });
            } else {
              const note = new Discord.MessageEmbed()
                .setTitle(`${X.stream.channel.display_name}`)
                .addFields(
                  { name: "Average fps", value: X.stream.average_fps },
                  {
                    name: "Broadcast language",
                    value: X.stream.channel.broadcaster_language,
                  },
                  { name: "Stream link", value: X.stream.channel.url }
                )
                .setImage(choice.video_banner);

              message.channel.send(note);
            }
          });
        });
      });
  }

  

  //Emebds
  const eerrnopermmanmsg = new Discord.MessageEmbed();
});

client.login(process.env.DISCORD_TOKEN);
