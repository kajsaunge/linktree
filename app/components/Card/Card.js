import Image from 'next/image';
import styles from './Card.module.css';

const Card = ({ url, title, description, image, imageAlt }) => {
  return (
    <a
      href={url}
      className={styles.card}
      // target='_blank'
      // rel='noopener noreferrer'
    >
      <div className={styles.cardOverlay}>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
      <Image
        className={styles.cardImage}
        src={image}
        alt={imageAlt}
        width={200}
        height={200}
        priority
      />
    </a>
  );
};

export default Card;
