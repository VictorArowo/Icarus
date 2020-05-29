import { getConnection } from "../../../models";
import { NextApiRequest, NextApiResponse } from "next";
import Response from "../../../models/Response";

const connection = async () => await getConnection();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, query } = req;
  const id = query.id;

  switch (method) {
    case "GET":
      try {
        const responses = await Response(await connection()).find({
          formId: id as string,
        });
        res.status(200).json(responses);
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
