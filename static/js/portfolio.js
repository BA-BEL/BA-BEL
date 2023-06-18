
// Not too proud of having to hard code in this way. Web design isn't my forte haha!

function change_project(project) {

    // Movie Analysis project
    if (project == 1) {

        // reset ss object
        ss = 1;

        // set min and max ss values
        min_ss = 1;
        max_ss = 13;


        // set project_id
        project_id = project;

        // fill html
        d3.select("#projectfiller").html(p1)

    }
    // Crowdfunding ETL project
    else if (project == 2) {

        // reset ss object
        ss = 1;

        // set min and max ss values
        min_ss = 1;
        max_ss = 2;


        // set project_id
        project_id = project;

        // fill html
        d3.select("#projectfiller").html(p2)
    }
    // NBA Portal project
    else if (project == 3) {

        // reset ss object
        ss = 1;

        // set min and max ss values
        min_ss = 1;
        max_ss = 6;


        // set project_id
        project_id = project;

        // fill html
        d3.select("#projectfiller").html(p3)
    }
    // Restaurant Review Project
    else if (project == 4) {

        // reset ss object
        ss = 1;

        // set min and max ss values
        min_ss = 1;
        max_ss = 8;


        // set project_id
        project_id = project;

        // fill html
        d3.select("#projectfiller").html(p4)
    }
    // Misc 
    else if (project == 999) {

        // reset ss object
        ss = 1;

        // set min and max ss values
        min_ss = 1;
        max_ss = 9;


        // set project_id
        project_id = project;

        // fill html
        d3.select("#projectfiller").html(misc)
    }
    else {

        d3.select("#projectfiller").html("NA")
    }

}




///// SlideShow function

// Project value id
let project_id = 1;

// Initialize 'slideshow' object
let ss = 1;

// Declare min and max values
let min_ss;
let max_ss;


function next() {
    if (ss < max_ss) {
        ss = ss + 1;

        d3.select("#slideshow").attr("src", `static/images/projects/${project_id}/${ss}.png`);
    }
    else { }
}

function prev() {
    if (ss > min_ss) {
        ss = ss - 1;

        d3.select("#slideshow").attr("src", `static/images/projects/${project_id}/${ss}.png`);
    }
    else { }
}



////// Project htmls

// Project 1
let p1 = `<h4><a href="https://github.com/BA-BEL/movie-analysis-DABC-P1">Two Decades Of Movies: An
analysis of movies available in Australia on Netflix, Stan and Amazon Prime.</a></h4>
<hr>
<div class="container scroll">

<div class="row">
<div class="w3-panel w3-light-grey rounded">
    <h5>Project Overview:</h6>
        <p>This analysis was conducted to research:
        <ul>
            <li>which platform provides the best quality of film on average;</li>
            <li>which genres have brought the most success over a 20-year period;</li>
            <li>which platform's films have the most diverese range of countries of origin;
                and</li>
            <li>which platform hosts the most profitable films?</li>
        </ul>
        </p>

        <p>Using TMDb and IMDb, a dataset of movies released after 2000 was prepared. These
            movies were specified to be on Netlfix, Stan, and Amazon Prime.</p>
</div>
</div>

<div class="row f-height">
<div class="w3-panel w3-light-grey rounded">
    <h5>Sample Plots:</h5>
    <div class="row">

        <div class="col-md-12">
            <img src="static/images/projects/1/1.png" alt="" class="fitted" id="slideshow">
        </div>

    </div>
    <br>
    <div class="row">
        <div class="col-md-2">
            <button class="w3-button w3-dark-grey rounded std"
                onclick="prev()">Previous</button>
        </div>
        <div class="col-md-2">
            <button class="w3-button w3-dark-grey rounded std" onclick="next()"> Next
            </button>
        </div>
    </div>
</div>
</div>

<div class="row">
<div class="w3-panel w3-light-grey rounded">
    <h5>Notes:</h5>
    <ul>
        <li>This project had the challenge of finding the right API. My team took an 
            interesting approach to ensure we could reduce costs in preparing the dataset. 
            We used two TMDb API endpoints in conjunction to query their database the way we intended.
        <br>
            From there, the TMDb dataset had IMDb IDs which we could then use as a key to merge IMDb data.</li>

        
            <li>Some limitations include: <ul>

            <li>TMDb did not have complete data on some movies (e.g. budget)</li>
            <li>The dataset prepared was only for English movies.</li>
            <li>IMDb was used as the only source for gauging film quality</li>  
        </ul>
        </li>
    </ul>
    
</div>
</div>
</div>`;

// Project 2
let p2 = `<h4><a href="https://github.com/BA-BEL/Crowdfunding_ETL">Crowdfunding ETL</a></h4>
<hr>
<div class="container scroll">

    <div class="row">
        <div class="w3-panel w3-light-grey rounded">
            <h5>Project Overview:</h6>
                <p>This project served to exercise skills based on the ETL pipeline: extract,
                    transform, and load.</p>
                    <ul>
                        <li>Data was extracted and transformed using Python's Pandas module.</li>
                        <li>The data was then loaded and given the key relationships using PostgreSQL.
                            <ul>
                                <li>This was drafted and tested by sketching an entity relationship
                                    diagram (ERD) and comparing the results.</li>

                            </ul>
                        </li>

                    </ul>

        </div>
    </div>

    <div class="row f-height">
        <div class="w3-panel w3-light-grey rounded">
            <h5>ERDs:</h5>
            <div class="row">

                <div class="col-md-12">
                    <img src="static/images/projects/2/1.png" alt="" class="fitted-larger"
                        id="slideshow">
                </div>

            </div>
            <br>
            <div class="row">

                <div class="col-md-2">
                    <button class="w3-button w3-dark-grey rounded std"
                        onclick="prev()">Previous</button>
                </div>
                <div class="col-md-2">
                    <button class="w3-button w3-dark-grey rounded std" onclick="next()"> Next
                    </button>
                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="w3-panel w3-light-grey rounded">
            <h5>Notes:</h5>
            <ul>
                <li>This project focused more on back-end development and demonstrates the data engineering process of the data pipeline. Thus, a majority of the work done is through back-end code resulting in a database, in contrast to the result of plots with the data.</li>
                <li>For a more detailed look into the ETL project, 
                    kindly check the project's <a href="https://github.com/BA-BEL/Crowdfunding_ETL" target="_blank">repository</a>.</li>
            </ul>
        </div>
    </div>
</div>`;

// Project 3
let p3 = `<h4><a href="https://github.com/BA-BEL/nba-portal-DABC-P3">NBA Portal</a></h4>
<hr>
<div class="container scroll">

    <div class="row">
        <div class="w3-panel w3-light-grey rounded">
            <h5>Project Overview:</h6>
                <p>This project focused on creating an interactive visualization portal using a
                    combination of:

                <ul>
                    <li>Python,</li>
                    <li>APIs</li>
                    <li>SQLite,</li>
                    <li>HTML,</li>
                    <li>CSS, and</li>
                    <li>JavaScript.</li>
                </ul>
                </p>

                <p>
                    Multiple databases were created through an ETL process, creating databases
                    containing information about players, games, and teams.
                <ul>
                    <li>More info can be found in the README.md <a
                            href="https://github.com/BA-BEL/nba-portal-DABC-P3/tree/main/data">here</a>.
                    </li>
                </ul>
                </p>

                <p>The result was a flask server that had interactivity, in addition to API
                    functionality.</p>

                <ul>
                    <li>API outputs a JSON through a Python ORM accessing the created SQLite
                        databases.</li>
                </ul>

                <p>Data for the team was sourced through API scraping and merging of other sourced data to create a proof-of-concept of prices of upcoming games.</p>

        </div>
    </div>

    <div class="row f-height">
        <div class="w3-panel w3-light-grey rounded">
            <h5>Preview:</h5>
            <div class="row">

                <div class="col-md-12">
                    <img src="static/images/projects/3/1.png" alt="" class="fitted-larger"
                        id="slideshow">
                </div>

            </div>
            <br>
            <div class="row">

                <div class="col-md-2">
                    <button class="w3-button w3-dark-grey rounded std"
                        onclick="prev()">Previous</button>
                </div>
                <div class="col-md-2">
                    <button class="w3-button w3-dark-grey rounded std" onclick="next()"> Next
                    </button>
                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="w3-panel w3-light-grey rounded">
            <h5>Notes:</h5>
            <ul>
                <li>The created API contains a draft search function that indexes the player database and
                    filters for the queried team.</li>

                <li>Almost every step of the data pipeline was implemented into this project. Data was taken through an ETL process, including validation; 
                    the data was then analyzed for trends; and finally, the data was then visualized in an interactive manner through the NBA portal.</li>

            </ul>

        </div>
    </div>
</div>`;

// Project 4
let p4 = `                    <h4><a href="https://github.com/BA-BEL/resto-review-project">Restaurant Review Demo</a></h4>
<hr>
<div class="container scroll">

    <div class="row">
        <div class="w3-panel w3-light-grey rounded">
            <h5>Project Overview:</h6>
                <p>This project focused on creating an alternative to the conventional '5-star' rating system using a natural language processing (NLP)
                    model to classify text reviews with the sentiments of positive, neutral, or negative. <br>
                    Below are the tools used for this project pipeline:

                <ul>
                    <li>Python (Jupyter Notebook, Flask, SQLAlchemy, Pandas, RoBERTa),</li>
                    <li>SQLite,</li>
                    <li>HTML,</li>
                    <li>CSS, and</li>
                    <li>JavaScript.</li>
                </ul>
                </p>

                <p>Google Places API was used to gather a list of restaurants located in Melbourne CBD. A grid approach was used to bypass Google's API limit of 
                    60 restaurants per call. <br>
                    To collect the reviews, we utilized the <a href="https://github.com/gaspa93/googlemaps-scraper">Google Map Reviews Scraper created by Mattia Gasparini</a>.                                        
                </p>

                <p>Sentiment analysis was performed using a pre-trained model (RoBERTa) to build a restaurant recommendation system based on the overall 
                    positive percentage reviews per restaurant.
                </p>
               

        </div>
    </div>

    <div class="row f-height">
        <div class="w3-panel w3-light-grey rounded">
            <h5>Previews:</h5>
            <div class="row">

                <div class="col-md-12">
                    <img src="static/images/projects/4/1.png" alt="" class="fitted-larger"
                        id="slideshow">
                </div>

            </div>
            <br>
            <div class="row">

                <div class="col-md-2">
                    <button class="w3-button w3-dark-grey rounded std"
                        onclick="prev()">Previous</button>
                </div>
                <div class="col-md-2">
                    <button class="w3-button w3-dark-grey rounded std" onclick="next()"> Next
                    </button>
                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="w3-panel w3-light-grey rounded">
            <h5>Notes:</h5>
            <ul>

                <li>Mock data was initially used from kaggle to explore different NLPs for comparison (NLTK Vader, SIA, BERT, and RoBERTa); 
                    after preprocessing the mock data, front-end flask application was created.</li>

                <li>This project was created in around a week and serves as a proof-of-concept for how machine learning might be implemented 
                    to improve the current review system. Therefore, there were plenty of planned features that can be further integrated into later iterations 
                    of this concept, such as:
                    
                    <ul>
                        <li>A machine learning model trained specifically for restaurant reviews</li>
                        <li>Accuracy measures of the model</li>
                        <li>Different recommendation systems (e.g. one through machine learning to give different weights for restaurants with 
                            different review counts)</li>
                        <li>Submissions of new reviews that get added to the database and are classified, thus contributing to the overall rating.</li>
                    </ul>

                </li>

                
            </ul>

        </div>
    </div>
</div>`;





/////// Misc slideshow

let misc = `<h4>Misc.</h4>
<hr>
<div class="container scroll">

    <div class="row">
        <div class="w3-panel w3-light-grey rounded">
            <h5>Overview:</h6>
                <p>Here are some samples of my experiences with R, Python, Javascript, and more!</p>

                <p>Most of these samples are part of my other work in the minor repositories.</p>
        </div>
    </div>

    <div class="row f-height">
        <div class="w3-panel w3-light-grey rounded">
            <h5>Samples:</h5>
            <div class="row">

                <div class="col-md-12">
                    <img src="static/images/projects/999/1.png" alt="" class="fitted-larger"
                        id="slideshow">
                </div>

            </div>
            <br>
            <div class="row">

                <div class="col-md-2">
                    <button class="w3-button w3-dark-grey rounded std"
                        onclick="prev()">Previous</button>
                </div>
                <div class="col-md-2">
                    <button class="w3-button w3-dark-grey rounded std" onclick="next()"> Next
                    </button>
                </div>
            </div>

        </div>
    </div>

</div>`;