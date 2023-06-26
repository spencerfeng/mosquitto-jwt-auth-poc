const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://localhost:1880', {
  username: "anonymous",
  password: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJzIjpbIisvcHVibGljLyMiXSwicHVibCI6W10sImlhdCI6MTY4NzU5Mzg2NSwiZXhwIjo0ODQzMzUzODY1LCJzdWIiOiJhbm9ueW1vdXMifQ.nic6_bE94RVd-iWvKFtXYIZT1cpGLDSgMoPGBzHFsgJO2QjdEmXa7rU_LY7ngL8ADErXGuKpqXoaEtSmHpI5lRzu2ECgi1SoCstQUnn-GYAq7cH8TUHaIR3odjqu7aCc74MsksAmhaRsbAzpKY01ziuYYmfqo6QMwrXPqB6hRc5hg3nzQDChscFfx1d8q6P2STALfYPAV3eZPwWzD8wszzuTD4vaPd7Uw66qusCuTMYQgR-snZeG7pmOLiZouTHypSD7btmFrgLdNtPk8iaYY6Anzfc8VejlWiJrlWCFJx6_pIk9BPGAjR73l3MU1y3UbdBhPtrrwwqzfVv5sLPL1A"
})

client.on('connect', () => {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', (topic, message) => {
  // message is Buffer
  console.log(message.toString())
  client.end()
})

client.on('error', (error) => {
  console.log('mqtt error', error)
})