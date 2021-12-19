import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import cn from 'classnames';
import navstyle from './../styles/Navbar.module.css';
const Navbar = ({ darkMode, setDarkMode, searchString,setSearchString }) => {
    const handleSearch = (event) => {
        setSearchString(event.target.value);
    }
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
                    <input
                        tyep="text"
                        placeholder="Search Characters"
                        onChange={handleSearch}
                        value={searchString}
                        className={cn({
                            [navstyle.txtfldDark]: darkMode,
                            [navstyle.txtfld]: !darkMode
                        })} />
                </div>
                <div onClick={() => setDarkMode((state) => (!state))} className={cn({
                    [navstyle.darkModeDark]: darkMode,
                    [navstyle.darkMode]: !darkMode,
                })}>
                    <p style={{ margin: "0px" }}>{darkMode ? "Light Mode" : "Dark Mode"}</p>
                    {darkMode ? <MdLightMode /> : <MdDarkMode />}
                </div>
            </div>
        </>
    );
}
export default Navbar;