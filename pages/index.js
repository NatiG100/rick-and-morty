import Navbar from './../components/Navbar'
import CharacterList from './../components/CharacterList'
import EpisodeListModal from '../components/Episode/EpisodeListModal'
import { gql } from "@apollo/client";
import { useState } from 'react';
import client from './../apollo-client';
import ClientOnly from './../utils/ClientOnly'
const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [searchString, setSearchString] = useState('');
    return (
        <>
            <Navbar darkMode={darkMode} searchString={searchString} setSearchString={setSearchString} setDarkMode={setDarkMode} />
            <ClientOnly>
                <CharacterList searchString={searchString} darkMode={darkMode} />
            </ClientOnly>
        </>
    );
}
// export async function getServerSideProps() {
//     const { data } = await client.query({
//         query: gql`
//     query Characters {
//         characters {
//             results{
//                 image
//                 name
//                 origin{
//                     name
//                 }
//                 species
//                 id
//             }
//         }
//     }
//     `,
//     });

//     return {
//         props: {
//             characters: data.characters,
//         },
//     };
// }
export default Home;