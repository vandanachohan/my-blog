// import { groq } from "next-sanity"; // Corrected syntax
// import Hero from "./components/hero";
// import { client } from "@/sanity/lib/client";
// import BlogContent from "./components/blogcontent";

// // Execute GROQ Query
// const query = groq`
//   *[_type == 'post']{
//     ...,
//     author->,
//     categories[]->
//   } | order(_createdAt asc)
// `;

// export default async function Home() {
//   // Fetch data from Sanity
//   const posts = await client.fetch(query);
// console.log(posts); // Check if posts array has more than one post


//   return (
//     <main className="container mx-auto p-4">
//       <Hero />
      
//     <BlogContent posts={posts} />
      
      
//     </main>
//   );
// }
import { groq } from "next-sanity";
import Hero from "./components/hero";
import { client } from "@/sanity/lib/client";
import BlogContent from "./components/blogcontent";

// GROQ Query to Fetch All Posts
const query = groq`
  *[_type == 'post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc) // Order by newest first
`;

export default async function Home() {
  try {
    // Fetch all posts from Sanity
    const posts = await client.fetch(query);

    // Check if posts array has data
    if (!Array.isArray(posts) || posts.length === 0) {
      return (
        <main className="container mx-auto p-4">
          <Hero />
          <p>No blog posts available.</p>
        </main>
      );
    }

    return (
      <main className="container mx-auto p-4">
        <Hero />
        <BlogContent posts={posts} /> {/* Pass all posts to BlogContent */}
      </main>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);

    // Display fallback UI in case of error
    return (
      <main className="container mx-auto p-4">
        <Hero />
        <p>Failed to load blog posts. Please try again later.</p>
      </main>
    );
  }
}
