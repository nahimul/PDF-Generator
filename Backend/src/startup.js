import { DB_URL, PORT } from "./configs/index.js";
import connectToDB from "./dbConnection/db.js";
const startup = () => {
  if (!PORT || !DB_URL) {
    console.error("Update configs to start the app!");
    process.exit(1);
  }

  connectToDB();
};

export default startup;
