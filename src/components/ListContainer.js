import styles from './ListContainer.module.css';
import Button from './Button';

export default function ListContainer() {
  return (
    <section className={styles.listContainer}>
      ListContainer
      <Button style={{ fontSize: '14px', backgroundColor: 'green', color: 'white' }}>
        New issue
      </Button>
    </section>
  );
}