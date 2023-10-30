import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';

const Tag = ({
  children,
  className,
  size = 'm',
  color,
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.grey]: color === 'grey',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
