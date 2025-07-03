const { use } = require("react");

const createUser = async (req, res) => {

};
  try {  const {name,email,mobileNo, age } = req.body;

    const UsersData = {
      name,
      email,
      mobileNo,
      age
    };
    await UsersData.save(UsersData);

    res.status(201).json( {data: UsersData, message: "User created successfully!" });
   
  } catch (error) {
    console.log(error)
  };

  const getUsers = async (req, res) => {

};
  try {
   const allUsers = await Users.find();
    res.status(201).json({ data: allUsers, message: "All users fetched successfully!" });
  } catch (error) {
    console.log(error)
  };

  const deletUser = async (req, res) => {

};
  try {
   const {UserId} = req.body;
   await users.findByIdAndDelete({ _id : UserId });
    res.status(201).json({ message: "User deleted successfully!" });
    
  } catch (error) {
    console.log(error)
  };

  const updateUser = async (req, res) => {

};
  try {
   res.status(201).json({ message: "User updated successfully!" });
  } catch (error) {
    console.log(error)
  };
module.exports = (
    { createUser, getUsers, deletUser, updateUser }
)