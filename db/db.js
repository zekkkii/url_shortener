import url from './models/url';

/* eslint-disable require-jsdoc */
class DB {
  async saveUrls(longUrl, shortUrl) {
    try {
      await url.create({longUrl: longUrl, shortUrl: shortUrl});
      return true;
    } catch {
      return false;
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
