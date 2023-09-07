const ronin = require("ronin-server");
// const database = require("ronin-database");
const mocks = require("ronin-mocks");

require("dotenv").config();

async function main() {
  try {
    // await database.connect(process.env.CONNECTIONSTRING);

    const server = ronin.server({
      port: process.env.SERVER_PORT,
    });

    server.use("/", mocks.server(server.Router(), false, true));

    const result = await server.start();
    console.info(result);
  } catch (error) {
    console.error(error);
  }
}

main();
