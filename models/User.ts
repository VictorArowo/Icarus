import { Document, SchemaTypes, Schema, Connection, Model } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  email: string;
  createdAt: Date;
}

const userSchema: Schema = new Schema({
  username: { type: SchemaTypes.String, required: true },
  password: { type: SchemaTypes.String, required: true },
  email: { type: SchemaTypes.String, required: true },
  createdAt: { type: SchemaTypes.Date, required: true },
});

const collectionName = "User";

const User = (connection: Connection): Model<IUser> =>
  connection.model(collectionName, userSchema);

export default User;
