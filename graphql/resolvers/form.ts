import mongoose from "mongoose";

import FormModel, { IForm } from "../../models/Form";
import { ApolloError } from "apollo-server-micro";

export default {
  Query: {
    getAllForms: async (
      parent: any,
      args: any,
      { dbConn }: { dbConn: mongoose.Connection }
    ): Promise<IForm[]> => {
      const Form: mongoose.Model<IForm> = FormModel(dbConn);
      let list: IForm[];
      try {
        list = await Form.find().exec();
      } catch (error) {
        console.error("> getForms error: ", error);
        throw new ApolloError("Error retrieving all notes");
      }
      return list;
    },

    getForm: async (
      _: any,
      { _id }: { _id: IForm["_id"] },
      { dbConn }: { dbConn: mongoose.Connection }
    ): Promise<IForm | null> => {
      const Form: mongoose.Model<IForm> = FormModel(dbConn);
      try {
        const note = await Form.findById(_id).exec();
        return note;
      } catch (error) {
        console.error("> getNote error: ", error);
        throw new ApolloError("Error retrieving all notes");
      }
    },
  },
  Mutation: {
    addForm: async (
      parent: any,
      body: any,
      { dbConn }: { dbConn: mongoose.Connection }
    ): Promise<IForm> => {
      const Form: mongoose.Model<IForm> = FormModel(dbConn);
      try {
        const note = await Form.create(body);
        return note;
      } catch (error) {
        console.error("> saveNote error: ", error);
        throw new ApolloError("Error creating note");
      }
    },
  },
};
