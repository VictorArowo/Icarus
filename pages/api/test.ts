import { getConnection } from "../../models";
import { NextApiRequest, NextApiResponse } from "next";

getConnection();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.json({ test: "test" });
};
