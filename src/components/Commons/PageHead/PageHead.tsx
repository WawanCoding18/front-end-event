import Head from "next/head";

//interface proptype to ensure title value
interface PropTypes {
  title?: string;
}

//Make sure to pass the title prop to the Head component
const PageHead = (props: PropTypes) => {
  const { title = "WanCourse" } = props;
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </Head>
  );
};

export default PageHead;
