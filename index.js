const twilio = require('twilio')

require('dotenv').config();

const authToken = process.env.TWILIO_AUTHTOKEN;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioNumber = process.env.TWILIO_NUMBER;
const receiverNumber = process.argv[2];

console.log(twilioNumber, receiverNumber)

const client = twilio(accountSid, authToken);

client.calls
    .create({
        from: twilioNumber,
        to: receiverNumber,
        url: 'http://demo.twilio.com/docs/voice.xml',
    })
    .then(call => console.log("Called:", call))
    .catch(e => console.log(e))
