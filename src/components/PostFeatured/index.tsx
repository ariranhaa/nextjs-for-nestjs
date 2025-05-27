import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = "qulquer";
  const postLink = `/post/${slug}`;
  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_3.png",
          alt: "alt",
          priority: true,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-05-27"
        >
          27/05/2025 17:00
        </time>
        <PostHeading as="h1" url={postLink}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
        </PostHeading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          commodi perspiciatis tempora voluptatibus nemo ipsa ipsum natus
          facilis eaque nulla, a sint animi quasi! Molestias nam incidunt
          repudiandae obcaecati cum?
        </p>
      </div>
    </section>
  );
}
