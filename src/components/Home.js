// import React from 'react'

// function Home() {
//   return (
//     <div>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error eos, nam corporis asperiores impedit quia modi. Quam veniam facilis dolores est totam! Voluptate, esse commodi! Fugiat, dolores? Architecto deserunt expedita est iusto numquam aperiam dolores earum omnis facere, excepturi odio, illum itaque pariatur consectetur maiores vel quasi, aut nulla accusantium debitis quisquam. Omnis totam animi optio sapiente delectus. Nemo maiores laudantium porro dolore, voluptatum ab omnis reprehenderit nulla, odit quibusdam quis labore? Quas, aliquam tenetur rerum alias ad veniam iusto totam ut iste doloribus possimus tempora unde non minus qui quaerat laudantium aut repellat ab id dolorum natus. Explicabo, nihil.
//     </div>
//   )
// }

// export default Home


import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Layout,
  Button
} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';




const Home = () => {
  const { userObj, isError, isLoading, isSucces, errMsg } = useSelector((state) => state.user);

  let [bookdata, setBookdata] = useState([]);

  const getData = () => {
    axios.get("http://localhost:4000/book-api/getbooks")
      .then(res => {
        // const bookdata=res.data;
        setBookdata(res.data.payload);
      })
      .catch(error => console.log("error"))
  }

  useEffect(() => {
    getData();
  });

  const deleteData = (e) => {
    console.log('////', e)
    axios.delete(`http://localhost:4000/book-api/removebook/${e.bookid}`)
      .then(res => {
        console.log(res.data.message);
        alert(res.data.message);
      })
      .catch(error => console.log(error.response.data.message));


  }


  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>

        {bookdata.map((menu) => (
          <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "250px" }}
                component={"img"}
                src={menu.bookimage}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.bookname}
                </Typography>
                
                <Typography variant="body2">{menu.booklanguage}</Typography>
                <Typography variant="body2">{menu.bookdescription}</Typography>
              </CardContent>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                {
                  !isSucces ? (
                    <button type="button" className="m-2" onClick={() => alert('Please login to continue ')}>
                    Delete
                  </button>
                  ) : (
                    <button type="button" className="m-2" onClick={() => deleteData(menu)}>
                  Delete
                </button>
                  )
                }
                {/* <button type="button" className="m-2" onClick={() => deleteData(menu)}>
                  Delete
                </button> */}
              </div>
            </CardActionArea>
          </Card>
        ))}



        
      </Box>
    </>
  );
};

export default Home;