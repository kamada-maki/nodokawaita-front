import type { NextPage } from "next";
import Index from "../component/templates/index";
const Home: NextPage = () => {
  return <Index />;
};
// export async function getServerSideProps() {
//   // Server-side requests are mocked by `mocks/server.js`.
//   // const res = await fetch('https://my.backend/book')
//   // const book = await res.json()

//   return {
//     props: {
//       // book,
//     },
//   };
// }
export default Home;
