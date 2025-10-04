const { UserRepository } = require("../repositories");

const signupService = async (data) => {
  try {
    const userId = await UserRepository.create(data);
    const user = await UserRepository.findById(userId);
    return user;
  } catch (error) {
    throw error;
  }
};
const loginService = (data) => {};

module.exports = { signupService, loginService };
