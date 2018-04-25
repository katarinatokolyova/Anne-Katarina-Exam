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