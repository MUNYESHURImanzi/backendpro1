import signUp from '../models/register.js';
import signIn from '../models/signin.js';

const signInController = async (req, res) => {
  try {
    const data = req.body;
    const check = await signUp.findOne({ email: data.email });
    if (check) {
      return res.status(409).json({
        message: "Welcome to home",
      });
    } else {
      let signInstance = new signIn({
        email: data.email,
        password: data.password,
      });

    

      res.status(200).json({
        message: "Go back to sign up",
      });
    }
  } catch (err) {
    console.log("Error caught:", err);
    res.status(500).json({
      message: "Failed to process the data",
      error: "Failed",
    });
  }
};

export default signInController;