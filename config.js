module.exports = {
  TOKEN: "MTMxMjAxMTMyMzU4NDAyNDY0Ng.G3iVve.wdhzr5CLO4tjHVGf-esOYiTP4QBUaao_UziLjQ",
  ownerID: ["1213780176543023155", ""],
  botInvite: "",
  supportServer: "",
  mongodbURL: "mongodb+srv://THUNDER:<db_password>@thunder.4jzys.mongodb.net/?retryWrites=true&w=majority&appName=THUNDER",
  status: 'BrK',
  commandsDir: './commands',
  language: "en",
  embedColor: "00fbff",
  errorLog: "",


  sponsor: {
    status: true,
    url: "https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A",
  },

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "playnormal", "playlist", "queue", "resume", "save", "play", "skip", "stop", "time", "volume"],
    vote_url: "",
  },

  shardManager: {
    shardStatus: false
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: true,
        cooldown: 10000000,
      },

    },

    maxVol: 150,

  }
}
