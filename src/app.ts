import express from 'express';

const app = express();
const port = 3000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.listen(port, () => {
    // if (err) {
    //     return console.error(err);
    // }
    return console.log(`server is listening on ${port}`);
});
