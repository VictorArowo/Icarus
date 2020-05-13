import { Document, SchemaTypes, Schema, Connection, Model } from "mongoose";

interface Option {
  name: string;
  id: string;
}

export interface IForm extends Document {
  id: string;
  text: string;
  title: string;
  supporting: string;
  options?: Option[];
  choices?: string[];
}

const formSchema: Schema = new Schema({
  id: { type: SchemaTypes.String, required: true },
  text: { type: SchemaTypes.String, required: true },
  title: { type: SchemaTypes.String, required: true },
  supporting: { type: SchemaTypes.String, required: true },
  options: { type: SchemaTypes.Array, required: true },
  createdAt: { type: SchemaTypes.Array, required: true },
});

const collectionName = "Form";

const User = (connection: Connection): Model<IForm> =>
  connection.model(collectionName, formSchema);

export default User;
