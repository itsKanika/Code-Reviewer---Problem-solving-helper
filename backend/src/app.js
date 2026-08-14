const express =require('express');
const aiRoutes =require('./routes/ai.routes')
const cors =require('cors')
const app=express()
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('kanika')
})

app.use('/ai',aiRoutes) 
// error logging middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error in request:', err && err.stack ? err.stack : err);
    res.status(500).json({ error: 'Internal Server Error', details: err ? String(err) : undefined });
});
module.exports=app