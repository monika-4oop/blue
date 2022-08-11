const mongoose=require('mongoose');
const server=()=>{
    mongoose.connect('mongodb+srv://monika:kmonika%40123@cluster0.ptljtd1.mongodb.net/member_collection?retryWrites=true&w=majorityz' , 
     { useNewUrlParser: true, useUnifiedTopology: true })
}

module.exports = server;