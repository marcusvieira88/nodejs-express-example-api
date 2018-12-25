var config = require('../config/connections');
var mongoose = require('mongoose');

class DatabaseConnection {

    /**
     * Connect to the database
     */
    connect() {
        const env = process.env.NODE_ENV || 'local';
        const dbConfig = config.getDatabaseConfig().environment[env].config;
        mongoose.connect(dbConfig, {useNewUrlParser: true});

        const db = mongoose.connection;

        db.on('open', () => {
            console.info(`Connected to the database env: ${env}`);
        });

        db.on('error', (error) => {
            console.error(`Database connection error: ${error}`);
        });

        // If the Node process ends, close the Mongoose connection
        process.on('SIGINT', this.disconnect()).on('SIGTERM', this.disconnect());
    }

    /**
     * Disconnect to the database
     */
    disconnect() {
        return function () {
            mongoose.connection.close(function () {
                console.info(`Mongoose default connection with DB env: ${process.env.NODE_ENV} is disconnected through app termination`);
                process.exit(0);
            });
        };
    }
}

module.exports = DatabaseConnection;



