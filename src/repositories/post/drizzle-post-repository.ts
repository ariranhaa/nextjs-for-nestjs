import { PostModel } from "@/models/post/post-models";
import { PostRepository } from "./post-repository";
import { drizzleDb } from "@/db/drizzle";
import { logColor } from "@/utils/log-color";
import { asyncDelay } from "@/utils/async-delay";
import { SIMULATE_WAIT_IN_MS } from "@/lib/post/constants";

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor("findAllPublic", Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });
    return posts;
  }
  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor("findBySlugPublic", Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error("Post não encontrado para slug");

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor("findAll", Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });
    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor("findById", Date.now());
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
