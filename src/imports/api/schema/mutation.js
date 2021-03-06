const mutation = `
  input UserProfileInput {
    firstName: String!
    lastName: String!
    street: String!
    postalNumber: Int!
    city: String!
    birthday: Date!
    phoneMobile: String
    hometown: String
    regionalOffice: String
  }

  input File {
    name: String!
    type: String!
    size: Int!
    buffer: Buffer!
  }

  input Upload {
    name: String!
    type: String!
    size: Int!
    path: String!
  }

  type Mutation {
    # User 
    updateUserAvatar(avatar: File!, userId: ID): User
    updateEmail(email: String!, userId: ID): User
    updateUserProfile(profile: UserProfileInput, userId: ID): User 
    saveFilePoints(pointsFile: Upload!): User! 
  }`;

export default mutation;
