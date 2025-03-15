import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    date: "February 25, 2025",
    author: "John Doe",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQHuDu_Y-quTtg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1712644027943?e=2147483647&v=beta&t=9XL0UDLp4EO1QXqLEUx26sEBtligqImXGn4kayaMoIA",
    description: "Explore how AI is transforming web development with automation and intelligent design tools.",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS for Faster UI",
    date: "March 1, 2025",
    author: "Jane Smith",
    image: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz4yjy5a9rn77uvdb5azd.png",
    description: "Learn how to build modern and responsive designs faster using Tailwind CSS.",
  },
  {
    id: 3,
    title: "React 18: What’s New?",
    date: "March 5, 2025",
    author: "Alex Johnson",
    image: "https://webkul.com/blog/wp-content/uploads/2023/03/reactjs_18_.png",
    description: "Discover the latest features in React 18 and how they improve performance and usability.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen px-5" id="blog">
      {/* Blog Heading */}
      <h1 className="text-4xl py-3 font-bold text-center text-blue-600 mb-8">
      Latest Blog Posts
      </h1>

      {/* Blog Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {blogPosts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1"
          >
            {/* Blog Image */}
            <img src={post.image} alt={post.title} className="w-full h-52 object-cover" />
            
            {/* Blog Content */}
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-3">
                {post.date} • By {post.author}
              </p>
              <p className="text-gray-600 mb-4">{post.description}</p>

              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
