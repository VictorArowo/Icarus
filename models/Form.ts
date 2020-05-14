import { Document, SchemaTypes, Schema, Connection, Model } from "mongoose";

interface Option {
  name: string;
  id: string;
}

interface Element {
  id: string;
  text: string;
  title: string;
  supporting: string;
  options?: Option[];
  choices?: string[];
}

export interface IForm extends Document {
  body: Element[];
}

const formSchema: Schema = new Schema({
  body: { type: SchemaTypes.Array, required: true },
});

const collectionName = "Form";

const User = (connection: Connection): Model<IForm> =>
  connection.model(collectionName, formSchema);

export default User;
