const { ObjectId } = require('mongodb')
const { db } = require('./')
const findByUserName = async (username) => {
    const user = await db.users.findOne({username: username});
    return user;
};

const findById = async (_id) => {
    const user = await db.users.findOne({_id: ObjectId(_id)});
    return user;
}

const insertUser = async (user) => {
    await db.users.insertOne(user);
    return user;
}

const findAllUsers = async () => {
    return await db.users.find({}).toArray();
};

module.exports = { findByUserName, insertUser, findAllUsers, findById };