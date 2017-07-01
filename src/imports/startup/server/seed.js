import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default () => {
  if (Meteor.users.find().count() === 0) {
    let user = {
      email: 'admin@example.com',
      password: 'password',
      firstname: 'Admin',
      lastname: 'Admin',
    };

    var userId = Accounts.createUser({
      email: user.email,
      password: user.password,
      profile: {
        firstname: user.firstname,
        lastname: user.lastname,
        name: `${user.firstname} ${user.lastname}`,
      },
    });

    Meteor.users.update(userId, { $set: { 'emails.0.verified': true } });
  }
};
