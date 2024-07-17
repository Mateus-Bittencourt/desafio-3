import CardBlog from "../elements/CardBlog";
import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div id="Blog" className={styles.blog}>
      <h2>Blog</h2>
      <div id="cards" className={styles.cards}>
        <CardBlog
          title="Making a design system from scratch"
          date="12 Feb 2030"
          tech="Design, Pattern"
          text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <CardBlog
                  title="Creating pixel perfect icons in Figma"
                  date="12 Feb 2030"
                  tech="Figma, Icon Design"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
};

export default Blog;
