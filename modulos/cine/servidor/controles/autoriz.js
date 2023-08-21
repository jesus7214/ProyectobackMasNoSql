const basicAuth = require("basic-auth");

const authMiddelware = (req, res, next) => {
  const user = basicAuth(req);

  if (
    !user ||
    (
      (user.name !== "jesus77" || user.pass !== "xyz11") &&
      (user.name !== "leydy88" || user.pass !== "xyz22") &&
      (user.name !== "alfredo57" || user.pass !== "xyz33")
    )
  ) {
    res.set("WWW-Authenticate", 'Basic realm="example"');
    return res.status(401).send("Autenticacion requerida");
  }
  
  next();
};

module.exports = authMiddelware;
