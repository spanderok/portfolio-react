import './App.css';
import React from 'react';
import Header from './components/header/Header.jsx'
import MainMenu from './components/mainMenu/MainMenu.jsx'
import Footer from './components/footer/Footer.jsx';
import AboutThisApp from './components/content/aboutThisApp/aboutThisApp.jsx'
import AboutMe from './components/content/aboutMe/aboutMe.jsx'
import SpaceStation from "./components/content/spaceStation/spaceStation.jsx";
import ComponentForItems from "./components/content/componentForItems/componentForItems.jsx";
import backgroundWebdev from "../src/assets/your life is webdev.png";
import backgroundMomentum from "../src/assets/momentum.jpg";
import backgroundShelter from "../src/assets/shelter.jpg";
import backgroundGamePuzzle from "../src/assets/gamePuzzle.jpg";
import backgroundCovid from "../src/assets/covid-19.jpg";
import backgroundEnglishForKids from "../src/assets/english_for_kids.jpg";
import backgroundPresentation from "../src/assets/api.jpg";
import backgroundForm from "../src/assets/fon-form.jpg";
import { BrowserRouter, Route } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <MainMenu />
        <div className='app-wrapper-content'>
          <Route exact path='/portfolio-react/' component={AboutMe} />
          <Route path='/portfolio-react/about_this_app' component={AboutThisApp} />
          <Route path='/portfolio-react/about_me' render={() => <AboutMe aboutMeItems={props.aboutMeItems}/>}/>
          <Route path='/portfolio-react/space_station' component={SpaceStation} />
          <Route path='/portfolio-react/covid' render={() => <ComponentForItems itemContent='It was a group project of three people. 
                We used teamwork tools such as trello, shared repository, code review, regular calls. 
                My part of the job was to make a graph using the canvas element. The graph works closely with the API,
                as well as with intermediate processing of the data received from the API.
                Displays such states as: the total number of diseases / deaths / recovered by the world or by the selected 
                country for the last month in total or by daily increments, as well as in the ratio per 100,000 population, 
                depending on the position of the switches, as well as interactivity when hovering over day - shows the numbers for the day.'
            itemSource="https://github.com/spanderok/covid/tree/covid-source"
            itemDeploy="https://spanderok.github.io/covid/"/>}/>
          <Route path='/portfolio-react/form' render={() => <ComponentForItems itemContent='When this form is loaded, 
          it fills in the fields in accordance with the data from the url. After entering new data into the form and pressing the submit button,
           the data in the url will be updated.
            If not all fields are filled in, a modal window will pop up asking you to fill in everything.
            The application is packaged with a web pack.
          '
            itemSource="https://github.com/spanderok/test-task/tree/debugTask"
            itemDeploy="https://spanderok.github.io/test-task/build/"/>}/>
          <Route path='/portfolio-react/game_puzzle' render={() => <ComponentForItems itemContent='The tag game was written during the course. 
                Simple layout, a lot of logic, the use of local storage, Data, a solvability check algorithm after random distribution of tags.
                Of course, the quality of the code requires a huge refactoring)'
            itemSource="https://github.com/rolling-scopes-school/spanderok-JS2020Q3/tree/gem-puzzle/gem-puzzle"
            itemDeploy="https://rolling-scopes-school.github.io/spanderok-JS2020Q3/gem-puzzle/"/>}/>
          <Route path='/portfolio-react/shelter' render={() => <ComponentForItems itemContent='The Shelter is the first serious project during training on layout using Pixel Perfect,
                 slider, pagination, pop-up, random generation of sequences without repetitions, adaptability, 
                 work with Sass / SCSS.
                 On assignment, there were only two pages “about the shelter” and “our pets”.
                 Of course there are some peculiarities, yet it was a tutorial project, started with CSS,
                 continued with Sass, etc.'
            itemSource="https://github.com/rolling-scopes-school/spanderok-JS2020Q3/tree/shelter"
            itemDeploy="https://rolling-scopes-school.github.io/spanderok-JS2020Q3/shelter/pages/main/main.html"/>}/>
          <Route path='/portfolio-react/momentum' render={() => <ComponentForItems itemContent='The momentum application is a copy of the “focus for today” application, which was also made during the course.
                 You can enter a task for the day - focus, name.
                 In the upper right corner, the weather for the selected city is displayed,
                 in the upper left you can switch backgrounds, or they themselves will change every hour.
                 At the bottom there are quotes loaded via the API.'
            itemSource="https://github.com/rolling-scopes-school/spanderok-JS2020Q3/tree/momentum"
            itemDeploy="https://rolling-scopes-school.github.io/spanderok-JS2020Q3/momentum/"/>}/>
          <Route path='/portfolio-react/webdev' render={() => <ComponentForItems itemContent='Another tutorial project on layout.'
            itemSource="https://github.com/rolling-scopes-school/spanderok-JS2020Q3/tree/webdev"
            itemDeploy="https://rolling-scopes-school.github.io/spanderok-JS2020Q3/webdev/"/>}/>
          <Route path='/portfolio-react/english_for_kids' render={() => <ComponentForItems itemContent='Training project "english for kids" from the course.'
            itemSource="https://github.com/rolling-scopes-school/spanderok-JS2020Q3/tree/english-for-kids"
            itemDeploy="https://rolling-scopes-school.github.io/spanderok-JS2020Q3/english-for-kids/"/>}/>
          <Route path='/portfolio-react/presentation' render={() => <ComponentForItems itemContent='This is my video presentation from courses on the topic file system API.'
            itemSource="https://github.com/rolling-scopes-school/spanderok-JS2020Q3/tree/presentation/presentation"
            itemDeploy="https://youtu.be/IbqmL-qSKX4"/>}/>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
