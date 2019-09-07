let Blog = require('../models/posts');

exports.getPosts = (req, res, next)=>{
    //res.send('from routes posts');
   Blog.find({},(err, data)=>{
       if(err){
           next(res.send('unable to fetch data').status(500))
       }else{
           res.send(data).status(200);
       }
   })
}

//save the post

exports.savePost = (req, res, next)=>{
    console.log(req.body)
    if(!req.body){
        console.log('pls fill all required fields')
        res.send({'status': 'bad request'}).status(400);
    }else{
        
        let post = new Blog ({
            title: req.body.title,
            body: req.body.body,
            author: req.body.author
        });

        post.save((err,data)=>{
            if(err){
                console.log(err);
                next( res.send('unable to save data').status(500))
            }else{
                res.send(data);
            }
        })

        }
    }
