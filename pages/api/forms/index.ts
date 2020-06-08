import { getConnection } from "../../../models";
import { NextApiRequest, NextApiResponse } from "next";
import Form from "../../../models/Form";

const connection = async () => await getConnection();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const form = await Form(await connection()).create({
          ...req.body,
          responses: [],
          isActive: true,
        });
        res.status(201).json(form);
        break;
      } catch (error) {
        res.status(500).json(error);
      }
      break;

    case "GET":
      try {
        const forms = await Form(await connection()).find();
        res.status(200).json(forms);
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
