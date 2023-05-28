import React, { useContext, useEffect, useState } from 'react'
import QuestionsData from "../data/QuestionsData";
import { DataContext } from '../App';

const Quiz = () => {
    const [current, setCurrent] = useState(0);
    const [select, setSelect] = useState('');
    const { score, setScore, setAppState } = useContext(DataContext);

    useEffect(() => {
        checkAnswer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [select]);

    const checkAnswer = () => {
        if (select !== '') {
            if (select === QuestionsData[current].answer) {

                setScore(score + 1);
                console.log('successfully selected ')
            } else {
                console.log('nothing')
            }
            nextQuestion();
        }
    };

    const nextQuestion = () => {
        if (current === QuestionsData.length - 1) {
            setAppState('score');
        }
        setCurrent(current + 1);
        setSelect('');
    };

    return (
        <div className='quiz'>
            <h1>{QuestionsData[current].question}</h1>
            <div className='choices'>
                <button onClick={() => setSelect('A')}>{QuestionsData[current].A}</button>
                <button onClick={() => setSelect('B')}>{QuestionsData[current].B}</button>
                <button onClick={() => setSelect('C')}>{QuestionsData[current].C}</button>
                <button onClick={() => setSelect('D')}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current + 1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz