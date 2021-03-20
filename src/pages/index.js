import fs from "fs";
import Link from "next/link";
import Layout from "../components/Layout";
import { readContentFiles } from "../lib/content-loader";

export default function Home(props) {
  const { posts } = props;

  return (
    <Layout title="">
      <div className="mx-auto w-11/12 bg-white dark:bg-black-light p-5 rounded max-w-screen-lg sm:p-10 ">
        {posts.map((post) => (
          <Link href="/posts/[id]" as={`/posts/${post.slug}`}>
            <div
              key={post.slug}
              className="dark:text-white border-b border-t border-gray-400 dark:border-gray-300 p-1 py-5 sm:hover:opacity-75 cursor-pointer "
            >
              <h2>
                <a>{post.title}</a>
              </h2>
              <div>
                <span>{post.published}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const MAX_COUNT = 5;
  const posts = await readContentFiles({ fs });

  return {
    props: {
      posts: posts.slice(0, MAX_COUNT),
    },
  };
}
