const exp = require('express');
const bookApp  = exp.Router();
const expressAsyncHandler = require('express-async-handler');


//to extract the body of request object
bookApp.use(exp.json())


//creating book REST API

//create a route to handle '/getbooks'
bookApp.get('/getbooks',expressAsyncHandler(async(request,response)=>{

    //get bookCollectionObject
    let bookCollectionObject = request.app.get("bookCollectionObject");

    //read allbooks 
    let book = await bookCollectionObject.find().toArray()

    //check if no books are present in the collection
    if(book.length==0){
        response.send({message:"No books to show"})
    }
    //if books present in the collection
    else{
        response.send({message:"All books",payload:book});
    }

}));


//create a route to handle a specific book '/getbook/id'
bookApp.get('/getbook/:id',expressAsyncHandler(async(request,response)=>{
    
    //get bookCollectionObject
    let bookCollectionObject = request.app.get("bookCollectionObject");
    
    //get bookId from url parameter
    let pid = (+request.params.id);
    
    //get book by id
    let book = await bookCollectionObject.findOne({bookid:pid});

    //if book not existed
    if(book==null){
        response.send({message:"book is not existed"});
    }
    //if book existed
    else{
        response.send({messgae:"book existed",payload:book});
    }

}));


//create a route to handle '/createbook'
bookApp.post('/addbook',expressAsyncHandler(async(request,response)=>{
    
    //get bookCollectionObject
    let bookCollectionObject = request.app.get("bookCollectionObject");

    //get book obj from req
    let bookObj = request.body

    console.log(';;;;;;',bookObj)

    let book = await bookCollectionObject.findOne({bookid:bookObj.bookid});

    console.log('????',book)

    //if book not existed
    if(book!=null){
        response.send({message:"book already existed"});
    }
    else{
        let result = await bookCollectionObject.insertOne(bookObj);

    //send respone
    response.send({message:"New book added successfully"});
    }

    //insert bookObj
    

}));


//create a route to handle '/uodatebook'
bookApp.put('/updatebook',expressAsyncHandler(async(request,response)=>{
    
    //get bookCollectionObject
    let bookCollectionObject = request.app.get("bookCollectionObject");

    //get modified book obj
    let modifiedbook = request.body;

    //update data
    await bookCollectionObject.updateOne({bookid:modifiedbook.bookid},{$set:{...modifiedbook}});

    //send response
    response.send({messgae:"book details is modified Successfully"});

}));


//create a route to handle '/removebook/id'
bookApp.delete('/removebook/:id',expressAsyncHandler(async(request,response)=>{

    //get bookCollectionObject
    let bookCollectionObject = request.app.get("bookCollectionObject");

    //get bookId from url parameter
    let pid = (+request.params.id);
    pid=pid.toString()
    console.log(typeof pid)
    

    //get book by id
    let book = await bookCollectionObject.findOne({bookid:pid});

    console.log(book)

    //if book not existed
    if(book==null){
        response.send({message:"book is not existed"});
    }
    //if book existed
    else{

        book=await bookCollectionObject.deleteOne({bookid:pid});
        console.log(book)
        response.send({message:"book Deleted Successfully"});
    }

}));


//export bookApp
module.exports=bookApp;