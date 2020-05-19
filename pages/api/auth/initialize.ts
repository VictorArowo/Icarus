import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, headers } = req;
  const { authorization: token } = headers;

  switch (method) {
    case "GET":
      try {
        return fetch("https://dev--3iltkce.auth0.com/userinfo", {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        })
          .then((response) => response.json())
          .then((data) => res.status(200).json(data))
          .catch((error) => res.status(500).json(error));
      } catch (error) {
        return res.status(500).json(error);
      }
      break;

    default:
      return res.status(500).json({ error: "Invalid HTTP verb" });
  }
};

export default handler;
