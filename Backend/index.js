const port=4000;
const express=require("express")
const app =express("")
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const multer=require("multer")
const path=require("path")
const cors=require("cors");
const { error } = require("console");

app.use(express.json());
app.use(cors());

//api creation
app.get("/",(req,res)=>{
    res.send("express app is running")})

mongoose.connect("mongodb://localhost:27017/ecom?")


//api creation
app.listen(port,(error)=>{
    if(!error)
    {
        console.log("server is running on port 4000",port)
    }
    else{
        console.log("error",+error)
    }
})

//image storage
const storage = multer.diskStorage({
    destination:'./Upload/images',
filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({ storage: storage });

//creating upload end pointfor images
app.use('/images',express.static('Upload/images'))
app.post("/Upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
     image_url:`http://localhost:${port}/images/${req.file.filename}`
    })

})
//schema for creating a product
const product=mongoose.model("product",{
    id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    old_price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    new_price:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    available:{
        type:Boolean,
        default:true
    },


})

//addproduct
app.post("/addproduct",async(req,res)=>{
    // logic for automatically find the 
    let products = await product.find({})
    let id;
    if(products.length>0){
        // slice(-1) will give the last element in the erray
        let lastproduct_array=products.slice(-1);
        let lastproduct=lastproduct_array[0];
        id=lastproduct.id+1;

    }
    else{
        id=1;
    }
const newproduct= new product({
    id:id,
    name:req.body.name,
    image:req.body.image,
    old_price:req.body.old_price,
    category:req.body.category,
    new_price:req.body.new_price,
    
});
console.log(newproduct)
//save the product in db
await newproduct.save();
console.log("saved")
res.json({
    success:true,
    name:req.body.name
})
})
//creating API for deleting the product
app.delete("/removeproduct",async(req,res)=>{
    await product.findOneAndDelete({
        id:req.body.id
    });
    console.log('removed')
    res.json({
        success:true,
        name:req.body.name
    })
})

//creating API for getting all product
app.get("/allproducts",async(req,res)=>{
    let products =await product.find({});
    console.log("all product fetched")
    res.send(products)
})

//schema crating for user model
const User=mongoose.model("users",{
    name:{
type:String,

    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,  
    },
    cartdata:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})
debugger 
//creating api for registering the user
app.post('/signup',async(req,res)=>{
    let check=await User.findOne({email:req.body.email});
    if(check){
        return res.status(404).json({success:false,errors:"existing user found with same email "})
    }
    let cart ={};
    for (let i = 0; i <300; i++) {
     cart[i]=0;
        
    }
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartdata:cart,
      
    })
await user.save();
//jwt authentication  token ?
const data={
    user:{
        id:user.id
    }
}
    const token =jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//creating endpoint using  login 
app.post('/login',async(req,res)=>{
    let user=await User.findOne({email:req.body.email});
    if(user){
        const passcompare=req.body.password===user.password;
        if(passcompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token =jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
res.json({success:false,errors:"wrong password"})

        }
    }
    else{
        res.json({success:false,errors:"Wrong email id"})
    }
})