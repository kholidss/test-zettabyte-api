import healthService from "../services/health.services";

import { BaseResponse } from "../utils/helpers/base-response.handler";

const healthCheck = async (req, res) => {
  try {
    const result = await healthService.healthCheck();
    const dateNow = new Date(Date.now()).toISOString();

    return res.json(
      BaseResponse.success(200, true, "Success get data", {
        result: result,
        time: dateNow,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export default { healthCheck };
