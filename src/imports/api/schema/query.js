const query = `
type Query {
  me: User
  user(_id: ID!): User
  allUsers: [User]!
}`;

export default query;
