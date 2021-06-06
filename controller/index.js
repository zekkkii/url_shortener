import Service from '../service/index';

const service = new Service();

export const index = (req, res)=>{
  // eslint-disable-next-line max-len
  res.send('Try to send on the body request an "url" and  we will return the short url');
};

export const urlShortener = async (req, res)=>{
  const url =req.body.url;
  const message = await service.saveUrl(url);

  res.send(message);
};

export const redirectToUrl = async (req, res)=>{
  const url = req.params.urlId;
  const urlToRedirect = await service.getUrl(url);
  console.log(urlToRedirect);

  if ( urlToRedirect !== null) {
    res.redirect(urlToRedirect.longUrl);
  };

  // eslint-disable-next-line quotes
  res.send("We couldn't find any matches with this url :'(");
};

