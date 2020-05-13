// const userResolvers = require("./users");
const formResolvers = require("./fom");

export default {
  Mutation: {
    // ...userResolvers.Mutation,
    ...formResolvers.Mutation,
  },
  Query: {
    ...formResolvers.Query,
  },
};
