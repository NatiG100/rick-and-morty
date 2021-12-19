import Character from './Character'
import charstyle from './../styles/Character.module.css';
import { useState } from 'react'
import EpisodeListModal from './Episode/EpisodeListModal';

const CharacterList = () => {
    const characters = [
        {
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            name: "Rick Snachez",
            origin: "Earth (c--137)",
            species: "Human",
            id: 1,
        },
        {
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            name: "Rick Snachez",
            origin: "Earth (c--137)",
            species: "Human",
            id: 2,
        },
        {
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            name: "Rick Snachez",
            origin: "Earth (c--137)",
            species: "Human",
            id: 3,
        },
        {
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            name: "Rick Snachez",
            origin: "Earth (c--137)",
            species: "Human",
            id: 4,
        },
        {
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            name: "Rick Snachez",
            origin: "Earth (c--137)",
            species: "Human",
            id: 5,
        },
        {
            image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
            name: "Rick Snachez",
            origin: "Earth (c--137)",
            species: "Human",
            id: 6,
        },

    ];
    const [episodModalOpened, setEpisodModalOpened] = useState(false);
    const modalOpenHandler = () => {
        setEpisodModalOpened(true);
    }
    return (
        <div className={charstyle.charlist}>
            {episodModalOpened && <EpisodeListModal closeHandler={() => setEpisodModalOpened(false)} />}
            {characters.map(character => (<Character
                key={character.id}
                character={character}
                onClickHandler={modalOpenHandler}
            />))}
        </div>
    );
}

export default CharacterList;