/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage:{
      "image1":"url('../image/image1.webp')",
      "image2":"url('../image/image2.jpg')",
      "image3":"url('../image/image3.webp')",
      "video1":"url('../image/v1.jpg')",
      "video2":"url('../image/v7.jpg')",
      "video3":"url('../image/v3.jpg')",
      "video4":"url('../image/v4.jpg')",
      "video5":"url('../image/v5.jpg')",
      "video6":"url('../image/v6.jpg')",
    

    },
  },
  plugins: [],
}

