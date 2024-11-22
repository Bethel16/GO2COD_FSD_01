import React from "react";

const CommentSection = () => (
  <div className="row mt-6">
    <div className="col-12">
      <h4>Comments</h4>
      <div className="row my-5">
        <div className="col-auto text-center">
          <img className="rounded-circle" src="../assets/img/portrait-8.jpg" width="50" alt="blog" />
        </div>
        <div className="col">
          <h5 className="mb-1">Post Heading</h5>
          <p className="fs--1 text-500">May 15, 2017 at 9:33 am</p>
          <p>Their work on our website and Internet marketing has made a significant different to our business.</p>
          <a className="d-block my-3 text-end me-4" href="index.html">Reply</a>
        </div>
      </div>
      <hr className="border-300" />
    </div>
    <div className="col-12">
      <h4>Leave A Comment</h4>
      <form className="mt-4">
        <input className="form-control bg-white" type="text" placeholder="Your Name" />
        <input className="form-control bg-white mt-4" type="email" placeholder="Email" />
        <textarea className="form-control bg-white mt-4" rows="10" placeholder="Leave your comment here..." />
        <button className="btn btn-primary mt-4" type="submit">Submit Comment</button>
      </form>
    </div>
  </div>
);

export default CommentSection;
