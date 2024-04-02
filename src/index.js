import Express from "express";

const Server = Express();
Server.listen(8080, () => {
  console.log("servidor funcionando");
});
