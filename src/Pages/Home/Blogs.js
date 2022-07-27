import React from "react";

const Blogs = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 my-5 px-12 ">
      <div class="card w-50 bg-base-100 shadow-xl text-black mx-auto">
        <div class="card-body ">
          <div className="font-bold p-5 text-start">
            <h1 className="text-3xl text-start">
              How will you improve the performance of a React Application?
            </h1>
            <li className="text-lg text-start">
              Function/Stateless Components and React.{" "}
            </li>
            <li className="text-lg text-start">Multiple Chunk Files. .</li>
            <li className="text-lg text-start">Use React.</li>
            <li className="text-lg text-start">
              Avoid Inline Function Definition in the Render Function. .
            </li>
            <li className="text-lg text-start">
              Throttling and Debouncing Event Action in JavaScript. ....
            </li>
            <li className="text-lg text-start">
              Avoid using Index as Key for map. ....
            </li>
          </div>
        </div>
      </div>
      {/* ==================  */}
      <div class="card w-50 bg-base-100 shadow-xl text-black mx-auto">
        <div class="card-body ">
          <div className="font-bold text-start">
            <h1 className="text-3xl">
              2. What are the different ways to manage a state in a React
              application?
            </h1>
            <p>
              There are four main types of state you need to properly manage in
              your React apps:
            </p>
            <li>Local state</li>
            <li>
              Local (UI) state – Local state is data we manage in one or another
              component.
            </li>
            <li> Global state</li>
            <li>
              Global (UI) state – Global state is data we manage across multiple
              components.
            </li>
            <li>Server state</li>
            <li>
              Server state – Data that comes from an external server that must
              be integrated with our UI state.
            </li>
            <li>URL state</li>
            <li>
              URL state – Data that exists on our URLs, including the pathname
              and query parameters.
            </li>
          </div>
        </div>
      </div>
      {/* ---3 */}
      <div class="card w-50 bg-base-100 shadow-xl text-black mx-auto">
        <div class="card-body ">
          <div className="font-bold text-start">
            <h2 className="text-3xl">
              3 How does prototypical inheritance work?
            </h2>
            <p>
              Prototypical inheritance allows us to reuse the properties or
              methods from one JavaScript object to another through a reference
              pointer function. All JavaScript objects inherit properties and
              methods from a prototype: Date objects inherit from Date.
            </p>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div class="card w-50 bg-base-100 shadow-xl text-black mx-auto">
        <div class="card-body ">
          <div className="font-bold  text-start">
            <h2 className="text-2xl">
              4 Why you do not set the state directly in React. For example, if
              you have const [products, setProducts] = useState([]). Why you do
              not set products = [...] instead, you use the setProducts
            </h2>
            <p>
              It ensures that the component has been updated and calls for
              re-rendering of the component. setState is asynchronous call means
              if synchronous call get called it may not get updated at right
              time like to know current value of object after update using
              setState it may not get give current updated value on console.
            </p>{" "}
          </div>
        </div>
      </div>
      {/* 5 */}
      <div class="card w-96 bg-base-100 shadow-xl text-black mx-auto">
        <div class="card-body font-bold">
          <div className="text-start m-5">
            <h4 className="text-2xl">
              5. What is a unit test? Why should write unit tests?
            </h4>
            <p>
              A unit test tests a behavior in isolation to other tests. If the
              test relies on an external system, it is not a Unit Test. Unit
              Tests should be written during the design phase, prior to
              implementation to prevent defects from being deployed to
              production.
            </p>
          </div>
        </div>
      </div>
      {/* 6 */}
      <div class="card w-96 bg-base-100 shadow-xl text-black mx-auto">
        <div class="card-body font-bold">
          <div className="text-start m-5">
            <h4 className="text-2xl">6. react dom vs virtual dom ?</h4>
            <p>
              In React, for every DOM object, there is a corresponding “virtual
              DOM object.” A virtual DOM object is a representation of a DOM
              object, like a lightweight copy. A virtual DOM object has the same
              properties as a real DOM object, but it lacks the real thing's
              power to directly change what's on the screen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
