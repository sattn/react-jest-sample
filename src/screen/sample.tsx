import React, { useState } from 'react';
// import useReactRouter from 'use-react-router';


const clickEvent = (input: string, setMessage: (message: string) => void) => {
    if (input === '') {
        setMessage('Please enter');
        return;
    }
    setMessage('OK')
}; 

const Sample: React.FC = () => {
    // const { history } = useReactRouter();
    const [ text, setText ] = useState('');
    const [ message, setMessage ] = useState('');

    return (
        <div>
            <input type="text" name="text" onChange={e => setText(e.target.value)} />
            <button
                onClick={() => clickEvent(text, setMessage)}
            >
            Push me
            </button>
            {message ? <p className="message">{message}</p> : null}
        </div>
    );
};

export default Sample;
