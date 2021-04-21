import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://sleepy-peak-76641.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data.slice(0, 6)));
  }, []);

  return (
    <section className="review-container text-center p-5">
      <h1>FeedBack From Clients about our service</h1>
      <div className="d-flex justify-content-center mt-5">
        <div className="row w-100 pb-5">
          {reviews.map((reviewData) => (
            <Review key={reviewData._id} reviewData={reviewData}></Review>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
