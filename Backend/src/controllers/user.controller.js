import { Users} from '../models/user.model.js';

const saveUserData = async (req,res)=>{
  const { fastName, lastName, phone, email, presentAddress, permanentAddress } =
    req.body;
  const user = await Users.create({
    fastName,
    lastName,
    phone,
    email,
    presentAddress,
    permanentAddress,
  });
  console.log(user);
  
  const createdUser = await Users.findById(user._id);
  return res
  .status(201)
  .json({message:"Form save successfuly",createdUser});
}

export {saveUserData};