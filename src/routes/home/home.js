import DirectoryCategory from "../../components/directory/DirectoryCategory";

function Home() {
  const categories = [
    {
      id: 1,
      title: "Hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      id: 3,
      title: "Womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      id: 4,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/mens.png",
    },
    {
      id: 5,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
  ];

  return <DirectoryCategory categories={categories} />;
}
export default Home;
