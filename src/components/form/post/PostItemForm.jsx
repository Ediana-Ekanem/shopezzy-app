import React, { useState } from "react";

const PostItemForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    if (image) {
      formData.append("image", image);
    }
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center my-10 border w-full max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Post an Item</h2>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">Item Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          required
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          rows="4"
          required
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          required
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          required
        >
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Fashion">Fashion</option>
          <option value="Home">Home</option>
          <option value="Sports">Sports</option>
          <option value="Books">Books</option>
          <option value="Toys">Toys</option>
        </select>
      </div>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">Upload Image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border px-4 py-2 rounded-md w-full"
          accept="image/*"
        />
      </div>

      <button
        type="submit"
        className="py-2 px-6 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
      >
        Post Item
      </button>
    </form>
  );
};

export default PostItemForm;
