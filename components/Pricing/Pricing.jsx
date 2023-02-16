import styles from './Pricing.module.css';
import cn from 'classname';
import { Button, Ptag } from '@/components';

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <Ptag className={cn(styles.logo)}>{'GPTelegramChat'}</Ptag>
      <Button className={cn(styles.main)}><Ptag>Главная</Ptag></Button>
      <Button appearance={'ghost'} className={cn(styles.conditions)}><Ptag>Условия</Ptag></Button>
      <Button appearance={'ghost'} className={cn(styles.faq)}><Ptag>Руководство</Ptag></Button>
    </div>
  );
};

export default Pricing;
