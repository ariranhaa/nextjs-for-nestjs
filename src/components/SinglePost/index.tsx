import { findPostBySlugCached } from "@/lib/post/queries/public";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);

  return (
    <article>
      <header className="group flex flex-col gap-4">
        <Image
          className="rounded-xl"
          src={post.coverImageUrl}
          width={1200}
          height={700}
          alt={post.title}
        />
        <PostHeading url={`/post/${post.slug}`}>{post.title} </PostHeading>

        <p>
          {post.author} | <PostDate dateTime={post.createdAt} />
        </p>
      </header>
      <p className="text-xl mb-8">{post.excerpt}</p>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
