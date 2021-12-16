import express from 'express';


const app = express();
const port=3000;
app.listen(port,()=>{
    console.log(`lisening on port http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.redirect('/api')
  });

app.get('/api', (req, res) => {
    res.send('redirected to api is done succcefully')
  });