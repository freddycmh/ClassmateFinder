import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { useParams, useNavigate, useLocation, Link } from 'react-router-dom';
import AddClass from "./AddClass";
import { useAuth } from "../Components/AuthContext";
import "../App.css"

const Home = () => {

    const { user } = useAuth();
    const location = useLocation();
    const { className, professorName } = location.state || {};
    console.log(className);

    const [allClass, setAllClass] = useState([
        { id: 1, className: "CISC 1" },
        { id: 2, className: "ENGL 1" },
        { id: 3, className: "CISC 2" },
        { id: 4, className: "CISC 2" }
    ]);
    const allQuiz = [
        { id: 1, quizName: "CISC q1" },
        { id: 2, quizName: "ENGL q1" },
        { id: 3, quizName: "CISC q2" },
        { id: 4, quizName: "ENGL q1" },
        { id: 5, quizName: "ENGL q1" },
        { id: 6, quizName: "ENGL q1" },
    ];

    const [classSearchTerm, setClassSearchTerm] = useState('');
    const [filteredClass, setFilteredClass] = useState(allClass);

    const [quizSearchTerm, setQuizSearchTerm] = useState('');
    const [filteredQuiz, setFilteredQuiz] = useState(allQuiz);
    // useEffect(() => {
    //     // Update the allClass array when className is available from the location state

    //     if (className) {
    //         console.log("here")
    //       setAllClass(prevClasses => [
    //         ...prevClasses,
    //         { id: prevClasses.length + 1, className }
    //       ]);
    //       setFilteredClass(prevClasses => [
    //         ...prevClasses,
    //         { id: prevClasses.length + 1, className }
    //       ]);
    //       console.log(filteredClass)
    //     }
    //   }, [className]);





    const handleClassSearchChange = (event) => {
        setClassSearchTerm(event.target.value);
    }

    const handleClassSearchClick = () => {
        let filteredClass = allClass;
        if (!!classSearchTerm && classSearchTerm !== '') {
            filteredClass = allClass.filter(eachClass => eachClass.className.toLowerCase().includes(classSearchTerm.toLowerCase()));
            setFilteredClass(filteredClass);
        } else {
            filteredClass = allClass;
            setFilteredClass(filteredClass);
        }
    }

    const handleQuizSearchChange = (event) => {
        setQuizSearchTerm(event.target.value);
    }

    const handleQuizSearchClick = () => {
        let filteredQuiz = allQuiz;
        if (!!quizSearchTerm && quizSearchTerm !== '') {
            filteredQuiz = allQuiz.filter(eachQuiz => eachQuiz.quizName.toLowerCase().includes(quizSearchTerm.toLowerCase()));
            setFilteredQuiz(filteredQuiz);
        } else {
            filteredQuiz = allQuiz;
            setFilteredQuiz(filteredQuiz);
        }
    }




    return (

        <div >
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="home-subtitle-container">
                            <span className="home-subtitle">Class Search</span>
                        </div>

                        <div className="row home-search-container">

                            <input type="text" className="form-control home-search-box" placeholder="Search" value={classSearchTerm} onChange={handleClassSearchChange} />
                            <button className="btn btn-primary btn-sm home-search-button " type="button" onClick={handleClassSearchClick} >Search</button>

                        </div>
                        <div className="row all-list-item">
                            <div className="me-3 col fixed-box">
                                {
                                    filteredClass.length > 0 ? (
                                        <div className="list-container">
                                            <ul className="list-group">
                                                {filteredClass.map(({ id, className }) => (
                                                    <li key={id} className="list-group-item">
                                                        {user ? (
                                                            <Link to={`/class/${className}`} style={{color : "black"}}>{className}</Link>
                                                        ) : (
                                                            <Link to="/loginpause" style={{color : "black"}}>{className}</Link>
                                                            // or any other link or message you want to display for non-logged-in users
                                                        )}

                                                    </li>

                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <p> No Class Found </p>
                                    )
                                }

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="mt-2 me-3 d-grid">
                                    {user? (<Link to="/addclass" className="btn btn-success mt-2">
                                        Add Class
                                    </Link>):(<Link to="/loginpause" className="btn btn-success mt-2">
                                        Add Class
                                    </Link>)}
                                    
                                    {/* <button class="btn btn-primary" type="button">Add Flipcard</button> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col unfinished">
                        <div className="home-subtitle-container">
                            <span className="home-subtitle">Flip Card Search</span>
                        </div>

                        <div className="row home-search-container">

                            <input type="text" className="form-control home-search-box" placeholder="Search" value={quizSearchTerm} onChange={handleQuizSearchChange} />
                            <button className="btn btn-primary btn-sm home-search-button " type="button" onClick={handleQuizSearchClick} >Search</button>

                        </div>
                        <div className="row all-list-item">
                            <div className="col fixed-box">
                                {
                                    filteredQuiz.length > 0 ? (
                                        <div className="list-container">
                                            <ul className="list-group">
                                                {filteredQuiz.map(({ id, quizName }) => (
                                                    <li key={id} className="list-group-item">{quizName}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : (
                                        <p> No Quiz Found </p>
                                    )
                                }

                            </div>
                        </div>
                        <div className="col">
                            <div class="mt-2  d-grid">
                                <button class="btn btn-primary" type="button">Add Flipcard</button>
                            </div>
                        </div>
                        <div className="overlay">
                            <p>This section is under development.</p>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col">
                        <h3 class="text-start">Welcome to Class Helper</h3>

                        <section class="text-start home-purpose">
                            
                            <p>
                                Explore a wealth of features designed to make your college experience more connected and efficient. Our platform is tailored to enhance your academic journey with a clear focus on your success.
                            </p>

                            <div>
                                <h4>Classmate Search</h4>
                                <p>
                                    Connect effortlessly with your classmates using our intuitive Classmate Search function. Click on your class to discover and connect with fellow students. Collaborate on projects, share notes, and build a stronger academic network.
                                </p>
                            </div>

                            <div>
                                <h4>Quizcard Section (under development)</h4>
                                <p>
                                    Sharpen your knowledge with our Quizcard Section. Access quizzes posted by fellow students to aid in your study sessions. Search for quizzes related to your coursework, challenge yourself, and excel in your academic pursuits.
                                </p>
                            </div>


                            <div>
                                <p>
                                    To unlock these powerful features, please <Link to={`/login`}>log in</Link> to your account. This ensures a personalized and secure experience tailored to your academic journey.
                                </p>
                            </div>

                            <div>
                                <h4>Contact Us</h4>
                                <p>
                                    Have questions or recommendations? We value your feedback! Reach out to us at <a href="mailto:smth@gmail.com?subject=Feedback&body=Hello%20there,">smth@gmail.com</a>, and our team will be delighted to assist you.
                                </p>
                            </div>
                        </section>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Home;