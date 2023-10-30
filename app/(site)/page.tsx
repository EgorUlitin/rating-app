import { Metadata } from 'next';
import { getMenu } from '@/api/menu';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Главная страница',
  };
}

export default async function Home() {
  return <main className={styles.main}>Главная страница</main>;
}
