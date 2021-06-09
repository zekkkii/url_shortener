/* eslint-disable require-jsdoc */
/* eslint-disable padded-blocks */
/* eslint-disable space-before-blocks */
import idGenerator from '../helpers/shortIdGenerator';
import DB from '../db/db';

class Service {
  constructor(){
    this.db = new DB();
  };

  async saveUrl(url){
    const idGenerated = idGenerator(url);
    const response = await this.db.saveUrls(url, idGenerated);
    return response;
  };

  async getUrl(url){
    const response = await this.db.getUrl(url);
    return response;
  };
}

export default Service;
