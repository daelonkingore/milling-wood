export async function upload(file, folder, token) {
  const sigRes = await fetch('/.netlify/functions/signUpload', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ folder }),
  })

  const sig = await sigRes.json()

  const formData = new FormData()
  formData.append('file', file)
  formData.append('api_key', sig.apiKey)
  formData.append('timestamp', sig.timestamp)
  formData.append('signature', sig.signature)
  formData.append('folder', folder)

  const res = await fetch(`https://api.cloudinary.com/v1_1/${sig.cloudName}/image/upload`, {
    method: 'POST',
    body: formData,
  })

  return await res.json()
}
