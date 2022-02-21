const express = require("express");
const PORT = 5000; 
const app = express();
const cors = require("cors");
const { blogModel } = require("./Models/blogs");
const { SignupModel } = require("./Models/Registration/Signup"); 

 
app.use(express.json())
app.use(cors())


app.post("/addBlog", async (req, res) => {
  const blog = req.body;
  let createBlog = await blogModel.create({
    blogTitle: blog.blogTitle,
    blogSubTitle: blog.blogSubTitle,
    uploadDate: blog.uploadDate,
    blogDescription: blog.blogDescription,
  });
  return res.json(createBlog);
});

// Get All blogs List
app.get("/showBlogs", async (req, res) => {
  const blogList = await blogModel.findAll({});
  return res.json(blogList);
});
// Get  All blogs list ends here

// Get blogs by id Starts herer

app.get("/showBlogs/:id", async (req, res) => {
  const id = req.params.id;
  const blogId = await blogModel.findOne({ where: { id: id } });
  return res.json(blogId);
});


app.get('/deleteRecord/:id', async (req,res) => {    
  let uuid = req.params.id
  try
  {
  let blogid = await blogModel.findOne({where: {id: uuid }})
  blogid.destroy(); 
  }
  catch(err){
    return res.json(err);
  }
  return res.status(204).json({uuid});
  
})



// app.get("/showRecord/:id", async (req, res) => {
//   const id = req.params.id;
//   const blogId = await blogModel.findOne({ where: { id: id } });
//   return res.json(blogId);
// });

app.put('/updateBlogs/:id', async (req, res) => {
  const blog = req.body;
  const uuid = req.params.id; 
  const updatedBlog = await blogModel.update(blog, {where: {id: uuid}})
  const blogData = await blogModel.findOne({where: {id:uuid}})
  return res.status(202).json(blogData) 
})
 
// Get blogs by id ends herer

// Signup Apis
app.post("/adminSignup", async (req, res) => {
  const newUser = req.body;
  let createUser = await SignupModel.create({
    fullName: newUser.fullName,
    userName: newUser.userName,
    userEmail: newUser.userEmail,
    password: newUser.password,
    confirmPassword: newUser.confirmPassword,
  });
  return res.json(createUser);
});


app.get("/getSignUp", async (req, res) => {
  const usersData = await SignupModel.findAll({});
  return res.json(usersData)

})
// Signup Apis ends here


// Login starts here

app.get("/login/:email/:password", async (req, res) => {
  let uuemail = req.params.email;
  let uupassword = req.params.password;
  const usersData = await SignupModel.findOne({where: {userEmail:uuemail, password: uupassword}});
  return res.json(usersData);
});

// Login ends here



app.get("/", (req, res) => {
  return res.send("Hello adnan");
});

app.listen(PORT, (res) => {
  console.log("Hello there this is running", PORT);
});
