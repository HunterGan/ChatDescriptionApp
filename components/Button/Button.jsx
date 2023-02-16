import styles from './Button.module.css';
import cn from 'classname';

export const Button = ({ appearance = 'basic', children, className, ...props }) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.green]: appearance === 'basic',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
