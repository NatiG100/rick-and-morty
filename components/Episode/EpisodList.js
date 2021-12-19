import Episod from './Episod'
import epsdstyles from './../../styles/Episode.module.css';

const EpisodList = () => {
    const episods = [
        {
            name: "Pilot",
            air_date: "December 2, 2013",
            id: 1
        },
        {
            name: "Pilot",
            air_date: "December 2, 2013",
            id: 2,
        },
        {
            name: "Pilot",
            air_date: "December 2, 2013",
            id: 3,
        },
        {
            name: "Pilot",
            air_date: "December 2, 2013",
            id: 4,
        },
        {
            name: "Pilot",
            air_date: "December 2, 2013",
            id: 5,
        },
        {
            name: "Pilot",
            air_date: "December 2, 2013",
            id: 6,
        },

    ];
    return (
        <div className={epsdstyles.epsdList}>
            {episods.map(episod => (<Episod key={episod.id} episod={episod} />))}
        </div>
    );
}

export default EpisodList;