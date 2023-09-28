const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

let comments = [
    {
        id:uuid(),
        username:"Prashast Mishra",
        comment:"My Name is Prashast Mishra"
    },
    {
        id:uuid(),
        username:"Prashast Mishra",
        comment:"My Name is Prashast Mishra"
    },
    {
        id:uuid(),
        username:"Prashast Mishra",
        comment:"My Name is Prashast Mishra"
    },
    {
        id:uuid(),
        username:"Prashast Mishra",
        comment:"My Name is Prashast Mishra"
    },
    {
        id:uuid(),
        username:"Prashast Mishra",
        comment:"My Name is Prashast Mishra"
    },
    {
        id:uuid(),
        username:"Prashast Mishra",
        comment:"My Name is Prashast Mishra"
    },
    {
        id:uuid(),
        username:"Prashast Mishra",
        comment:"My Name is Prashast Mishra"
    },
    
]

app.set('view engine' , 'ejs');
app.use(express.json()) // for parsing application/json
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({ extended: true }))


app.get('/' , (req,res)=>{
    res.render('index' , {comments})
})


app.get('/comment/new' , (req,res)=>{
    res.render('new');
})

// to actually add the comment
app.post('/comments' , (req,res)=>{

    let {username , comment} = req.body;
    comments.push({username , comment, id:uuid()})
    res.redirect('/');
})

// showing a particular comment
app.get('/comments/:commentId' , (req,res)=>{
   
    let {commentId} = req.params;
    let foundComment = comments.find((item)=>{return item.id == commentId})
    res.render('show' , {foundComment});
})

// show the dit form
app.get('/comments/:commentId/edit' , (req,res)=>{
    let {commentId} = req.params;
    let foundComment = comments.find((item)=>{return item.id == commentId})
    res.render('edit' , {foundComment})
})

//to actually edit the comment
app.patch('/comments/:commentId' , (req,res)=>{
    let {commentId} = req.params;
    let foundComment = comments.find((item)=>{return item.id == commentId})
    // console.log(req.body);
    let {comment} = req.body;
    foundComment.comment = comment;
    res.redirect('/comments');
})


app.delete('/comments/:commentId' , (req,res)=>{
    let {commentId} = req.params;
    let newArray = comments.filter((item)=>{return item.id != commentId});
    comments = newArray;
    res.redirect('/comments');
})

app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})




