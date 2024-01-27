import Head from "next/head";
import { FC } from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import { Post } from "@/components/Post";
import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import BackgroundImg from "@/assets/bckgimg.jpg";

export type Posts = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    description: string;
    coverImage: string;
  };
};

const Home: FC<{ posts: Posts[] }> = ({ posts }) => {
  console.log(posts);
  return (
    <section className="relative w-full h-screen">
      <div className="absolute inset-0 w-full h-full">
        <div className="flex flex-col items-center justify-center">
          <Head>
            <title>SBlog</title>
          </Head>
          <div className="flex flex-col items-center pt-[16rem] gap-y-6 h-screen">
            <h1 className="text-center text-5xl md:text-7xl font-bold drop-shadow-lg">
              Courtside Commentary
            </h1>
            <h4 className="text-center text-3xl moto drop-shadow-lg">
              Diving{" "}
              <span className="font-bolder bg-gradient-to-bl from-secondaryColor to-mainColor bg-clip-text text-transparent">
                Deep into the World of
              </span>{" "}
              Sports
            </h4>
            <p className="text-center md:w-[60%] w-[90%] mx-auto mt-10">
              Welcome to Courtside Commentary, where the passion for sports
              meets insightful commentary. This blog is your go-to destination
              for an immersive journey into the dynamic and exhilarating world
              of athletics. Whether you&apos;re a die-hard fan, a casual
              spectator, or someone just dipping their toes into the sports
              universe, we&apos;ve got you covered
            </p>
            <Link href="#blog" className="drop-shadow-lg ">
              <div className="flex flex-row items-center mt-16 gap-x-2 text-mainColor uppercase font-medium border-t border-mainColor rounded-xl pl-3 p-2">
                <p className="link font-bold">See the blogs</p>
                <MdKeyboardDoubleArrowDown className="text-mainColor" />
              </div>
            </Link>
          </div>

          <div
            id="blog"
            className="flex flex-col md:flex-row items-center justify-center mx-20 gap-x-20 mt-20 "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((obj, i) => {
                return <Post key={i} post={obj} />;
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Bckg Image */}
      <div className="w-full h-full">
        <Image className="w-full h-full" alt="" src={BackgroundImg} />
      </div>
    </section>
  );
};

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "blogPosts"));

  const posts = files.map((filename) => {
    //slug
    const slug = filename.replace(".md", "");

    //frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("blogPosts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export default Home;
