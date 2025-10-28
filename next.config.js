/*Next.js ka <Image> component remote images (external URLs) load karte waqt security check karta hai.
Default config me sirf kuch internal hosts allowed hote hain.
Jab tumne https://fakestoreapi.com/... ka image use kiya, Next.js bola —
"Yeh domain allowed list me nahi hai." 🚫*/

// ye solution hai iska jo maine Chatgpt kii help selikha 

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fakestoreapi.com"], // 👈 yahan tumhara external image domain
  },
};

module.exports = nextConfig;
