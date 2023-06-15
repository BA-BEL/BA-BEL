
// Not too proud of having to hard code in this way. Web design isn't my forte haha!

function change_project(project){

    if(project == 1)    {
        
        // reset ss object
        ss = 1;

        // set min and max ss values
        min_ss = 1;
        max_ss = 13;


        // set project_id
        project_id = project

        // fill html
        d3.select("#projectfiller").html(p1)
        
    }
    else {

        d3.select("#projectfiller").html("test")
    }

}




///// SlideShow function

// Project value id
let project_id = 1;

// 'slideshow' object
let ss = 1;

// min and max values
let min_ss;
let max_ss;

function next(){
    if (ss < max_ss){
        ss = ss + 1;
    
        d3.select("#slideshow").attr("src", `static/images/projects/${project_id}/${ss}.png`);        
    }
    else{}
}

function prev(){
    if (ss > min_ss){
        ss = ss - 1;
    
        d3.select("#slideshow").attr("src", `static/images/projects/1/${ss}.png`);
    }
    else{}
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

        
        <li>Some limitations include: 
            <li>TMDb did not have complete data on some movies (e.g. budget)</li>
            <li>The dataset prepared was only for English movies.</li>
            <li>IMDb was used as the only source for gauging film quality</li>  </li>
    </ul>
    
</div>
</div>
</div>`