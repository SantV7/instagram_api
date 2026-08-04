import app from './app.ts';

const Port = process.env.PORT;

app.listen(Port, () => console.log(`Running at http://localhost:${Port}/`));