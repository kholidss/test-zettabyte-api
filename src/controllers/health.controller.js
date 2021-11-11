import healthService from "../services/health.services";

const healthCheck = async (req, res) => {
  try {
    const result = await healthService.healthCheck();
    const dateNow = new Date(Date.now()).toISOString();
    return res.status(200).json({ message: dateNow, time: dateNow });
  } catch (error) {
    console.log(error);
  }
};

export default { healthCheck };
