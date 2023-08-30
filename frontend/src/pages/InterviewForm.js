import React, { useState } from 'react';

const InterviewForm = () => {
    const [interviewData, setInterviewData] = useState({
        interviewer: '',
        authorId: '',
        interviewee: '',
        content: '',
        title: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInterviewData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform any necessary actions with interviewData, like sending it to an API
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
                <label>Author ID:</label>
                <input
                    type="text"
                    name="authorId"
                    value={interviewData.authorId}
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
