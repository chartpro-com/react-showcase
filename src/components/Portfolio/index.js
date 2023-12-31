import React from "react";

import PlaceHolderOne from "../../assets/images/placeholder.png";
import PlaceHolderTwo from "../../assets/images/placeholder.png";
import PlaceHolderThree from "../../assets/images/placeholder.png";
import OddJobs from "../../assets/images/oddjobs.png";
import GigGuide from "../../assets/images/gigguide.png";
import HealthHive from "../../assets/images/heathhive.png";

function Portfolio() {
  return (
    <section class="portfolio">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img src={HealthHive} alt="lookUp" class="card-img-top" />
            <div class="card-body">
              <a href="https://healthhivemedical.herokuapp.com/welcome" target="_blank" rel="noreferrer">
                <button>website</button>
              </a>
              <a href="https://github.com/Basil-NB/HealthHive" target="_blank" rel="noreferrer">
                <button>github</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={GigGuide} alt="Make A'Point" class="card-img-top" />
            <div class="card-body">
              <a href="https://evansterlingmiller.github.io/Gig_Guide/index.html" target="_blank" rel="noreferrer">
                <button>website</button>
              </a>
              <a href="https://github.com/EvanSterlingMiller/Gig_Guide" target="_blank" rel="noreferrer">
                <button>github</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={OddJobs} alt="Final Project" class="card-img-top" />
            <div class="card-body">
              <a href="https://odd-jobs-f138ae74eee7.herokuapp.com" target="_blank" rel="noreferrer">
                <button>website</button>
              </a>
              <a href="https://github.com/JacobRubino/OddJobs" target="_blank" rel="noreferrer">
                <button>github</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={PlaceHolderOne} alt="Coming Soon" class="card-img-top" />
            <div class="card-body">
              <a href="" target="_blank" rel="noreferrer">
                <button>website</button>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <button>github</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img src={PlaceHolderTwo} alt="Coming Soon" class="card-img-top" />
            <div class="card-body">
              <a href="" target="_blank" rel="noreferrer">
                <button>website</button>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <button>github</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderThree}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="" target="_blank" rel="noreferrer">
                <button>website</button>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <button>github</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
