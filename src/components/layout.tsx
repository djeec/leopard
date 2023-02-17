import styles from '@/styles/layout.module.css'

type Props = {
    children?: React.ReactNode
  };

const Layout = ({children} : Props) => {
    return (
        <div className={styles.container}>{children}</div>
    );
}

export default Layout;