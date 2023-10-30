import { getMenu } from '@/api/menu';
import cn from 'classnames';

import BookIcon from './icons/book.svg';
import CloudIcon from './icons/cloud.svg';
import BoxIcon from './icons/box.svg';
import HatIcon from './icons/hat.svg';
import styles from './Menu.module.css';
import { FirstLevelMenuItem, PageItem } from '@/interfaces/menu.interface';
import { TopLevelCategory } from '@/interfaces/page.interface';

const firstLevelCategory: FirstLevelMenuItem[] = [
  {
    route: 'course',
    name: 'Курсы',
    icon: <HatIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <CloudIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BookIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <BoxIcon />,
    id: TopLevelCategory.Products,
  },
];

export const Menu = async () => {
  const firstCategory = 0;
  const menu = await getMenu(firstCategory);

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelCategory.map(({ id, name, icon, route }) => (
          <div key={route}>
            <a href={`/${route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: id == firstCategory,
                })}
              >
                {icon}
                <span>{name}</span>
              </div>
            </a>
            {id === firstCategory && buildSecondLevel(route)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (route: string) => {
    return (
      <div className={styles.secondBlock}>
        {menu.map(({ _id: { secondCategory }, isOpened, pages }) => (
          <div key={secondCategory}>
            <div className={styles.secondLevel}>{secondCategory}</div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpen]: isOpened,
              })}
            >
              {buildThirdLevel(pages, route)}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map(({ alias, title, _id, category }) => (
      <a
        key={_id}
        href={`/${route}/${alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: false,
        })}
      >
        {category}
      </a>
    ));
  };

  return (
    <div className={styles.menu}>
      <ul>{buildFirstLevel()}</ul>
    </div>
  );
};
