
// import React from "react";
// import { client } from "@/sanity/lib/client";
// import { groq } from "next-sanity";
// import { urlFor } from "@/sanity/lib/image";
// import Container from "@/app/components/Container";
// import Image from "next/image";

// interface Props {
//   params: {
//     slug: string;
//   };
// }

// interface Post {
//   title: string;
//   _createdAt: string;
//   mainImage: {
//     asset: { _ref: string; _type: string };
//     alt?: string;
//   };
//   author: {
//     name: string;
//     image: {
//       asset: { _ref: string; _type: string };
//     };
//     description?: string;
//   };
//   body: any[];
// }

// // Generate static paths
// export const generateStaticParams = async () => {
//   const query = groq`*[_type == "post"]{
//     "slug": slug.current
//   }`;
//   const slugs: { slug: string }[] = await client.fetch(query);

//   return slugs.map(({ slug }) => ({ slug }));
// };

// // Individual post page
// const SlugPage = async ({ params: { slug } }: Props) => {
//   const query = groq`*[_type == "post" && slug.current == $slug][0]{
//     title,
//     _createdAt,
//     mainImage,
//     "author": author->{
//       name,
//       image,
//       description
//     },
//     body
//   }`;

//   const post: Post | null = await client.fetch(query, { slug });

//   if (!post) {
//     return (
//       <Container className="mb-10">
//         <p className="text-red-500">Post not found.</p>
//       </Container>
//     );
//   }

//   return (
//     <Container className="mb-10">
//       <div className="flex items-center mb-10">
//         <div className="w-full md:w-2/3">
//           {/* Main Image */}
//           {post.mainImage ? (
//             <Image
//               src={urlFor(post.mainImage).url() || "/placeholder.png"}
//               width={800}  // Default width
//               height={500} // Default height
//               alt={post.mainImage.alt || "Main image"}
//               className="object-cover w-full"
//             />
//           ) : (
//             <p>No main image available</p>
//           )}

//           <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
//             {/* Author Image */}
//             {post.author?.image ? (
//               <Image
//                 src={urlFor(post.author.image).url() || "/placeholder.png"}
//                 width={200}  // Author image width
//                 height={200} // Author image height
//                 alt={post.author?.name || "Author image"}
//                 className="w-32 h-32 rounded-full object-cover"
//               />
//             ) : (
//               <p>No author image available</p>
//             )}

//             {/* Author Details */}
//             <p className="text-3xl text-[#5442ae] font-semibold">
//               {post.author?.name || "Unknown Author"}
//             </p>
//             <p className="text-center tracking-wide text-sm">
//               {post.author?.description || "No description available"}
//             </p>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default SlugPage;
import React from "react";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Container from "@/app/components/Container";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

interface Props {
  params: {
    slug: string;
  };
}

interface Post {
  title: string;
  _createdAt: string;
  mainImage: {
    asset: { _ref: string; _type: string };
    alt?: string;
  };
  author: {
    name: string;
    image: {
      asset: { _ref: string; _type: string };
    };
    description?: string;
  };
  body: any[];
}

// Generate static paths
export const generateStaticParams = async () => {
  const query = groq`*[_type == "post"]{
    "slug": slug.current
  }`;
  const slugs: { slug: string }[] = await client.fetch(query);

  return slugs.map(({ slug }) => ({ slug }));
};

// Individual post page
const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    _createdAt,
    mainImage,
    "author": author->{
      name,
      image,
      description
    },
    body
  }`;

  const post: Post | null = await client.fetch(query, { slug });

  if (!post) {
    return (
      <Container className="mb-10">
        <p className="text-red-500">Post not found.</p>
      </Container>
    );
  }

  return (
    <Container className="mb-10">
      {/* Post Title */}
      <h1 className="text-4xl font-bold text-center mb-8">{post.title}</h1>

      {/* Main Image */}
      {post.mainImage && (
        <div className="mb-8">
          <Image
            src={urlFor(post.mainImage).url() || "/placeholder.png"}
            width={800}
            height={500}
            alt={post.mainImage.alt || "Main image"}
            className="object-cover w-full rounded-md"
          />
        </div>
      )}

      {/* Author Section */}
      <div className="flex flex-col items-center text-center mb-10">
        {post.author?.image && (
          <Image
            src={urlFor(post.author.image).url() || "/placeholder.png"}
            width={150}
            height={150}
            alt={post.author.name || "Author image"}
            className="rounded-full object-cover mb-4"
          />
        )}
        <h2 className="text-2xl font-semibold">{post.author?.name || "Unknown Author"}</h2>
        <p className="text-gray-600">{post.author?.description || "No description available"}</p>
      </div>

      {/* Post Body */}
      <div className="prose mx-auto">
        {post.body && (
          <PortableText
            value={post.body}
            components={{
              block: {
                h1: ({ children }) => <h1 className="text-3xl font-bold">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-semibold">{children}</h2>,
                normal: ({ children }) => <p className="text-gray-700">{children}</p>,
              },
            }}
          />
        )}
      </div>
    </Container>
  );
};

export default SlugPage;
