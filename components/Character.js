import charstyle from './../styles/Character.module.css';
import cn from 'classnames';
import Image from 'next/image';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import { LikeContext } from './CharacterList';
import { useContext, useState } from 'react';
export const check = (list, id) => {
    const checked = false;
    list.filter((item, index) => {
        if (list[index].id === id) {
            checked = list[index].like;
        }
        return false;
    })
    return checked;
}

const Character = ({ character, onClickHandler, darkMode }) => {
    const { like, dislike, list } = useContext(LikeContext);
    const liked = check(list, character.id);
    return (
        <div className={cn({
            [charstyle.containerDark]: darkMode,
            [charstyle.container]: !darkMode,
        })}>
            <div style={{ borderRadius: "5px", height: "148px", overflow: "hidden" }}>
                <Image
                    alt="R and M"
                    src={character.image}
                    height={170}
                    width={148}
                />
            </div>
            <div style={{ display: "flex", padding: "5px", flexDirection: "column", width: "250px", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", height: "30px", justifyContent: "space-between" }}>
                    <h2 className={cn({
                        [charstyle.titleDark]: darkMode,
                        [charstyle.title]: !darkMode,
                    })}>{character.name}</h2>
                    <div className={cn({
                        [charstyle.likeDark]: darkMode,
                        [charstyle.like]: !darkMode,
                    })}>
                        {liked ? <AiFillHeart onClick={() => dislike(character.id)} /> :
                            <AiOutlineHeart onClick={() => like(character.id)} />}
                    </div>
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
                        })}><b>{character.origin.name}</b></p>
                    </div>
                    <div>
                        <p className={cn({
                            [charstyle.infoDark]: darkMode,
                            [charstyle.info]: !darkMode,
                        })}>Species</p>
                        <p style={{ margin: "0px", marginTop: "4px" }} className={cn({
                            [charstyle.infoDark]: darkMode,
                            [charstyle.info]: !darkMode,
                        })}><b>{character.species}</b></p>
                    </div>
                </div>
                <button onClick={onClickHandler(character.id)} className={cn({
                    [charstyle.buttonDark]: darkMode,
                    [charstyle.button]: !darkMode,
                })}>See Episode <BsArrowRight /></button>
            </div>
        </div >
    );
}

export default Character;