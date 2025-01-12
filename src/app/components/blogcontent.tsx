
import React from "react";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { post } from "@/sanity/schemaTypes/post";
import Container from "@/app/components/Container";
import Image from "next/image";

interface Category {
  _id: string;
  title: string;
}

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  return (
    <Container className="bg-gray-100 py-20 px-10 flex flex-col gap-10">
      {posts?.map((post) => {
        if (!post?.slug?.current) {
          console.warn("Post missing slug:", post);
          return null; // Skip rendering if there's no valid slug
        }

        return (
          <Link
            href={{
              pathname: `/post/${post.slug.current}`,
              query: { slug: post.slug.current },
            }}
            key={post._id}
          >
            <div className="flex flex-col md:flex-row gap-9 bg-white rounded-md hover:shadow-sm duration-200">
              {/* Image Section */}
              <div className="w-full md:w-3/5 group overflow-hidden relative">
                <Image
                  src={
                    post?.mainImage
                      ? urlFor(post.mainImage).url() || "/fallback-image.jpg"
                      : "/fallback-image.jpg"
                  } // Fallback if no image
                  alt={`Image for ${post?.title}`}
                  width={500}
                  height={500}
                  className="w-full max-h-[500px] object-cover group-hover:scale-105 duration-500 rounded-md"
                />
                <div className="absolute top-0 left-0 bg-black/20 w-full h-full group-hover:flex hidden justify-center items-center duration-200">
                  <p className="text-lg font-semibold text-white">Click to Read</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-2/5 flex flex-col justify-between py-10 px-4">
                <div className="flex flex-col gap-2">
                  {/* Title and Description */}
                  <h2 className="text-2xl font-semibold hover:text-orange-600 duration-200 cursor-pointer">
                    {post?.title || "Untitled Post"}
                  </h2>
                  <p className="text-gray-500">
                    {post?.description || "No description available."}
                  </p>
                </div>
                {/* Date */}
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-gray-500">
                    {new Date(post?._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </Container>
  );
};

export default BlogContent;
