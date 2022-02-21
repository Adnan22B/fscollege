import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import UpdateBlog from "../UpdateBlog/UpdateBlog";

export default function BlogListing(props) {
  const [blogList, setblogList] = useState([]);
  const [userID, setuserID] = useState('');
  useEffect(() => {
    Axios.get("http://localhost:5000/showBlogs").then((response) => {
      setblogList(response.data); 
    });
}, []);

const setUpdatedData  = (data) => {
  const updatedData = blogList.filter((item) => data.id !== item.id);
  updatedData.push(data)
  setblogList(updatedData)
}


const handleDelete = async (id, e) => {
  e.preventDefault();
  await Axios.get(`http://localhost:5000/deleteRecord/${id}`)
    .then((response) => {
      console.log(response);
    })

    .catch((err) => {
      console.log("this is error: ", err); 
    });
  alert(`blog with serial no ${id} is deleted `);
  setblogList(blogList.filter((item) => item.id != id));
};

// Delet eEnds Herer ..................


// edit start here ................
const handleUpdate = (id, e) => { 
  // e.preventDefault();
  // Axios.get(`http://localhost:5000/showBlogs/${id}`).then((response) => { 
  //   setUpdateId(id);
  //   setUpdateTitle(response.data.blogTitle)
  // });

  

};


const updateRecord = (id) => {
  Axios.put(`http://localhost:5000/updateBlogs/${id}`).then((response) => { 

  })
}

// Edit ends here
  return (
    <>
      <div className="rs-breadcrumbs breadcrumbs-overlay">
        <div className="breadcrumbs-img">
          <img src="assets/images/breadcrumbs/2.jpg" alt="Breadcrumbs Image" />
        </div>
        <div className="breadcrumbs-text white-color">
          <h1 className="page-title">About Us</h1>
          <ul>
            <li>
              <a className="active" href="index.html">
                Home
              </a>
            </li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      <h1>Welcome {props.userName}</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xs-12 mt-5">
            <div className="mt-3 mb-3">
              <Link to="/admin-add-blogs">
                <button className="btn btn-primary">Add New Blog</button>
              </Link>
            </div>
            <hr></hr>
            <div className="">
              <h3 className="heading">All Blogs List</h3>
            </div>
            <>
              <table className="table table-light">
                <thead className="thead-dark">
                  <tr className="">
                    <th scope="col">Sr.No</th>
                    <th scope="col">Title</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {blogList.map((item, index) => (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.blogTitle}</td>
                      <td>{item.createdAt}</td>
                      <td>
                        <button
                          type="button"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          className="btn btn-success mr-2"
                          onClick={() => setuserID(item.id)}
                        >
                          Edit

                        </button>
                        <span>||</span>
                        <button
                          className="btn btn-danger ml-2"
                          onClick={(e) => {handleDelete(item.id, e)}}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
               
                </tbody>
              </table>
            </>

                 { userID && <UpdateBlog 
                  modalId="exampleModal"   
                  updatedId = {userID} 
                  setUpdatedData={setUpdatedData}/>  }
          </div>
        </div>
      </div>
    </>
  );
}
