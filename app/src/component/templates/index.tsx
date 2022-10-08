// interface Props: {
// }
import Layout from "./layout";
import Main from "component/organisms/Main";
import SideBar from "component/organisms/SideBar";
export const Index = () => {
  return (
    <Layout>
      <Main />
      <SideBar />
    </Layout>
  );
};

export default Index;
