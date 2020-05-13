import { ApolloServer } from "apollo-server-micro";
import { getConnection } from "../../models";

import typeDefs from "../../graphql/typeDefs";
import resolvers from "../../graphql/resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => {
    const dbConn = await getConnection();
    return { dbConn };
  },
  playground: true,
  introspection: true,
});

export default apolloServer.createHandler({ path: "/api/graphql" });
