# Game feedback app

#### Default login:
* Email: cool@cool.com, Password: coolcool

#### Local deploy Instructions:
* Swap out the firebase config in ```config/constants``` with your own
* ```npm install```
* ```npm start```
* Visit ```localhost:3000```

#### Firebase deploy Instructions:
* ```npm i -g firebase-cli```
* ```firebase init```
* ```npm run build``` Make sure to use "build" instead of "public" as deploy directory
* ```firebase deploy```

#### TODO
- [ ] Chart view of rating VS past-week for each game
- [ ] User Permssions for chart view and table view
- [x] Auth Router
- [x] Add Feedback
- [x] Feedback limit to 1 per user per session
- [x] Feedback table view
    - [x] Filter by attributes (click on header of table)

#### DB Struct
```
{
    feedbacks:[{
        comment: "",
        dateTime: "",
        email: "",
        game: "",
        stars: "",
        timeStamp: ""
    }],
    games[{
        gameName: ""
    }],
    users[{
        email: "",
        uid: ""
    }]
}
```
