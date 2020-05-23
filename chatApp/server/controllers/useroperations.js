const usrModel = require('../models/user');

const userOperations = {
    add(regUser, res) {
        usrModel.create(regUser, (err) => {
            if (err) {
                res.send('Error occured during registering');
                //console.log('Error during Add ', err);
            }
            else {
                res.send('User Record Added...');
            }
        })
    },

    search(regUser, res) {
        usrModel.findOne({ 'userid': regUser.userid }, (err, doc) => {
            if (err) {
                res.send('Something went wrong');
                //console.log('Error during search ', err);
            } else if (doc) {
                res.send('Record Found');
            } else {
                res.send('Record not found');
            }
        })
    },

    list(regUser, res) {
        usrModel.find({ 'userid': { $ne: regUser.userid } }, (err, doc) => {
            if (!err) {
                const arr = JSON.stringify(doc);
                res.send(arr);
            }
            else {
                res.send("Error Occured");
            }
        })
    }

}

module.exports = userOperations;