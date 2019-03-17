var express = require('express');
var app = express();
var axios = require('axios');
var DOMParser = require('dom-parser');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const w3 = axios.create({
  baseURL: 'https://www.w3schools.com/',
  timeout: 1000,
});


app.get('/', function (req, res) {
    res.send("i am dumb")
});


let highlight = `


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/default.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/highlight.min.js"></script>
<script>
hljs.configure({useBR: true});

document.querySelectorAll('.w3-code').forEach((block) => {
  hljs.highlightBlock(block);
});
</script>
`;


let head = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Workshop</title>
      <link rel = "stylesheet" type = "text/css" href = "http://localhost:3000/stylesheets/site.css" />
      
    </head>
    <body class="w3-main">
`;

let footer = `
  </body>
  </html>
`;




// hljs.initHighlightingOnLoad();




app.get('/main/:url/:page', function(req, res){
  var url = req.params.url;    
  var page = req.params.page;    
  let target = url + "/" + page
  w3.get(target).then(content=>{
    var parser = new DOMParser();
    var temp = parser.parseFromString(content.data, "text/html");
    let main =  temp.getElementById('main').innerHTML
    // console.log(main)
    let dom = new JSDOM(main)
    // console.log(fraq.querySelectorAll('.w3-example'))
    
    dom.window.document.querySelectorAll('.w3-btn').forEach((el, i)=>{
        // el.innerHTML = "";
    })

    
    dom.window.document.querySelectorAll('.w3-example').forEach((el, i)=>{
        if(el.querySelector('.w3-code') && url == "html"){

          let code = el.querySelector('.w3-code').innerHTML
          let content = encodeURI(code);
          let jsbin = `<iframe width="100%" height="200" class="jsbin-embed"  src="https://jsbin.com/dezowix/1/embed?output&html=${content}"> xxx </iframe><script src="https://static.jsbin.com/js/embed.min.js?4.1.7"></script>`;
          
          let panel = `
          <details>
              <summary>
                  <ul>
                      <li>Show Live Output</li>
                      <li class="titleValue"></li>
                      <li></li>
                  </ul>
              </summary>
              <div class="content">
                ${jsbin}
              </div>
          </details>
          
          
          `;
          el.insertAdjacentHTML('beforeend', panel);

        }
    })

      res.send(
       head +  dom.serialize() + highlight + footer
      );
    })
  })

app.listen(3001, function () {
  console.log('W3Scraper listening on port 3001!');
});