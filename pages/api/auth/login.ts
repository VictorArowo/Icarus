import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { email, password } = req.body;

        const urlEncoded = new URLSearchParams({
          username: email,
          password,
          grant_type: "password",
          client_id: process.env.AUTH0_CLIENT_ID!,
        });

        return fetch("https://dev--3iltkce.auth0.com/oauth/token", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncoded,
        })
          .then((response) => response.json())
          .then((data) => res.status(200).json(data))
          .catch((error) => res.status(500).json(error));
      } catch (error) {
        return res.status(500).json(error);
      }

    default:
      return res.status(500).json({ error: "Invalid HTTP verb" });
  }
};

export default handler;
