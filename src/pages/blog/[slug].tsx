import fs from "fs";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import path from "path";
import { FC } from "react";
import Link from "next/link";
import { PiArrowUDownLeftBold } from "react-icons/pi";
import { marked } from "marked";
import Writter from "@/assets/bujakdavor.jpg";

export type BlogPostProps = {
  blogPost: {
    title: string;
    date: string;
    coverImage: string;
    description: string;
    writter: string;
    writterImg: string;
    writterDescription: string;
  };
  content: string;
};

const BlogPost: FC<BlogPostProps> = ({ blogPost, content }) => {
  const {
    title,
    date,
    coverImage,
    description,
    writter,
    writterImg,
    writterDescription,
  } = blogPost;
  return (
    <section className="w-full">
      <div className="pt-[15rem] pb-[10rem] bg-gradient-to-b from-gray-400 to-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-x-12 w-4/5 mx-auto">
          <div className="flex flex-col gap-y-5">
            <Link href="/">
              <div className="flex items-center gap-x-3">
                <PiArrowUDownLeftBold className="text-mainColor text-2xl" />
                <h4 className="uppercase text-mainColor text-xl font-bold">
                  Go Back
                </h4>
              </div>
            </Link>

            <Image
              className="rounded-xl"
              src={coverImage}
              alt=""
              width={700}
              height={700}
            />
          </div>
          <div className="flex flex-col items-center md:items-start gap-y-10 mt-8">
            <h1 className="font-bold text-4xl md:text-5xl text-center md:text-left">
              {title}
            </h1>
            <p className="text-center md:text-left text-xl">{description}</p>
            <span className="text-mainColor uppercase opacity-50 font-bold">
              {date}
            </span>
          </div>
        </div>
      </div>

      {/* post */}
      <div className="w-4/5 mx-auto">
        <div
          className="flex flex-col gap-6"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        ></div>
        <div className="h-[1px] w-full bg-mainColor mt-12 mb-5"></div>
        <div className="mb-10">
          <p className="text-lg uppercase font-bold mb-5 opacity-50 text-mainColor">
            Written by
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-5 ">
            <Image
              src={Writter}
              alt={writter}
              width={200}
              height={200}
              className="w-[12rem] h-auto rounded-full"
            />
            <div className="flex flex-col items-center md:items-start gap-5">
              <h2 className="font-bold uppercase">{writter}</h2>
              <p className="font-medium w-4/5 text-sm">{writterDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join("blogPosts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params || {};

  const markdownWithMeta = fs.readFileSync(
    path.join("blogPosts", slug + ".md"),
    "utf-8"
  );

  const { data: blogPost, content } = matter(markdownWithMeta);

  return {
    props: {
      blogPost,
      content,
      slug,
    },
  };
};

export default BlogPost;
