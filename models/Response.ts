import { Document, Schema, Connection, Model, SchemaTypes } from "mongoose";

interface IResponse extends Document {
  response: Record<string, string>;
  formId: string;
}

const formSchema: Schema = new Schema({
  formId: String,
  response: [SchemaTypes.Mixed],
});

const collectionName = "Reponse";

const User = (connection: Connection): Model<IResponse> =>
  connection.model(collectionName, formSchema);

export default User;
