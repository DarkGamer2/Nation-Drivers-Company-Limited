require("dotenv").config();
const express=require('express');
const app = express();
const Student=require("./models/Student");
const nodemailer=require("nodemailer");
const cors=require("cors");
const Admin=require("./models/Admin");
const bcrypt=require("bcryptjs");
const passport = require("passport");
const expressSession = require("express-session");
const helmet=require("helmet");

//MIDDLEWARE REQUIRED
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressSession({
  resave: false,
  saveUninitialized: true,
  secret: 'bla bla bla' 
}));

app.use(passport.initialize());
app.use(passport.session());
require("./auth/passportConfig")(passport);

app.use(helmet());

//ROUTES
app.post('/api/signup',(req,res)=>{
const student=new Student(req.body);

student.save((err,data)=>{
  if(err){
    console.log(err.response.data);
  }
  else{
    console.log(data);
  }
}).then(async (res)=>{
   
        let transporter=nodemailer.createTransport({
            host: 'localhost',
            port: 587,
            secure: false,
            auth: {
                user: "nodejstester@gmail.com",
                pass: "Cartownhess53"
            },
        })
        let confirmationEmail=await transporter.sendMail({
            from: ` "Kameer Hosein" <nodejstester@gmail.com>`,
            to:"kameer-hosien@outlook.com",
            subject:`${student.studentFullName} Has Signed Up For The Course!`,
            text:`Hello Mr.Huggins, here are the details of the student that signed up for your defensive
            driving course: \n
            Student Name: ${student.studentFullName}\n
            Student Email: ${student.studentEmail}\n
            Student Phone: ${student.studentPhoneNumber}\n
            Best Regards`,
        })

        console.log(`Message Sent: ${confirmationEmail.messageId}`);
        console.log(res.data);
    }
).then((email)=>{
      console.log(email);
    })
})

app.post('/api/adminlogin',(req,res)=>{
  passport.authenticate("local",(err,admin)=>{
    if(err) throw err;
    if(!admin){
      res.send("No User Found");
    }
    else{
      req.logIn(admin,err=>{
        if(err) throw err;
        res.send("Login Successful");
        console.log(req.user);
      })
    }
  })
  (req,res,next)
})

app.post('/api/adminsignup',(req,res)=>{
  Admin.findOne({adminUserName:Admin.adminUserName},async (err,doc)=>{
    if(err){
      console.log(err.response.data);
    }
    else if(doc){
      res.send("The Admin User Entered Already Exists");
    }
    else{
      if(!doc){
        const salt=await bcrypt.genSalt(10);
        const password=req.body.adminPassword;
        const hashedPassword=await bcrypt.hash(password,salt);

        const admin=new Admin({
          adminUserName:req.body.adminUserName,
        adminPassword:hashedPassword,
          adminEmail:req.body.adminEmail
        });

        admin.save((err,data)=>{
          if(err){
            console.log(err.response.data);
          }
        else{
            console.log(`${data} was saved successfully`);
        }});
      }
    }
  })
});

app.get("/api/admin",(req,res)=>{
    res.send(req.admin);
})

app.put("/api/admin/resetpassword",(req,res)=>{

})

//DASHBOARD API ROUTING
app.get('/api/admin/dashboard/viewrecords',(req,res)=>{
    Student.find((err,data)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(data);
      }
    })
});

app.get('/api/admin/dashboard/viewrecords/:id',(req,res)=>{

}); 

app.delete('/api/admin/dashboard/viewrecords/:id',async (req,res)=>{
await Student.findByIdAndDelete({_id:req.params.id}).then((err,student)=>{
  if(err){
    console.error(err);
  }
  else{
    res.send("Student Record was deleted successfully");
    console.log(student);
  }
})
});

app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
});