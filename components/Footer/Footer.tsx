import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import { format } from 'date-fns';
import cn from 'classnames';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(className, styles.footer, {})} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="blank">
        Политика конфиденциальности
      </a>
    </div>
  );
};
