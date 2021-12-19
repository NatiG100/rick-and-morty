import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md'
import cn from 'classnames';
import navstyle from './../styles/Navbar.module.css';
const Navbar = () => {
    const darkMode = false;
    return (
        <>
            <div className={cn({
                [navstyle.bgDark]: darkMode,
                [navstyle.bg]: !darkMode
            })}></div>
            <div className={navstyle.navbar}>
                <Image
                    src="/RMLogo.png"
                    width={260}
                    height={70}
                />
                <div className={navstyle.searchContainer}>
                    <div className={cn({
                        [navstyle.searchIconDark]: darkMode,
                        [navstyle.searchIcon]: !darkMode,
                    })}>
                        <AiOutlineSearch size={25} />
                    </div>
                    <input tyep="text" placeholder="Search Characters" className={cn({
                        [navstyle.txtfldDark]: darkMode,
                        [navstyle.txtfld]: !darkMode
                    })} />
                </div>
                <div className={navstyle.darkMode}>
                    <p style={{ height: "18px" }}>Dark Mode</p>
                    <MdDarkMode />
                </div>
            </div>
        </>
    );
}
export default Navbar;