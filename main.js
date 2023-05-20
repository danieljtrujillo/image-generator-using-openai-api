// Front-end script
fetch('http://localhost:5000/generate-image', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
