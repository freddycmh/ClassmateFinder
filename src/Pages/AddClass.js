// AddClass.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

const AddClass = () => {
    const [className, setClassName] = useState('');
    const [professorName, setProfessorName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/', {
            state: {
                className,
                professorName,
            },
        });
    };


    return (
        <div>
            <Header />
            <div className="container mt-5">
                <div className="card p-4" style={{ maxWidth: '400px', margin: 'auto' }}>
                    <h2 className="text-center mb-4">Add Class</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="className" className="form-label">
                                Class Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="className"
                                value={className}
                                onChange={(e) => setClassName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="professorName" className="form-label">
                                Professor Name:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="professorName"
                                value={professorName}
                                onChange={(e) => setProfessorName(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddClass;
