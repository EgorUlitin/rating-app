import { ReactNode } from 'react';
import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';

const Htag = ({ children, tag }: HtagProps): JSX.Element => {
  const mapping = {
    h1: (children: ReactNode) => <h1 className={styles['h1']}>{children}</h1>,
    h2: (children: ReactNode) => <h2 className={styles['h2']}>{children}</h2>,
    h3: (children: ReactNode) => <h3 className={styles['h3']}>{children}</h3>,
  };
  return mapping[tag](children);
};

export default Htag;
