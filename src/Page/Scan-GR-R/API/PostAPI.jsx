import axios from "axios";
const PostAPI = async (datas, url) => {
  let config = {
    method: "post", // Changed from "get" to "post"
    maxBodyLength: Infinity,
    url: url,
    headers: {
      "Content-Type": "application/json",
    },
    data: datas, // For POST requests, parameters should be in the "data" property
  };

  try {
    const response = await axios.request(config);
    if (response.data.status === "OK") {
      return {
        status: "OK",
        data: response.data.data,
        message: response.data.message,
      };
    } else {
      return {
        status: "ERROR",
        data: response.data,
        message: response.data.message,
      };
    }
  } catch (error) {
    console.error("API Error:", error.message);
    return {
      status: "Catch",
      data: [],
      message: error.message,
    };
  }
};

export default PostAPI;
