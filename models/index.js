const Blog = require('./blog');
const User = require('./user');

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { Blog, User };
