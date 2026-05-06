const axios = require("axios")

const { LOG_API } = require("./constants")
const { getToken } = require("./auth")

const Log = async (stack,level,packageName,message) => {
  try {
    const token = getToken()
    const response = await axios.post(
    LOG_API,
    {
        stack,
        level,
        package: packageName,
        message
    },
    {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    return response.data
  }
  catch (err) {
    console.log("Logging failed")
  }
}

module.exports = Log