import Navbar from './../components/Navbar'
import CharacterList from './../components/CharacterList'
import EpisodeListModal from '../components/Episode/EpisodeListModal'
import { useState } from 'react';
const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <CharacterList darkMode={darkMode} />
        </>
    );
}
export default Home;