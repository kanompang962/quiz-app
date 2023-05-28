import React, { useContext } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/QuestionsData';

const Score = () => {
    const { score, setScore, setAppState } = useContext(DataContext);

    const reStartApp = () => {
        setScore(0);
        setAppState('menu');
    };

    return (
        <div className='score'>
            <h2>
                {score} / {QuestionsData.length}
            </h2>
            <br />
            <button onClick={reStartApp}>เล่นอีกครั้ง</button>
        </div>
    )
}

export default Score