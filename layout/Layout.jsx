import styles from './Layout.module.css';
import cn from 'classname';
import Header from './Header/Header';
import Main from './Main/Main';

const Layout = ({ children }) => {

  return (
    <div className={styles.wrapper}>
      <Header className={cn(styles.header)} />
      <Main className={cn(styles.body)} />
    </div>
  );
};

export const withLayout = (Component) => {
  return function WithLayoutComponent(props) {
    return (
        <Layout>
          <Component {...props} />
        </Layout>
    );
  };
};
