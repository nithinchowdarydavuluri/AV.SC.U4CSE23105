const axios = require("axios")

const LOG_API =
  "http://20.207.122.201/evaluation-service/logs"

const Log = async (
  stack,
  level,
  packageName,
  message
) => {

  try {

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
          Authorization:
            `Bearer ${process.env.ACCESS_TOKEN}`
        }
      }
    )

    console.log(response.data)

  }
  catch (error) {

    console.log(
      error.response?.data || error.message
    )

  }

}

module.exports = Log