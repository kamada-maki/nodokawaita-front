import Layout from "./layout";
import Main from "component/organisms/Main";

export interface Memory {
  src: string;
  members: string[];
  restaurant: string;
  date: string;
}

export const Index = () => {
  const memories: Memory[] = [
    {
      src: "kama.jpg",
      members: ["sato", "kama","kitanosannnnn","ryuchan","yuihan","sacchan","yosssssy","iidasan"],
      restaurant: "原価バー",
      date: "2023/3/28",
    },
    {
      src: "kama.jpg",
      members: ["sato", "kama"],
      restaurant: "原価バー",
      date: "2023/3/28",
    },
    {
      src: "kama.jpg",
      members: ["sato", "kama"],
      restaurant: "原価バー",
      date: "2023/3/28",
    },
    {
      src: "kama.jpg",
      members: ["sato", "kama"],
      restaurant: "原価バー",
      date: "2023/3/28",
    },
    {
      src: "kama.jpg",
      members: ["sato", "kama"],
      restaurant: "原価バー",
      date: "2023/3/28",
    },
    {
      src: "kama.jpg",
      members: ["sato", "kama"],
      restaurant: "原価バー",
      date: "2023/3/28",
    },
  ];

  return (
    <Layout>
      <Main memories={memories} />
    </Layout>
  );
};

export default Index;
