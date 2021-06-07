# url_shortener

This app reduce long urls. Built in NodeJS, Express, Postgres and Sequelize as ORM.

## Usage

```bash
npm install   # ---- install all dependencies
npm run dev   # ---- this start the app
```

Use any API tester and send a POST request to http://localhost:3000/, send `url` in the body request and the value (any link). The app will return the `id` (short url) and by using `http://localhost:3000/url/:id`, you will be redirected to the original website registered (link).

Remenber to add the complete url with https://
