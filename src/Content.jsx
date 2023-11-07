import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "Otis",
      body: "Otis is the cutest!",
      image_url: "https://images.theconversation.com/files/471392/original/file-20220628-11-d6mcuz.jpg?ixlib=rb-1.1.0&rect=0%2C241%2C6709%2C3349&q=45&auto=format&w=1356&h=668&fit=crop",
    },
    {
      id: 2,
      title: "Tiger",
      body: "Tiger is cute!",
      image_url: "https://westparkanimalhospital.com/wp-content/uploads/2019/05/WestPark_iStock-600994082-1024x706-1.jpg",
    },
    {
      id: 3,
      title: "Lady",
      body: "Lady is cute!",
      image_url: "https://ae01.alicdn.com/kf/S593ad81d0c2c49ebaead767d8ba22e0bb/Sphynx-Hairless-Cat-Clothes-Sphinx-Devon-Cute-Pink-Rabbit-For-Extra-Winter-Warmth-Free-Shipping.png",
    },
  ];

  return (
    <div className= "main">
      <PostsNew />
      <PostsIndex myPosts={posts} />
    </div>
  );
}
