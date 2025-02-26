import React, { useState } from "react";

const AdminProjects = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!image) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("value", value);
    formData.append("url", url);
    formData.append("image", image);

    try {
      const response = await fetch("https://portfolio-hichem-benzair.onrender.com/api/projects/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload project");
      }

      alert("Project uploaded successfully!");
      setTitle("");
      setValue("");
      setUrl("");
      setImage(null);
    } catch (error) {
      console.error("Error uploading project:", error);
    }
  };

  return (
    <div>
      <h2>Upload New Project</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} required />
        <input type="text" placeholder="GitHub URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} required />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default AdminProjects;
