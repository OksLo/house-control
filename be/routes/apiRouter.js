const apiController = require('../controllers/apiController');
const express = require('express');
// const jsonParser = express.json();
const apiRouter = express.Router();

apiRouter.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
// owners
apiRouter.get('/owners', apiController.getOwners)
// accounts
apiRouter.get('/accounts', apiController.getAccounts);
apiRouter.put('/accounts', apiController.updateAccount);
// voting
apiRouter.get('/voting/:voteId', apiController.getVoting);
apiRouter.put('/voting', apiController.updateVoting);
apiRouter.put('/voting/votestatus', apiController.updateVotedStatusVoting);
// news
apiRouter.get('/news', apiController.getNews);

module.exports = apiRouter;
