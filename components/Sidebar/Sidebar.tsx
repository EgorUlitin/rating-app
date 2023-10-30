import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import { Menu } from '@/components';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(styles.sidebar, {})} {...props}>
      <Menu />
    </div>
  );
};
