// Initializing sequelize with a SQLite database
const Sequelize = require('sequelize')

// Pasword hashing function 
const brypt = require('bcrypt')

const sequelize = new Sequelize('sqlite:./data/database.sqlite', {
    logging: console.log
})

// Why this?
const db = {}

const Usertable = sequelize.define('user', {
    userid: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    username: {type: Sequelize.STRING(20), allowNull: false, unique:true},
    password: {type: Sequelize.STRING(20),allowNull: false},
})

const Dormitorytable = sequelize.define('dormitorytable', {
    dormitoryid: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    dormname: {type: Sequelize.STRING(20), allowNull: false, unique:true},
})

const Eventtable = sequelize.define('event', {
    eventid: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    eventname: {type: Sequelize.STRING(20), allowNull: false,},
    eventmessage: {type: Sequelize.STRING(100),allowNull: false},
    username: {type: Sequelize.STRING(20), allowNull: false, unique:true},
    dormitoryid: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
})

// In-between table
const Eventparticipants = sequelize.define('eventparticipants', {
    eventid: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    userid: {type: Sequelize.INTEGER, autoIncrement: true, unique:true},
    eventstatus: {type: Sequelize.BOOLEAN},
})

const Commenttable = sequelize.define('commenttable', {
    commentid: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unique:true},
    eventid: {type: Sequelize.INTEGER, unique:true},
    userid: {type: Sequelize.INTEGER, unique:true},
    comment: {type:Sequelize.STRING(100)},
})

// Foreign key associations ?
db.userid.belongsTo(db.Usertable);
db.eventid.belongsTo(db.Eventtable);
db.dormitoryid.belongsTo(db.Dormitorytable);
db.username.belongsTo(db.Usertable);


// Associations

// Dormitory has many events
// Event belongs to one dormitory
db.Dormitorytable.hasMany(db.Eventtable)
db.Eventtable.hasOne(db.Dormitorytable)

//  Users can create many comments
// A comment only has one user
db.Usertable.hasMany(db.Commenttable)
db.Commenttable.hasOne(db.Usertable)

// One event can have many users
// Users can go to many events
db.Eventtable.hasMany(db.Usertable)
db.Usertable.hasMany(db.Eventtable)


// multi tenancy

const initializeUsers = function (tenantId) {
    const users = sequelize.define(‘users’, {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, unsigned: true},
    username: Sequelize.STRING(50), 
    email: Sequelize.STRING(50),
    tenant_id: Sequelize.INTEGER,
    }, {
    defaultScope: {
    where: {
    tenant_id: tenantId,
    },
    },
    });
   users.hook(‘beforeValidate’, function (model) {
    model.tenant_id = tenantId;
    });
    return users;
   };
   module.exports = initializeUsers;