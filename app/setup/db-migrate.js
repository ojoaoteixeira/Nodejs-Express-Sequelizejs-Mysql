


const db = require('../../app/config/db.config.js');

export default function (server) {

    // force: true will drop the table if it already exists
    db.sequelize.sync({ force: true }).then(() => {
        console.log('Drop and Resync with { force: true }');
        // functions.roleInitial();
    });
}
