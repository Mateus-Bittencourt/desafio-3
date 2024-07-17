import styles from './CardBlog.module.css'

const CardBlog = ({title, date, tech, text}) => {
  return (
    <div className={styles.cardblog}>
      <h3>{title}</h3>
      <br></br>
      <p>{date}    {tech}</p>
      <br></br>
      <p>{text}</p>
    </div>
  );
}

export default CardBlog;
