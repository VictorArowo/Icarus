import mongoose, { Connection } from "mongoose";

const url: string = process.env.MONGO_DB!;

let connection: Connection | null = null;

export const getConnection = async (): Promise<Connection> => {
  if (connection == null) {
    console.log("creating connection");

    connection = await mongoose.createConnection(url, {
      bufferCommands: false, // Disable mongoose buffering
      bufferMaxEntries: 0, // and MongoDB driver buffering
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }

  return connection!;
};
