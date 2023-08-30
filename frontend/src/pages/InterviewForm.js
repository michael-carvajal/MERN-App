import React, { useState } from 'react';
import { useInterviewsContext } from '../hooks/useInterviewsContext';
import { useAuthContext } from '../hooks/useAuthContext';

const InterviewForm = () => {
    const [interviewData, setInterviewData] = useState({
        interviewer: '',

        interviewee: '',
        content: '',
        title: '',
        date: ''
    });
    const {user} = useAuthContext()
    const { dispatch } = useInterviewsContext();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInterviewData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // You can perform any necessary actionsd with interviewData, like sending it to an API
        console.log('helloeoeoeoeoeoeoe');
        try {
            const response = await fetch('/api/interview', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`    },
                body: JSON.stringify({...interviewData, authorId: user._id})
            })

            const data = await response.json();
            console.log(data);
        } catch (error) {

        }
        dispatch({type: 'CREATE_INTERVIEW', payload: interviewData})
        console.log(interviewData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Interviewer:</label>
                <input
                    type="text"
                    name="interviewer"
                    value={interviewData.interviewer}
                    onChange={handleChange}
                    required
                />
            </div>

            <div>
                <label>Interviewee:</label>
                <input
                    type="text"
                    name="interviewee"
                    value={interviewData.interviewee}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Content:</label>
                <textarea
                    name="content"
                    value={interviewData.content}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={interviewData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Date:</label>
                <input
                    type="date"
                    name="date"
                    value={interviewData.date}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default InterviewForm;
