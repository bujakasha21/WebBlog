import { FC } from "react";
import { Posts } from "@/pages/index";
import Image from "next/image";
import Link from "next/link";

export const Post: FC<{ post: Posts }> = ({ post }) => {
  const { slug, frontmatter } = post;
  const { title, date, description, coverImage } = frontmatter;

  return (
    <div className="group hover:scale-105 duration-300 ease-in-out relative rounded-xl m-6">
      <Link className="rounded-xl" href={`/blog/${slug}`}>
        <p className="text-white font-semibold uppercase z-10 absolute duration-300 ease-in-out -right-14 opacity-0 top-10 group-hover:right-14 group-hover:opacity-70">
          Read more
        </p>
        <div className="flex flex-col items-center gap-y-7">
          <Image
            src={coverImage}
            width={300}
            height={300}
            alt=""
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="flex flex-col items-center md:items-start w-[20rem] px-4 pb-6 gap-y-5">
            <h3 className="text-3xl font-bold text-center md:text-left">
              {title}
            </h3>
            <p className="text-center md:text-left">{description}</p>
            <span className="text-center md:text-left uppercase font-bold text-mainColor opacity-50">
              {date}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
