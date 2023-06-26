const jwt = require("jsonwebtoken")
const fs = require("fs")

const prvKey = fs.readFileSync("./mosquitto/secrets/jwtRS256.key", {encoding: "utf-8"})
const pubKey = fs.readFileSync("./mosquitto/secrets/jwtRS256.key.pub", {encoding: "utf-8"})

const genToken = (subject, claims, expiresIn = "100 days") => {
  const token = jwt.sign(claims, prvKey, {
    algorithm: "RS256",
    expiresIn,
    subject
  })

  const payload = jwt.verify(token, pubKey, { complete: true })

  console.log("\nGenerating Token for: ", subject)
  console.log("Token: ")
  console.log(token)
  console.log("Verified Payload: ")
  console.log(payload)
}

genToken("anonymous", {
  "subs": ["+/public/#"],
  "publ": []
}, "100 years")