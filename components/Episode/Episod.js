import epsdstyles from './../../styles/Episode.module.css';
import cn from 'classnames';
import { MdSmartDisplay } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
const Episode = ({ darkMode }) => {
    return (
        <div className={cn({
            [epsdstyles.epsdcardDark]: darkMode,
            [epsdstyles.epsdcard]: !darkMode,
        })}>
            <p className={cn({
                [epsdstyles.titleDark]: darkMode,
                [epsdstyles.title]: !darkMode,
            })}><b>Pilot</b></p>
            <div style={{ display: "flex", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "50%" }}>
                    <div style={{ color: "rgb(209, 193, 49)" }}>
                        <MdSmartDisplay />
                    </div>
                    <div>
                        <p className={cn({
                            [epsdstyles.infoDark]: darkMode,
                            [epsdstyles.info]: !darkMode,
                        })}><b>S01E01</b></p>
                        <p className={cn({
                            [epsdstyles.infoDark]: darkMode,
                            [epsdstyles.info]: !darkMode,
                        })}>Episod</p>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", width: "50%" }}>
                    <div style={{ color: "rgb(209, 193, 49)" }}>
                        <FaCalendarAlt />
                    </div>
                    <div>
                        <p className={cn({
                            [epsdstyles.infoDark]: darkMode,
                            [epsdstyles.info]: !darkMode,
                        })}><b>December 2, 2013</b></p>
                        <p className={cn({
                            [epsdstyles.infoDark]: darkMode,
                            [epsdstyles.info]: !darkMode,
                        })}>Air Date</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Episode;