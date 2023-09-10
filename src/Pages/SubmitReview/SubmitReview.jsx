import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./submitReview.css";
import Swal from "sweetalert2";
import Reviews from "../Home/Reviews/Reviews";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#808080",
};

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const SubmitReview = () => {
  const [fullName, setFullName] = useState("");
  const [rating, setRating] = useState(1);
  const [photo, setPhoto] = useState(null);
  const [review, setReview] = useState("");

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", photo);

    const data = {
      fullName,
      rating,
      photo,
      review,
    };

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { fullName, rating, review } = data;
          const reviewData = { name:fullName, rating, review, photo: imgURL };

          fetch('https://creative-server.vercel.app/reviews', {
            method: 'POST',
            body: JSON.stringify(reviewData),
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((response) => response.json())
          .then((reviewData) => {
            if (reviewData.insertedId) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Thank You For Your Feedback!',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="mt-4 md:mt-[40px] md:mt-[125px] container mx-auto">
      <Helmet>
        <title>Creative Campus || Review</title>
      </Helmet>
      <div className="mx-auto text-center h-[70px] m:h-[200px]">
        <h1 className="heading font-[600] text-[28px] md:text-[48px] text-white">
          Submit Reviews
        </h1>
        <p className="heading font-[400] text-[14] md:text-[18px] text-white  md:mt-[20px]">
          Share your thoughts with us!
        </p>
      </div>
      <div className="flex justify-center mx-auto submit-review-card mb-8 mt-[40px] md:mt-100px] ">
        <form onSubmit={handleSubmit} className="w-[full container-review-card">
          {/* Full Name Input */}
          <div className="flex mt-[65px] lg:gap-[134px] gap-[20px]">
            <div className="mb-4">
              <label className="text-white block mb-2 font-[500] text-[20px] heading">
                Full Name
              </label>
              <input
                type="text"
                className="w-full !bg-[#171717] h-12 !text-white border rounded-lg px-4 "
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            {/* Rating Input */}
            <div className="mb-4">
              <label className="text-white block mb-2 font-[500] text-[20px] heading">
                Rating:
              </label>
              <Rating
                style={{ maxWidth: 150 }}
                itemStyles={myStyles}
                value={rating}
                onChange={(value) => setRating(value)}
                required
              />
            </div>
          </div>
          {/* Photo Input */}
          <div className="mb-4 mt-[32px]">
            <label className="text-white block mb-2 font-[500] text-[20px] heading">
              Select Your Photo
            </label>
            <input
              type="file"
              className="file-input file-input-bordered text-white file-input-secondary w-full "
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              required
            />
          </div>
          {/* Review Textarea */}
          <div className="mb-4 mt-[32px]">
            <label className="text-white block mb-2 font-[500] text-[20px] heading">
              Review
            </label>
            <textarea
              className="w-full h-32 border bg-[#171717] text-white rounded-lg px-4"
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
              className="bg-[#3C4FF8] hover:bg-[#3C4FF8] border-[#3C4FF8] text-white py-[11px] px-[100px] rounded-lg font-[500] text-[20px] heading"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
      <div className="mt-[120px] md:mt-[194px]">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default SubmitReview;
