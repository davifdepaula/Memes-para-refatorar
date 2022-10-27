import "./Content.css"
import Post from "../Post";


export default function Content() {
  return (
    <div className="posts">
      <Post
        title = "High five, Hyperlink!"
        url = "img/hyperlink.webp"
        alt = "Hyperlink"
        />

      <Post
        title = "Sorry, bro."
        url = "img/sorry_bro.webp"
        alt = "Sorry, bro."
        />
    </div>
  );
}