const config = require("./default");
const dbConnection = (mongoose) => {
  const db = mongoose.connection;

  mongoose.connect(config.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set("useCreateIndex", true);
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => console.log("Connection to Database successful....."));
};

module.exports = dbConnection;
