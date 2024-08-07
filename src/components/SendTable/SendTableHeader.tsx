import styles from './SendTableHeader.module.css';

function SendTableHeader() {
  return (
    <thead className={styles.header}>
      <tr>
        <th scope="col">Name</th>
        <th scope="col" className={`${styles.headerColumn}`}>
          Grade
        </th>
      </tr>
    </thead>
  );
}

export default SendTableHeader;
