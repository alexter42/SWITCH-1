import Users from '../../collections/users';

export default function(root, params, context) {
  return Users.findOne(context.userId);
}
