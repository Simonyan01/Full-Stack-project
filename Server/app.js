const express = require('express');
const configs = require('./config/configs');
const sequelize = require('./db/connection');
const PORT = configs.PORT || 8080;
const errorMiddleware = require('./middlewares/error');
const routes = require('./routes/index');
const cors = require("cors");
const ApiError = require('./libs/errors/apiError');

const app = express();

app.use(cors())
app.use(express.json());
app.use(errorMiddleware);

//BASE URL
app.use('/api/v1/', routes);


async function start() {
    try {
        app.listen(PORT, async () => {
            console.log('Services running...');
        });
        await sequelize.authenticate();
        console.log(`Database successfully connected`);

    } catch (err) {
        console.log(err.message);
    }
}

start();