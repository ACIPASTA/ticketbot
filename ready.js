module.exports = async (client, user, message) => {
  client.user.setActivity("ACIPASTA ticket bot +setup");
  console.log("Bot Başarıyla Başlatıldı!");
};

var http = require("http");

http
  .createServer(function (req, res) {
    res.write("Bot aktif edildi! ACIPASTA");
    res.end();
  })
  .listen(8080);
