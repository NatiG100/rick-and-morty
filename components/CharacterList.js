import Character from './Character'
import charstyle from './../styles/Character.module.css';

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
    return (
        <div className={charstyle.charlist}>
            {characters.map(character => (<Character key={character.id} character={character} />))}
        </div>
    );
}

export default CharacterList;