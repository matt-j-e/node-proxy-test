const app = require('./src/app');

const APP_PORT = process.env.PORT || 5003; // set your port number here

app.listen(APP_PORT, () => console.log(`app is running on http://localhost:${APP_PORT}`));