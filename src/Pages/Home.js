import React, {useState} from "react";
import Header from "../Components/Header";
import "../App.css"

const Home = () => {
    const allClass = [
        { id: 1, className: "CISC 1" },
        { id: 2, className: "ENGL 1" },
        { id: 3, className: "CISC 2" }
    ];
    const allQuiz = [
        { id: 1, quizName: "CISC q1" },
        { id: 2, quizName: "ENGL q1" },
        { id: 3, quizName: "CISC q2" }
    ];

    const [classSearchTerm, setClassSearchTerm] = useState('');
    const [filteredClass, setFilterdClass] = useState(allClass);

    const [quizSearchTerm, setQuizSearchTerm] = useState('');
    const [filteredQuiz, setFilteredQuiz] = useState(allQuiz);



    const handleClassSearchChange = (event) => {
        setClassSearchTerm(event.target.value);
    }

    const handleClassSearchClick = () => {
        let filteredClass = allClass;
        if (!!classSearchTerm && classSearchTerm !== ''){
            filteredClass = allClass.filter(eachClass => eachClass.className.toLowerCase().includes(classSearchTerm.toLowerCase()));
            setFilterdClass(filteredClass);
        }
    }

    const handleQuizSearchChange = (event) => {
        setQuizSearchTerm(event.target.value);
    }

    const handleQuizSearchClick = () => {
        let filteredQuiz = allQuiz;
        if (!!quizSearchTerm && quizSearchTerm !== ''){
            filteredQuiz = allQuiz.filter(eachQuiz => eachQuiz.quizName.toLowerCase().includes(quizSearchTerm.toLowerCase()));
            setFilteredQuiz(filteredQuiz);
        }
    }




    return(
        
        <div >
            <Header/ >
            <h1 className="text-center">Welcome to the home page!</h1>

            <div className="container">
                <div className="row">
                    <div className = "col">
                        <div className="home-subtitle-container">
                            <span className="home-subtitle">Class Search</span>
                        </div>
                        
                        <div className= "row home-search-container">
                            
                                <input type="text" className="form-control home-search-box" placeholder="Search" value={classSearchTerm} onChange={handleClassSearchChange}  />
                                <button className="btn btn-primary btn-sm home-search-button " type="button" onClick={handleClassSearchClick} >Search</button>
                            
                        </div>
                        <div className="row">
                            <ul className="list-group">
                                {filteredClass.map(({id, className}) => (
                                    <li key={id} className="list-group-item">{className}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className = "col">
                        <div className="home-subtitle-container">
                            <span className="home-subtitle">Class Search</span>
                        </div>
                        
                        <div className= "row home-search-container">
                            
                                <input type="text" className="form-control home-search-box" placeholder="Search" value={quizSearchTerm} onChange={handleQuizSearchChange}  />
                                <button className="btn btn-primary btn-sm home-search-button " type="button" onClick={handleQuizSearchClick} >Search</button>
                            
                        </div>
                        <div className="row">
                            <ul className="list-group">
                                {filteredQuiz.map(({id, quizName}) => (
                                    <li key={id} className="list-group-item">{quizName}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Home;