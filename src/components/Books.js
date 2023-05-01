import React from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

function Books(){

    const { register, handleSubmit, formState: { errors } } = useForm();

    let navigate = useNavigate();

    const onFormSubmit = (bookObj) => {

        console.log(bookObj);
        axios.post('http://localhost:4000/book-api/addbook',bookObj)
        .then((response) => {
            console.log(response);
            alert(response.data.message);
            
            //if user  created
            if(response.data.message==='New book added successfully')
            {
              //navigate to login
              navigate('/Home');
            }
          })
          .catch((error) => {
              console.log(error)
              alert("Something went wrong in adding book")
            })
    }




    return(
        <div>
            



            <form onSubmit={handleSubmit(onFormSubmit)} >



                <div className='mx-auto border border rounded bg-white container m-5 p-5 pe-3 col-xl-6'>

                    <div className='display-6 mb-3 text-center text-dark fw-semibold' id="upload">ADD BOOK</div>


                    <div className="mb-3 row">
                        <label for="bookid" className="col-sm-2 col-form-label">Book Id</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="bookid" {...register("bookid", { required: true })} />
                            {errors.bookid && <p className='text-danger'>*BookId is required</p>}
                        </div>
                    </div>


                    <div className="mb-3 row">
                        <label for="booklang" className="col-sm-2 col-form-label">Book Language</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="booklang" {...register("booklanguage", { required: true })} />
                            {errors.booklanguage && <p className='text-danger'>*BookLanguage is required</p>}
                        </div>
                    </div>


                    <div className="mb-3 row">
                        <label for="bookcat" className="col-sm-2 col-form-label">Book Category</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="bookcat" {...register("bookcategory", { required: true })} />
                            {errors.bookcategory && <p className='text-danger'>*BookCategory is required</p>}
                        </div>
                    </div>


                    <div className="mb-3 row">
                        <label for="bookdes" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-md-8">
                            <textarea  className="form-control" id="bookdes" rows="5" {...register("bookdescription", { required: true })} />
                            {errors.bookdescription && <p className='text-danger'>*BookDescription is required</p>}
                        </div>
                    </div>


                    <div className="mb-3 row">
                        <label for="booktitle" className="col-sm-2 col-form-label">Book Title</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="booktitle" {...register("booktitle", { required: true })} />
                            {errors.booktitle && <p className='text-danger'>*BookTitle is required</p>}
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="bookauthor" className="col-sm-2 col-form-label">Book Author</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="bookauthor" {...register("bookauthor", { required: true })} />
                            {errors.bookauthor && <p className='text-danger'>*BookAuthor is required</p>}
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="bookprice" className="col-sm-2 col-form-label">Book Price</label>
                        <div className="col-md-8">
                            <input type="number" className="form-control" id="bookprice" {...register("bookprice", { required: true })} />
                            {errors.bookprice && <p className='text-danger'>*BookPrice is required</p>}
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="drivelink" className="col-sm-2 col-form-label">Drive Link</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="drivelink" {...register("drivelink", { required: true })} />
                            {errors.drivelink && <p className='text-danger'>*DriveLink is required</p>}
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="bookimage" className="col-sm-2 col-form-label">Book Image</label>
                        <div className="col-md-8">
                            <input type="text" className="form-control" id="bookimage" {...register("bookimage", { required: true })} />
                            {errors.bookimage && <p className='text-danger'>*BookImage is required</p>}
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label for="bookquantity" className="col-sm-2 col-form-label">Book Quantity</label>
                        <div className="col-md-8">
                            <input type="number" className="form-control" id="bookquantity" {...register("bookquantity", { required: true })} />
                            {errors.bookquantity && <p className='text-danger'>*BookQuantity is required</p>}
                        </div>
                    </div>




                    <div className="text-end me-5 pe-5 mt-3">
                        <button className='btn btn-primary' type="submit" >Submit</button>

                    </div>




                </div>
            </form>

        </div>
    )
}

export default Books;