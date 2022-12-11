const express = require('express');
const configs = require('./config/configs');
const sequelize = require('./db/connection');
const PORT = configs.PORT || 8080;
const errorMiddleware = require('./middlewares/error');
const routes = require('./routes/index');

const app = express();


app.use(express.json());
app.use(errorMiddleware);

//BASE URL
app.use('/api/v1/', routes);


async function start() {
    try {
        app.listen(PORT, async () => {
            console.log('services runing...');
        });
        await sequelize.authenticate();
        console.log(`database successfully connected`);

    } catch (err) {
        console.log(err.message);
    }
}

start();