# url_shortener
This app  reduce long urls . Built in nodejs, express, postgres and sequelize as orm. 

***Usage***
npm install   ----install all dependencies
npm start  ----this start the app

Use any api tester and send a post req to http://localhost:3000/, send  'url' in the body req and the value(any link). The app will return the 'id' (short url) and by using http://localhost:3000/url/( id/link provided ), you will be redirected to the original website registered(link).

Remenber to add the complete url with https://
