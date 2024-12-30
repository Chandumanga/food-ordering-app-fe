const upload_preset = "food-image";
const cloud_name = "dblsckl8g";
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`;

export const uploadImageToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", upload_preset);
  data.append("cloud_name", cloud_name);

  try {
    const res = await fetch(api_url, {
      method: "POST",
      body: data,
    });

    if (!res.ok) {
      throw new Error(`Failed to upload image: ${res.statusText}`);
    }

    const fileData = await res.json();

    return fileData.url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};
