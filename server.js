import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
  <html>
    <head>
      <title>2.x Flux with redux</title>
      <link href="/static/site.min.css" rel="stylesheet">
    </head>
    <body>
      <div id="root"></div>
    <script>
        var WebFontConfig = {
          google: { families: [ 'Roboto:400,300,500:latin' ] }
        };
        (function() {
          var wf = document.createElement('script');
          wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
          wf.type = 'text/javascript';
          wf.async = 'true';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(wf, s);
        })();
    </script>
    <script src="static/bundle.js"></script>
    </body>
  </html>`)
})

app.get('/static/bundle.js', (req, res) => {
    res.sendFile('static/bundle.js', { root: __dirname })
})
app.get('/static/site.min.css', (req, res) => {
    res.sendFile('/static/site.min.css', { root: __dirname })
})

//app.get('*', (request, response) => {
    //response.sendFile(__dirname + '/index.html')
//})

app.listen(3000)
