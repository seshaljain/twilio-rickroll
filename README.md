# RickRoll via Twilio

A NodeJS script to automate a RickRoll mobile call via Twilio.

## Setup

Make sure you have added Twilio Account SID and AuthToken to the `.env` file
``` sh
TWILIO_ACCOUNT_SID="<your_account_sid_here>"
TWILIO_AUTHTOKEN="<your_authtoken_here>"
TWILIO_NUMBER="<your_twilio_number_here>"
```

``` sh
npm install
```

## Usage
``` sh
node index.js <E164_formatted_receiver_number>
```

## Credits
Made with help from [Aditya Oberai's blog](https://dev.to/adityaoberai/rick-roll-your-friends-using-appwrite-twilio-and-net-4180)
