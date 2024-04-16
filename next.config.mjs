/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "ibb.co"
        },
        {
          protocol: "https",
          hostname: "i.ibb.co"
        },
        {
          protocol: "https",
          hostname: "icon-library.com"
        },
        {
          protocol: "http",
          hostname: "res.cloudinary.com"
        }
      ],
    },
  };

  
  
  export default nextConfig;
  

