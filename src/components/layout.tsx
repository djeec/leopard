import styles from '@/styles/layout.module.css'
import Banner from './banner';

type Props = {
    children?: React.ReactNode
  };

const Layout = ({children} : Props) => {
    return (
        <div className={styles.container}>
            <Banner></Banner>
            {children}
        </div>
    );
}

export default Layout;