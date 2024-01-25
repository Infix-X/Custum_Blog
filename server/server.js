import express from 'express';
const app = express();
app.use(express.json());
const ArticleInfo=[{
    name:"Learn-React",
    upvotes:0
},
{
    name:"Learn-NextJs",
    upvotes:0
},
{
    name:"MongoDb",
    upvotes:0
}

]

// app.post("/hello", (req, res) => {
    
//     const responseMessage = `Hello ${req.body.name}!\n` +
//                             `My birthplace is ${req.body.dateOfBirth}\n` +
//                             `My gender is ${req.body.gender}\n` +
//                             `My nationality is ${req.body.nationality}\n` +
//                             `My address is ${req.body.address}\n` +
//                             `My ID number is ${req.body.idNumber}`;

//     //res.send(responseMessage);
// });
app.get('/api/articles/:name/upvotes',(req,res)=>{
    const {name}=req.params;
    const article = ArticleInfo.find(a=>a.name===name);
    if(article){
        article.upvotes +=1;
        res.send(`The article name is ${article.name} and it has upvote are ${article.upvotes}`)
    }

    else{
        res.status(400).send("Article not found")
        console.log(`${article.name} such article not found!!`);
    }
    console.log(`The article name is ${article.name} and it has upvote are ${article.upvotes}`)
})

app.listen(8000, () => {
    console.log("Server listening on port 8000...");
});
