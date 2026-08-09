const mongoClient = require('../db');
const ObjectId = require('mongodb').ObjectId;

const COLLECTIONS = {
  rooms: 'rooms',
  owners: 'owners',
  news: 'news',
}

const DB_NAME = process.env.DB_NAME;

/* Owners */

exports.getOwners = async (req, res) => {
  const collection = mongoClient.db(DB_NAME).collection(COLLECTIONS.owners);
  const owners = await collection.find({}).toArray();
  res.send(owners);
}


/* Accounts */
exports.getAccounts = async (req, res) => {
  const accounts = [];
  const accountsCursor = mongoClient.db(DB_NAME).collection(COLLECTIONS.rooms).aggregate( [
    {
      $lookup:
        {
          from: COLLECTIONS.owners,
          localField: "cadastralNumber",
          foreignField: "cadastralNumber",
          as: COLLECTIONS.owners
        }
    }
  ] );
  for await (const acc of accountsCursor) {
    accounts.push(acc);
  }
  res.send(accounts);
}

exports.updateAccount = async (req, res) => {
  if (!req.body) return res.status(400).send('No body');
  const collection = mongoClient.db(DB_NAME).collection(req.body.votingId);
  await collection.findOneAndUpdate({"_id": new ObjectId(req.body._id)}, {$set: req.body.updated});
  res.send(req.body);
}

/* Voting */
exports.getVoting = async (req, res) => {
  const collection = mongoClient.db(DB_NAME).collection(req.params.voteId);
  const voting = await collection.find({}).toArray();
  res.send(voting);
}

exports.updateVotedStatusVoting = async (req, res) => {
  if (!req.body) return res.status(400).send('No body');
  const collection = mongoClient.db(DB_NAME).collection(req.body.voteId);
  await collection.findOneAndUpdate({"_id": new ObjectId(req.body._id)}, {$set: {hasVoted: req.body.hasVoted}});
  res.send(req.body);
}

exports.updateVoting = async (req, res) => {
  if (!req.body) return res.status(400).send('No body');
  const collection = mongoClient.db(DB_NAME).collection(req.body.votingId);
  await collection.findOneAndUpdate({"_id": new ObjectId(req.body._id)}, {$set: req.body.updated});
  res.send(req.body);
}

/* News */

exports.getNews = async (req, res) => {
  const collection = mongoClient.db(DB_NAME).collection(COLLECTIONS.news);
  const news = await collection.find({}).toArray();
  res.send(news);
}