import {Router} from 'express';

import {index, urlShortener, redirectToUrl} from '../controller/index';

// eslint-disable-next-line new-cap
const router = Router();

router.get('/', index);
router.get('/url/:urlId', redirectToUrl);
router.post('/', urlShortener);

export default router;
