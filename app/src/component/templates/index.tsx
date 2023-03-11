import Layout from "./layout";
import Main from "component/organisms/Main";

// interface Props: {
// }

export const Index = () => {
  const memories = [
    {
      src:"./kama.jpg",
      value:"思い出"
    },
  ]

  return (
    <Layout>
      <Main memories={memories} />
    </Layout>
  );
};

export default Index;
