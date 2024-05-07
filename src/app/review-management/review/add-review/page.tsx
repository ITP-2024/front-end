"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Swal from "sweetalert2";

interface FormData {
  name: string;
  email: string;
  comment: string;
  rating: number;
  images: string[]; // Update the type of images to string[]
}

const AddReview: React.FC = () => {
  const router = useRouter(); // Initialize useNavigate
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    comment: "",
    rating: 0,
    images: [],
  });
  const [picMessage, setPicMessage] = useState<string | null>(null);
  const [numImagesUploaded, setNumImagesUploaded] = useState<number>(0); // Track the number of images uploaded

  const removeImage = (index: number) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      images: prevFormData.images.filter((_, i) => i !== index),
    }));

    setNumImagesUploaded((prevNumImages) => prevNumImages - 1);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const postDetails = (pics: File) => {
    if (!pics) {
      return setPicMessage("Please select an image");
    }
    setPicMessage(null);

    // Check if the number of images uploaded has reached the limit
    if (numImagesUploaded === 5) {
      return setPicMessage("Maximum limit of 5 images reached");
    }

    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/png" ||
      pics.type === "image/jpg"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "reviews");
      data.append("cloud_name", "dsuhjbalz");

      fetch("https://api.cloudinary.com/v1_1/dsuhjbalz/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // Update the images array in formData with the uploaded image URL
          setFormData((prevFormData: typeof formData) => ({
            ...prevFormData,
            images: [...(prevFormData.images as string[]), data.url.toString()],
          }));

          setNumImagesUploaded((prevNumImages) => prevNumImages + 1); // Increment the count of uploaded images
        })
        .catch((err) => {
          console.error("Error uploading image:", err);
          setPicMessage("Error uploading image");
        });
    } else {
      setPicMessage("Please select an image of type JPEG, PNG, or JPG");
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (formData.name.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your name",
      });
      return;
    }

    if (formData.email.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your email",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address",
      });
      return;
    }

    if (formData.comment.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter your comment",
      });
      return;
    }

    if (formData.rating < 0 || formData.rating > 5) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Rating must be between 0 and 5",
      });
      return;
    }

    if (formData.images.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please upload at least one image",
      });
      return;
    }

    // Send new review data to backend
    axios
      .post("http://localhost:8080/review", formData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Review added successfully!",
        }).then(() => {
          // Redirect to reviews page after successful submission
          router.push("/review-management/review");
        });
      })
      .catch((error) => {
        console.error("Error adding review:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error adding review. Please try again later.",
        });
      });
  };

  // Email validation function
  const validateEmail = (email: string) => {
    // Regular expression for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Add Review</h1>
      <br />
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded px-3 py-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email:
          </label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded px-3 py-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="comment" className="font-semibold">
            Comment:
          </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="border rounded px-3 py-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="rating" className="font-semibold">
            Rating:
          </label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="border rounded px-3 py-2 mt-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="font-semibold">
            Image:
          </label>
          <input
            type="file"
            name="image"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => e.target.files && postDetails(e.target.files[0])}
            className="border rounded px-3 py-2 mt-1"
          />

          {picMessage && <p className="text-red-500">{picMessage}</p>}
        </div>
        {formData.images.length > 0 && (
          <div className="flex flex-wrap">
            {formData.images.map((imageUrl, index) => (
              <div key={index} className="relative">
                <Image
                  width={128}
                  height={128}
                  src={imageUrl}
                  alt={`Uploaded Image ${index + 1}`}
                  className="w-32 h-32 object-cover rounded mr-4 mb-4"
                />
                <button
                  type="button" // Add this line to specify the type explicitly
                  className="absolute top-0 right-0 mt-1 mr-1 text-red-500 bg-white rounded-full p-1"
                  onClick={() => removeImage(index)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM5 9a1 1 0 112 0v5a1 1 0 11-2 0V9zm8-1a1 1 0 10-2 0v5a1 1 0 102 0V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
