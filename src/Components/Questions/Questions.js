import React from 'react';

const Questions = () => {
    return (
      <div className="my-20">
          <h1 className="text-4xl text-center mb-5">Questions and Answers</h1>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-1"
        >
          <div className="collapse-title text-xl font-medium">
            How does React works?
          </div>
          <div className="collapse-content">
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-1"
        >
          <div className="collapse-title text-xl font-medium">
            Difference between props and state ?
          </div>
          <div className="collapse-content">
            <p><strong>Props :</strong> Props are used to pass data from one component to another and Props can be used with state and functional components.</p>
            <p><strong>State :</strong> The state is a local data storage that is local to the component only and cannot be passed to other components and State can be used only with the state components/class component.</p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse  collapse-arrow border border-base-300 bg-base-100 rounded-box mb-1"
        >
          <div className="collapse-title text-xl font-medium">
          What is the use of useEffect in react without fatching data?
          </div>
          <div className="collapse-content">
            <ul>
              <li>1. Running on state change: Validating input field</li>
              <li>2. Running on state change: Live filtering.</li>
              <li>3. Running on state change: Trigger animation on new array value</li>
              <li>4. Running on props change: Update paragraph list on fetched API data update.</li>
              <li>5. Running on props change: Updating fetched API data to get BTC updated price.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
export default Questions;



