import cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const handler = async () => {
  const result = await cloudinary.v2.api.root_folders()

  return {
    statusCode: 200,
    body: JSON.stringify(
      result.folders.map(f => f.name)
    ),
  }
}
