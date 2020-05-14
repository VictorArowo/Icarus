// const userResolvers = require("./users");
const formResolvers = require("./form");

export default {
  Mutation: {
    // ...userResolvers.Mutation,
    ...formResolvers.Mutation,
  },
  Query: {
    ...formResolvers.Query,
  },
};
