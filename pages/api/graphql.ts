import { ApolloServer, gql } from "apollo-server-micro";
import { getConnection } from "../../models";

// import typeDefs from "../../graphql/typeDefs";
// import resolvers from "../../graphql/resolvers";

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    users(parent: any, args: any, context: any) {
      return [{ name: "Nextjs" }];
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  //   context: async () => {
  //     const dbConn = await getConnection();
  //     return { dbConn };
  //   },
  playground: true,
  introspection: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
