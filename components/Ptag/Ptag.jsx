import styles from './Ptag.module.css';
import cn from 'classname';

export const Ptag = ({ size = 'm', className, children, ...props }) => {

  return (
    <p
      className={cn(styles.p, className, {
        [styles.xs]: size === 'xs',
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
