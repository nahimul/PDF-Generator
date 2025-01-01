import { PORT } from "./configs/index.js";
import app from "./app.js";
import startup from "./startup.js";

startup()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


