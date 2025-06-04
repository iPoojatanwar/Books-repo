import User from "../Model/userModel.js";
import bcrypt from "bcrypt"
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

  
  const haspassword= await bcrypt.hash(password,10)

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({
      fullname,
      email,
      password:haspassword,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" , user:{
      _id: newUser._id,
      fullname: newUser.fullname,
      email: newUser.email,
      password:newUser.password
    } });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
 
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
   
    const user = await User.findOne({ email });

   
    console.log("Found user:", user);

    
    if (!user) {
      return res.status(400).json("Invalid credentials");
    }

    
    const isMatch = await bcrypt.compare(password, user.password);

    
    console.log("Password match:", isMatch);

   
    if (!isMatch) {
      return res.status(400).json("Invalid credentials");
    }

   
    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });

  } catch (error) {
    console.log("Error during login:", error);
    res.status(500).json("Server error");
  }
};
