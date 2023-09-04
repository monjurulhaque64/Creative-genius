import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./submitReview.css";


const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#808080",
};

// Define your SubmitReview component
const SubmitReview = () => {
  // Define state variables to store form input values
  const [fullName, setFullName] = useState("");
  const [rating, setRating] = useState(0); // Initialize with default rating
  const [photo, setPhoto] = useState(null); // Use state to handle file input
  const [review, setReview] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send the form data to your backend or perform any other actions here
    // Example: Send data to an API
    const formData = {
      fullName,
      rating,
      photo,
      review,
    };
    console.log(formData);
  };

  return (
    <div className="mt-[72px] container mx-auto">
      <Helmet>
        <title>Creative Campus || Submit Review</title>
      </Helmet>
      <div className="mx-auto text-center h-[200px]">
        <h1 className="font-[Poppins] font-[600] text-[48px] text-white">
          Submit Reviews
        </h1>
        <p className="font-[Poppins] font-[400] text-[18px] text-white">
          Share your thoughts with us!
        </p>
      </div>
      <div className="flex justify-center mx-auto submit-review-card mb-8">
        <form onSubmit={handleSubmit} className="w-[full container-review-card">
          {/* Full Name Input */}
          <div className="flex mt-[65px] lg:gap-[134px] gap-[20px]">
            <div className="mb-4">
            <label className="text-white block mb-2 font-[500] text-[20px] font-[Poppins]">Full Name</label>
              <input
                type="text"
                className="w-full h-12 border rounded-lg px-4"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            {/* Rating Input */}
            <div className="mb-4">
              <label className="text-white block mb-2 font-[500] text-[20px] font-[Poppins]">Rating:</label>
              <Rating
                style={{ maxWidth: 150 }}
                itemStyles={myStyles}
                value={rating}
                onChange={(value) => setRating(value)}
              />
            </div>
          </div>
          {/* Photo Input */}
          <div className="mb-4 mt-[32px]">
            <label className="text-white block mb-2 font-[500] text-[20px] font-[Poppins]">Select Your Photo</label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-secondary w-full " 
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
            />
          </div>
          {/* Review Textarea */}
          <div className="mb-4 mt-[32px]">
          <label className="text-white block mb-2 font-[500] text-[20px] font-[Poppins]">Review</label>
            <textarea
              className="w-full h-32 border rounded-lg px-4"
              placeholder="Review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            />
          </div>
          {/* Submit Button */}
          <div className="text-center mt-[60px]">
            <button
              type="submit"
              className="bg-[#3C4FF8] text-white py-[11px] px-[100px] rounded-lg font-[500] text-[20px] font-[Poppins]"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitReview;
