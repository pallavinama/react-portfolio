import React from 'react';
import Project from '../../components/Project';

const Portfolio = () => {
    return (
        <div>
    <div className="container">
    <main className="row">
      <div className="col-md-8">
        <article className="block">
          <h1 className="block-header">Projects</h1>
          <div class="row">
        <Project name="Rain or Shine" 
        src="./images/SS-rise and shine.png"
         deployURL="https://pallavinama.github.io/Rain-or-Shine/" 
          repoURL="https://github.com/pallavinama/Rain-or-Shine" />
        <Project
        name="Pokemon Team Tracker"
        // src="assets/imgs/PokeTeamManager.png"
        deployURL="https://game-related-app.herokuapp.com/"
        repoURL="https://github.com/pallavinama/PokeTeam-Manager"/>
        </div>
        <div class="row">
        <Project
        name="Password Generator"
        // src=""
        deployURL="https://pallavinama.github.io/HW-Week2-Password-Generator/"
        repoURL="https://github.com/pallavinama/HW-Week2-Password-Generator"/>
        <Project
        name="Horiseon Marketing Agency"
        // src=""
        deployURL= "https://pallavinama.github.io/Horiseon-Marketing-Agency/"
        repoURL="https://github.com/pallavinama/Horiseon-Marketing-Agency"/>
        </div>
        <div class="row">
        <Project
        name="Code Quiz"
        // src=""
        deployURL="https://pallavinama.github.io/HW-Week3-Code-Quiz/"
        repoURL="https://github.com/pallavinama/HW-Week3-Code-Quiz"/>
        <Project
        name="Eat da burger"
        // src=""
        deployURL="https://heroku-eatdaburger.herokuapp.com/index/"
        repoURL="https://github.com/pallavinama/burger"/>
        
    </div>
        </article>
      </div>
    </main>
  </div>
        </div>
    );
};

export default Portfolio;





