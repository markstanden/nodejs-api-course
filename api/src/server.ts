import bodyParser = require('body-parser');
import http = require('http');

interface Todo {
  id: number;
  text: string;
}

const todos: Todo[] = [
  { id: 1, text: 'Todo One' },
  { id: 2, text: 'Todo Two' },
  { id: 3, text: 'Todo Three' },
  { id: 4, text: 'Todo Four' },
  { id: 5, text: 'Todo Five' },
];

const server = http.createServer((req, res) => {
  const { headers, url, method } = req;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'Node.JS');

  let body = [];

  req
    .on('data', (chunk: string) => {
      body.push(chunk);
    })
    .on('end', () => {
      let bodyString = Buffer.concat(body).toString();
      console.log(bodyString);
    });

  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
