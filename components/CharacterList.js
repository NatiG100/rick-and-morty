import Character from './Character'
import charstyle from './../styles/Character.module.css';
import { useState } from 'react'
import EpisodeListModal from './Episode/EpisodeListModal';
import React from 'react';
import { useQuery, gql } from "@apollo/client";
const QUERY = gql`
  query Characters {
  characters {
    results{
	  image
      name
      episode{
     	id   
      }
      origin{
        name
      }
      species
      id
    }
  }
}
`;
export const LikeContext = React.createContext({});
export const LikeContextProvider = LikeContext.Provider;
const CharacterList = ({ darkMode, searchString }) => {
    const [list, setList] = useState([]);
    const like = (id) => {
        var likeList = [...list];
        const ret = likeList.filter((item, index) => {
            if (likeList[index].id === id) {
                likeList[index].like = true
            }
            return likeList[index].id === id;
        })
        if (ret.length === 0) {
            likeList.push({ id: id, like: true })
        }
        setList(likeList);
    }
    const dislike = (id) => {
        var likeList = [...list];
        const ret = likeList.filter((item, index) => {
            if (likeList[index].id === id) {
                likeList[index].like = false
            }
            return likeList[index].id === id;
        })
        setList(likeList);
    }

    const [episodModalOpened, setEpisodModalOpened] = useState(false);
    const [charId, setCharId] = useState(null);
    const { data, loading, error } = useQuery(QUERY);

    if (loading) {
        return <h2><a href="#loading" aria-hidden="true" class="aal_anchor" id="loading"><svg aria-hidden="true" class="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loading...</h2>;
    }

    if (error) {
        console.error(error);
        return null;
    }
    //filter characters based on the search string
    const searchExp = new RegExp('^' + searchString.toLowerCase())
    const characters = data.characters.results.filter((character) => searchExp.test(character.name.toLowerCase()));
    const modalOpenHandler = (id) => () => {
        setCharId(id);
        setEpisodModalOpened(true);
    }
    return (
        <LikeContextProvider value={{ dislike, like, list }}>
            <div className={charstyle.charlist}>
                {episodModalOpened &&
                    <EpisodeListModal
                        character={characters.filter(char => (char.id === charId))[0]}
                        charId={charId}
                        darkMode={darkMode}
                        closeHandler={() => setEpisodModalOpened(false)}
                    />}
                {characters.map(character => (<Character
                    darkMode={darkMode}
                    key={character.id}
                    character={character}
                    onClickHandler={modalOpenHandler}
                />))}
            </div>
        </LikeContextProvider>
    );
}

export default CharacterList;