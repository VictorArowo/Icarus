import { gql } from "apollo-server-micro";

export default gql`
  # type User {
  #   _id: ID!
  #   email: String!
  #   username: String!
  #   createdAt: String!
  # }

  type Option{
    name: String!
    id: String!
  }

  type Form{
  _id: ID!;
  text: String!;
  title: String!;
  supporting: String!;
  options: [Option!];
  choices: [String!];
  }

  # input RegisterInput {
  #   username: String!
  #   password: String!
  #   confirmPassword: String!
  #   email: String!
  # }

  type Query{
    getForms: [Form]
  }

  type Mutation {
    # register(registerInput: RegisterInput): User!
    # login(username: String!, password: String!): User!
    addForm(form: Form!): Form!
  }
`;
