import React from 'react';

import './_mission.css';

const Mission = () => {
  return (
    <div className="mission">
      <div className="mission__header">
        <div className="mission__title">
          <h2 className="mission__title__verbiage">Our Why</h2>
        </div>
        <div className="mission__quote">
          <h6 className="mission__quote__verbiage">The ones who are crazy enough to think that they can change the world, are the ones who do.</h6>
          <h5 className="mission__quote__author">Steve Jobs</h5>
        </div>
      </div>

      <div className="mission__body">
        <div className="mission__statement__one">
          <h6>For every person that we the people of the world, find, empower, and support, one pretty amazing thing will happen.
          </h6>
        </div>
        <div className="mission__statement__two">
          <h6>There is an endless supply of passionate, focused, and dedicated change makers in the world, but the challenge is, they&#39;re already working on the change in their world.
          </h6>
        </div>
        <div className="mission__statement__three">
          <h6>They should be easy to find, but may be hard to convince. But if we help and support them change their world, they&#39;ll change ours
          </h6>
        </div>
        <div className="mission__statement__four">
          <h6>
          The secret of change is to focus all of your energy, not on fighting the old, but on building the new.
          <span>-Socrates</span>
          </h6>
        </div>
        <div className="mission__statement__five"></div>
        <div className="mission__statement__six"></div>
      </div>

    </div>
  )
}

export default Mission;
