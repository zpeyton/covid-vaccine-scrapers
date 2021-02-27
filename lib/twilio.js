var twilio = require('twilio');

function init() {
    return new twilio(process.env.TWILIOACCOUNTID, process.env.TWILIOAUTHTOKEN);
}

function sendSMS(body) {
    const client = init();
    console.log(`Twilio: sendSMS "${body}"`);
    return new Promise((resolve, reject) => {
        client.messages.create({
            body,
            to: process.env.TWILIOMAINNUMBER,  // Text this number
            from: '+18049770075' // From a valid Twilio number
        })
            .then((message) => resolve(message))
            .catch((error) => reject(error));
    });
}

function makeCall(twiml) {
    const client = init();
    console.log(`Twilio: makeCall "${twiml}"`);
    return new Promise((resolve, reject) => {
        client.calls.create({
            twiml,
            to: process.env.TWILIOMAINNUMBER,  // Text this number
            from: '+18049770075' // From a valid Twilio number
        })
            .then((message) => resolve(message))
            .catch((error) => reject(error));
    });
}

module.exports = {
    init,
    sendSMS,
    makeCall,
}
