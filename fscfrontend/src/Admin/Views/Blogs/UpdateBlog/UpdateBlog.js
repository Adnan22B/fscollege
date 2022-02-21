import React, {useEffect, useState} from "react";
import Axios from "axios"

export default function UpdateBlog(props) {
  const [blogTitle, setBlogTitle] = useState("");
  const [singleData, setsingleData] = useState({})


  
  useEffect(() => {
    Axios.get(`http://localhost:5000/showBlogs/${props.updatedId}`).then((response) => {
      setsingleData(response.data)
      setBlogTitle(response.data.blogTitle) 
    });
}, [props.updatedId]);
  

const handleUpdate = () => {
  Axios.put(`http://localhost:5000/updateBlogs/${props.updatedId}`, {
    blogTitle
  }).then((response) => {
    console.log(response.data)
    props.setUpdatedData(response.data)
  });
}
  return (
    <>
      <div
        class="modal fade"
        id={props.modalId}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Blogs
              </h5>
              <br />
              <h5 class="modal-title" id="exampleModalLabel"></h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-lg-12 col-xs-12">
                  <div className="form-group ">
                    <input type="text" value={singleData.id} />
                  </div>
                </div>
                <div className="col-lg-12 col-xs-12">
                  <div className="form-group ">
                    <input
                      type="text"
                      defaultValue={blogTitle}
                      onChange = {(e) => setBlogTitle(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary" onClick={handleUpdate} data-dismiss="modal">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
