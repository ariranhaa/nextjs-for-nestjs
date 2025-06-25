import { PostModel } from "@/models/post/post-models";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log("\n", "drizzle findAllPublic", "\n");

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log("\n", "drizzle findBySlugPublic", "\n");

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error("Post não encontrado para slug");

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    console.log("\n", "drizzle findAll", "\n");

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    console.log("\n", "drizzle findById", "\n");

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error("Post não encontrado para ID");

    return post;
  }
}
// this-will-create-the-dillinger-image-and-pull-in-the-necessary-dependencies.-atbvp6 true
// como-a-tecnologia-impacta-nosso-bem-estar false

// 9eb8b7ac-2b48-4835-880a-a1c798e1a595 true
// 6b204dab-2312-4525-820a-a0463560835f false

// (async () => {
//   const repo = new DrizzlePostRepository();
//   // const posts = await repo.findAll();
//   // posts.forEach((post) => console.log(post.id, post.published));
//   const post = await repo.findBySlugPublic(
//     "como-a-tecnologia-impacta-nosso-bem-estar"
//   );
//   console.log(post);
// })();
