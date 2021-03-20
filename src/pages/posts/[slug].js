import fs from "fs";
import path from "path";
import Layout from "../../components/Layout";
import { listContentFiles, readContentFile } from "../../lib/content-loader";

export default function Post(params) {
  return (
    <Layout title={params.title}>
      <div className="mx-auto w-11/12 bg-white dark:bg-black-light p-5 pb-8 rounded max-w-screen-lg dark:text-white sm:p-10">
        <div className="mb-10 pb-5 border-b border-dotted border-gray-200">
          <h2 className="text-2xl ">{params.title}</h2>
          <span>{params.published}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: params.content }} />
      </div>
    </Layout>
  );
}

/**
 * ページコンポーネントで使用する値を用意する
 */
export async function getStaticProps({ params }) {
  const content = await readContentFile({ fs, slug: params.slug });

  return {
    props: {
      ...content,
    },
  };
}

/**
 * 有効な URL パラメータを全件返す
 */
export async function getStaticPaths() {
  const paths = listContentFiles({ fs }).map((filename) => ({
    params: {
      slug: path.parse(filename).name,
    },
  }));

  return { paths, fallback: false };
}
