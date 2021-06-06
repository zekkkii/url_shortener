import url from './models/url';

/* eslint-disable require-jsdoc */
class DB {
  async saveUrls(longUrl, shortUrl) {
    try {
      await url.create({longUrl: longUrl, shortUrl: shortUrl});
      return `Your short url for ${longUrl} is : ${shortUrl}`;
    } catch {
      return 'Something happened, we had an error';
    };
  };

  async getUrl(urlId) {
    let response = {};

    try {
      response = await url.findOne({
        where: {
          shortUrl: urlId,
        },
      });
    } catch (err) {
      console.log(err);
    };

    return response;
  };
};

export default DB;
