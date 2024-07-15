import express from "express";

const app = express() as any;
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "My projetct with docker and VPS",
  });
});

app.get("/docker", (req, res) => {
  res.status(200).json({
    message: "My docker is configured",
  });
});

app.get("/vps", (req, res) => {
  res.status(200).json({
    message: "My VPS is configured",
  });
});

app.listen(3000, () => {
  console.log("Server is running");
});
