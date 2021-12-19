import charstyle from './../styles/Character.module.css';
import cn from 'classnames';
import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
const Character = () => {
    const darkMode = true;
    return (
        <div className={cn({
            [charstyle.containerDark]: darkMode,
            [charstyle.container]: !darkMode,
        })}>
            <div style={{ borderRadius: "5px", height: "148px", border: "1px solid black", overflow: "hidden" }}>
                <Image
                    alt="R and M"
                    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
                    height={170}
                    width={148}
                />
            </div>
            <div style={{ display: "flex", padding: "5px", flexDirection: "column", width: "250px", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", height: "30px", justifyContent: "space-between" }}>
                    <h2 className={cn({
                        [charstyle.titleDark]: darkMode,
                        [charstyle.title]: !darkMode,
                    })}>Rick Snachez</h2>
                    <div className={cn({
                        [charstyle.likeDark]: darkMode,
                        [charstyle.like]: !darkMode,
                    })}><AiOutlineHeart /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}>
                    <div>
                        <p className={cn({
                            [charstyle.infoDark]: darkMode,
                            [charstyle.info]: !darkMode,
                        })}>Origin</p>
                        <p style={{ margin: "0px", marginTop: "4px" }} className={cn({
                            [charstyle.infoDark]: darkMode,
                            [charstyle.info]: !darkMode,
                        })}><b>Earth (c--137)</b></p>
                    </div>
                    <div>
                        <p className={cn({
                            [charstyle.infoDark]: darkMode,
                            [charstyle.info]: !darkMode,
                        })}>Species</p>
                        <p style={{ margin: "0px", marginTop: "4px" }} className={cn({
                            [charstyle.infoDark]: darkMode,
                            [charstyle.info]: !darkMode,
                        })}><b>Human</b></p>
                    </div>
                </div>
                <button className={cn({
                    [charstyle.buttonDark]: darkMode,
                    [charstyle.button]: !darkMode,
                })}>See Episode <BsArrowRight /></button>
            </div>
        </div >
    );
}

export default Character;