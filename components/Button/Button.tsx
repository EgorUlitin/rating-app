import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';
import cn from 'classnames';

const Button = ({
  children,
  appearance,
  className,
  arrow = 'none',
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(
        {
          [styles.primary]: appearance == 'primary',
          [styles.ghost]: appearance == 'ghost',
        },
        styles.button,
        className,
      )}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: arrow === 'down',
            [styles.rigth]: arrow === 'rigth',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
