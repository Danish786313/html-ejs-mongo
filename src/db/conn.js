const mongoose = require ("mongoose");


mongoose.connect("mongodb://0.0.0.0:27017/userdata" ,{ 
})
.then(()=>{ //mongodb://localhost:27017/
    console.log(`connection successful`);
}).catch(()=>{
    console.log(`no connection`);
});