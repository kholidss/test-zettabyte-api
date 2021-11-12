import { userModel } from "../models/user.model";

const register = async (bodyRegister) => {
  const newUser = new userModel(bodyRegister);
  return await newUser.save();
};

export default { register };
