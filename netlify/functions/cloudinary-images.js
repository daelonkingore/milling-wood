import cloudinary from 'cloudinary'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const handler = async (event) => {
  const folder = event.queryStringParameters.folder

  const result = await cloudinary.v2.search
    .expression(`folder:${folder}`)
    .sort_by('created_at', 'desc')
    .max_results(50)
    .execute()

  return {
    statusCode: 200,
    body: JSON.stringify(
      result.resources.map(img => ({
        public_id: img.public_id,
        url: img.secure_url,
        folder: img.folder,
      }))
    ),
  }
}
