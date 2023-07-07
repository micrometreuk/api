import fs from "fs";

export default function handler(req, res) {
  const body = req.body;
  console.log(body);
  //fs.writeFileSync("data/data.json", JSON.stringify(body, null, 2));
  fs.writeFileSync("data/data.md", `---
firstName: '${body.firstName}'
lastName: '${body.lastName}'
---\n 
  `);

  if (!body.first || !body.last) {
    return res.json({ data: "First or last name not found" });
  }

  res.json({ data: `${body.first} ${body.last}` });
//  fs.writeFileSync("data/data.md", `---\n ${body.first} : ${body.last}\n---`);
}
