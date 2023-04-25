import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import Posts from "./Posts";


console.log(blogData);

function App() {
  const blogName = blogData.name;
  const logoImg = blogData.image;
  const about = blogData.about;
  const posts = blogData.posts.map((post) =>
    <Posts id={post.id}
      title={post.title}
      date={post.date}
      preview={post.preview}
      minutes={post.minutes}/>
  )
  return (
    <div className="App">
      <Header name={blogName} image={logoImg} about={about}/>
      {posts}
    </div>
  )
}

export default App;
