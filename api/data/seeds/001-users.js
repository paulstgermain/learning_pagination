
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'User1'},
        {user_name: 'User2'},
        {user_name: 'User3'},
        {user_name: 'User4'},
        {user_name: 'User5'},
        {user_name: 'User6'},
        {user_name: 'User7'},
        {user_name: 'User8'},
        {user_name: 'User9'},
        {user_name: 'User10'},
        {user_name: 'User11'},
        {user_name: 'User12'},
        {user_name: 'User13'},
        {user_name: 'User14'},
        {user_name: 'User15'}
      ]);
    });
};
