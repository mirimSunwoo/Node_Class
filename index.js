const express = require('express');
const app = express();

app.get('/',function (req,res) {
    res.send("/");
})

app.get('/page',function (req,res) {
    res.send('/page');
})

app.listen(3333);

// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const qs = require('querystring');
// const sanitizeHtml = require('sanitize-html');
//
// const template = require('./lib/template.js');
//
// const app = http.createServer(function (request, response) {
//   const _url = request.url
//   const queryData = url.parse(_url, true).query
//   const pathname = url.parse(_url, true).pathname
//   if (pathname === '/') {
//     if (queryData.id === undefined) {
//       const title = 'Welcome'
//       const description = 'Hello, Node.js'
//
//       fs.readdir('data/', function (err, data){
//         const list = template.List(data);
//         //메인화면에서는 create(새 게시글 작성)만 가능하게
//         const html = template.HTML(title, list, description,'<a href="create">create</a>');
//         response.writeHead(200)
//         response.end(html)
//       })
//     }else {
//       fs.readdir('data/', function (err, data){
//         fs.readFile(`data/${queryData.id}`, 'utf8', function (err, description){
//           const title = queryData.id
//
//           const sanitizedTitle = sanitizeHtml(title);
//           const sanitizedDescription = sanitizeHtml(description);
//
//           const list = template.List(data);
//           const html = template.HTML(title,list,sanitizedDescription,`
//                 <a href="create">create</a> <a href="update?id=${sanitizedTitle}">update</a>
//                 <form action="delete_process" method="post">
//                     <p><input type="hidden" name="id" value="${sanitizedTitle}"></p>
//                     <p><input type="submit" value="delete"></p>
//                 </form>`);
//           response.writeHead(200)
//           response.end(html)
//         })
//       });
//     }
//   }else if(pathname === '/create'){
//     fs.readdir('data/',function (err,data){
//       const title = 'Web - create';
//       const list = template.List(data);
//       const html = template.HTML(title, list,`
//           <form action="create_process" method="post">
//               <p><input type="text" name="title" placeholder="title"></p>
//               <p><textarea name="description" placeholder="description"></textarea></p>
//               <p><input type="submit"></p>
//           </form>`, '') //글 생성 중에는 create가 안보이게
//       response.writeHead(200);
//       response.end(html)
//     });
//   }
//   else if(pathname === '/create_process'){
//     let body = '';
//     request.on('data',function (data){
//       body += body + data;
//     });
//     request.on('end',function (){
//       const post = qs.parse(body);
//       const title = post.title;
//       const description = post.description;
//       fs.writeFile(`data/${title}`, description,"utf-8", function (err){
//         response.writeHead(302,{Location:`/?id=${title}`});
//         response.end();
//       })
//     });
//   } else if(pathname === '/update'){
//     //data :  실제 파일리스트 문자열들의 배열
//     fs.readdir('data/',function (err,data){
//       //description : 실제 파일안에 내용물(게시글의 내용)
//       fs.readFile(`data/${queryData.id}`,"utf-8", function (err, description){
//         const title =queryData.id;
//
//         const list = template.List(data);
//         const html = template.HTML(title, list,`
//             <form action="update_process" method="post">
//             <input type="hidden" name="id" value="${title}">
//                 <p><input type="text" name="title" placeholder="title" value=${title}></p>
//                 <p><textarea name="description" placeholder="description">${description}</textarea></p>
//                 <p><input type="submit"></p>
//             </form>`, `<a href="/create >create</a><a href="/update?id=${title}">update</a>
//                               <form action="delete_process" method="post">
//                                   <input type="hidden" name="id" value="${title}">
//                                   <input type="submit" value="delete">
//                               </form>`); //글 생성 중에는 create가 안보이게
//         response.writeHead(200);
//         response.end(html)
//       })
//     });
//   } else if(pathname === '/update_process'){
//     let body = '';
//     request.on('data',function (data){
//       body += body + data;
//     });
//     request.on('end',function (){
//       const post = qs.parse(body);
//       const id = post.id; //바꾸기 전에 파일이름(게시글 제목)
//       const title = post.title; //바꾼 이후의 파일이름(게시글제목)
//       const description = post.description;
//       fs.rename(`data/${id}`,`data/${title}`, function (err){
//         fs.writeFile(`data/${title}`, description,"utf-8", function (err){
//           response.writeHead(302,{Location:`/?id=${title}`});
//           response.end();
//         })
//       })
//     });
//   } else if(pathname === '/delete_process'){
//     let body = '';
//     request.on('data',function (data){
//       body += body + data;
//     });
//     request.on('end',function (){
//       const post = qs.parse(body);
//       const id = post.id; //바꾸기 전에 파일이름(게시글 제목)
//       fs.unlink(`data/${id}`, function (err){
//         response.writeHead(302, {Location:'/'});
//         response.end();
//       });
//     });
//   } else {
//     response.writeHead(404)
//     response.end('Not found')
//   }
// })
// app.listen(3334)