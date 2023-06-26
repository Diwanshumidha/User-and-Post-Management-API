const prisma = require("../prisma/index");
const cookieToken = require("../utils/cookieToken");

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("Please provide all information");
    }

    const user = await prisma.User.create({
      data: {
        name,
        email,
        password,
      },
    });

    const token = cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Please provide all information");
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("No User Found");
    }
    console.log(user,password)
    if (user.password !== password) {
      throw new Error("Password Is incorrect");
    }

    cookieToken(user,res)
  } catch (error) {
    throw new Error(error);
  }
};


exports.logout = async (req,res,next) =>{
    try {
        res.clearCookie('token')
        res.status(200).json({
            success:true
        })
    } catch (error) {
        throw new Error(error);
    }
}