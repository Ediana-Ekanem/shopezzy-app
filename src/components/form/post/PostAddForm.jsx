import React, { useState } from "react";

const PostAddForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("title", title);
    postData.append("content", content);
    postData.append("tags", tags);
    if (image) {
      postData.append("image", image);
    }
    onSubmit(postData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center my-10 border w-full max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6">Add New Post</h2>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          required
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
          rows="6"
          required
        />
      </div>

      <div className="w-full mb-4">
        <label className="block text-lg font-semibold mb-2">
          Tags (comma-separated)
        </label>
        <input
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="border px-4 py-2 rounded-md w-full"
        />
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
        Add Post
      </button>
    </form>
  );
};

export default PostAddForm;
