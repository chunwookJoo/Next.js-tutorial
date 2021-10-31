import Head from "next/head";
const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "My Blog",
  keyword: "My Blog by Next.js",
  contents: "Next.js",
};

export default HeadInfo;
