import Service from '../service/index';

const service = new Service();

export const index = (req, res)=>{
  // eslint-disable-next-line max-len
  res.send('Try to send on the body request an "url" and  we will return the short url');
};

export const urlShortener = async (req, res)=>{
  const url =req.body.url;
  let message = 'Nothing saved';

  console.log(url);
  const isSaved = await service.saveUrl(url);

  if (isSaved) {
    message = 'data Saved';
  };
  res.send(message);
};

export const redirectToUrl = async (req, res)=>{
  const url = req.params.urlId;
  const urlToRedirect = await service.getUrl(url);
  console.log(urlToRedirect);

  if ( urlToRedirect !== null) {
    res.redirect(urlToRedirect.longUrl);
  };

  res.send('No encontramos nada relacionado con esta url en la base de datos');
};

