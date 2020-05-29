import { getConnection } from "../../../models";
import { NextApiRequest, NextApiResponse } from "next";
import Response from "../../../models/Response";
import Form from "../../../models/Form";

const connection = async () => await getConnection();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const id = query.id;

  switch (method) {
    case "GET":
      try {
        const form = await Form(await connection()).findById(id);
        res.status(200).json(form);
      } catch (error) {
        res.status(500).json(error);
      }
      break;

    case "POST":
      try {
        const form = await Form(await connection()).findById(id);
        form?.responses.push(req.body);
        await form?.save();

        res.status(201).json({ message: "success" });
        break;
      } catch (error) {
        res.status(500).json(error);
      }
      break;

    default:
      res.status(500).json({ error: "Invalid HTTP verb" });
      break;
  }
};

export default handler;
