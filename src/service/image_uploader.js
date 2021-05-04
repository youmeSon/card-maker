class ImagaUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "mxdztnqs");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dosddwreb/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImagaUploader;
