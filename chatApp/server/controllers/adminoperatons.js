const admModel = require('../models/admin');


const adminOperations = {
    add(regUser, res) {
        admModel.create(regUser, (err) => {
            if (err) {
                res.send('Error occured during registering');
                console.log('Error during Add ', err);
            }
            else {
                res.send('Admin Record Added...');
            }
        })
    },

    search(regUser, res) {
        admModel.findOne({ 'userid': regUser.userid }, (err, doc) => {
            if (err) {
                res.send('Something went wrong');
                console.log('Error during search ', err);
            } else if (doc) {
                if (regUser.userid == doc.userid) {
                    res.send('Record Found');
                } else {
                    res.send('Record not found');
                }
            } else {
                res.send('Invalid userid');
            }
        })
    }

}

module.exports = adminOperations;