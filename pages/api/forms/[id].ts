import { getConnection } from "../../../models";
import { NextApiRequest, NextApiResponse } from "next";
import Form from "../../../models/Form";
import Response from "../../../models/Response";

const connection = async () => await getConnection();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const id = query.id;

  switch (method) {
    case "GET":
      try {
        const form = await Form(await connection()).findById(id);
        if (form) return res.status(200).json(form);

        res.status(404).json({ error: "Form not found" });
      } catch (error) {
        res.status(500).json(error);
      }
      break;

    case "POST":
      try {
        const response = await Response(await connection()).create(req.body);
        res.status(201).json(response);
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
