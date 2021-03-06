import epsdstyles from './../../styles/Episode.module.css';
import { AiOutlineHeart, AiFillHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import charstyle from './../../styles/Character.module.css';
import cn from 'classnames';
import Image from 'next/image';
import EpisodList from './EpisodList';
import { useContext } from 'react';
import { check } from './../Character';
import { LikeContext } from './../CharacterList';
const EpisodeListModal = ({ closeHandler, darkMode, charId, character }) => {
    const { like, dislike, list } = useContext(LikeContext);
    const liked = check(list, character.id);
    return (
        <>
            <div className={epsdstyles.backdrop}>
                <div className={cn({
                    [epsdstyles.epsdContDark]: darkMode,
                    [epsdstyles.epsdCont]: !darkMode,
                })}>
                    <div style={
                        {
                            display: "flex",
                            padding: "10px",
                            justifyContent: "space-between",
                            borderBottom: "1px solid #0004"
                        }
                    }>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                            <div style={{ borderRadius: "23px", width: "45px", height: "45px", overflow: "hidden" }}>
                                <Image
                                    alt="R and M"
                                    src={character.image}
                                    height={60}
                                    width={60}
                                />
                            </div>
                            <h2 className={cn({
                                [charstyle.titleDark]: darkMode,
                                [charstyle.title]: !darkMode,
                            })}>{character.name}</h2>
                            <div className={epsdstyles.like}>
                                {liked ? <AiFillHeart size={25} /> : <AiOutlineHeart size={25} />}
                            </div>
                        </div>
                        <div style={{ height: "45px", display: "flex", alignItems: "center", gap: "10px" }}>
                            <button className={cn({
                                [epsdstyles.countDark]: darkMode,
                                [epsdstyles.count]: !darkMode,
                            })}>{character.episode.length} Episodes</button>
                            <div onClick={closeHandler} className={cn({
                                [epsdstyles.closeDark]: darkMode,
                                [epsdstyles.close]: !darkMode,
                            })}>
                                <AiOutlineCloseCircle size={40} />
                            </div>
                        </div>
                    </div>
                    <EpisodList charId={charId} darkMode={darkMode} />
                </div>
            </div>
        </>
    );
}
export default EpisodeListModal;