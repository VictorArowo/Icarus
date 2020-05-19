import { Document, Schema, models, model, Connection, Model } from "mongoose";

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
  body: [
    {
      id: String,
      text: String,
      title: String,
      supporting: String,
      options: [
        {
          name: String,
          id: String,
        },
      ],
      choices: Array,
    },
  ],
});

const collectionName = "Form";

const User = (connection: Connection): Model<IForm> =>
  connection.model(collectionName, formSchema);

export default User;