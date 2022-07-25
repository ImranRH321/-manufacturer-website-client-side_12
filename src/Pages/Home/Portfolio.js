import React from "react";

const Portfolio = () => {
  const myImg =
    "https://media-exp1.licdn.com/dms/image/D5635AQExaq4VarVH9w/profile-framedphoto-shrink_200_200/0/1643744666148?e=1659268800&v=beta&t=DCX1JwBW7P8QKcGrE-QuWnQSTedHI7rm5B_ytF09sZ8";
  const self1 = "  https://i.ibb.co/MCKtqjV/cors1.jpg";
  const self2 = "https://i.ibb.co/VNPLKs6/cor2.jpg";
  const self3 = "https://i.ibb.co/3WqCvtj/cors2.jpg";
  return (
    <div>
      <div className="grid grid-cols-2">
        {/* ------------------- */}
        <div className="flex justify-center flex-wrap items-center gap-5">
          <div>
            <img src={myImg} alt="" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Md. Imran Hossain </h2>
            <h2 className="text-2xl font-bold">Front-End Web Developer</h2>
          </div>
        </div>
        <div className="font-bold mt-12">
          <h1 className="text-2xl">Education</h1>
          <h2>Comilla government college</h2>
          <p>
            <small>college first year Then Stop & programing Leaning </small>
          </p>
          <p>
            Email: <span>imranrh247@gmail.com</span>
          </p>
        </div>
      </div>
      {/* next grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 p-5">
        {/* ------------------- */}
        <div className="skill">
          <div className="flex justify-center flex-wrap items-center gap-5">
            <div className="font-bold">
              <h1>Skill</h1>
              <p>HTML5</p>
              <p>css</p>
              <p>Bootstrap</p>
              <p>Tailwind CSS</p>
            </div>
            <div className="font-bold">
              <p>Javascript</p>
              <p>React</p>
              <p>Node Js</p>
              <p>Express js</p>
              <p>mongoDB</p>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <img className="w-[200px]" src={self3} alt="" />
        </div>
        <div>
          <img className="w-[200px]" src={self2} alt="" />
        </div>
        <div>
          <img className="w-[320px]" src={self1} alt="" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 px-12">
        {/* <div> */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body ">
            <div className="font-bold p-5 text-start">
              <h3 className="text-3xl text-primary">Fortfolio</h3>
              <img
                class="mask mask-square w-full"
                src="https://i.ibb.co/1JxYrsj/fortfolo.png"
                alt=""
              />
              <h2 className=" font-bold text-primary mt-5">
                <a href="https://imranrh.netlify.app//" target="_blank">
                  https://imranrh.netlify.app/
                </a>
              </h2>
            </div>
          </div>
        </div>
        {/* ==================  */}
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body ">
            <div className="font-bold p-5 text-start">
              <h2 className=" font-bold text-primary">
                client-:{" "}
                <a href="https://carwarehouse-a72b1.web.app/" target="_blank">
                  https://carwarehouse-a72b1.web.app/
                </a>
              </h2>
              <img
                class="mask mask-square w-full"
                src="https://i.ibb.co/19mv256/assingment11.png"
              />

              <h2 className=" font-bold text-primary">
                server-:{" "}
                <a
                  href="https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-ImranRH321"
                  target="_blank"
                >
                  https://github.com/ProgrammingHeroWC4/warehouse-management-server-side-ImranRH321
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body ">
            <div className="font-bold p-5 text-start">
              <h2 className="my-5 text-3xl text-purple-500">Client side </h2>
              <img
                class="mask mask-square w-full"
                src="https://i.ibb.co/DzHVsxJ/lastimgs.png"
              />

              <h2 className=" font-bold text-primary">
                <a href="https://shoes-product.netlify.app/" target="_blank">
                  https://shoes-product.netlify.app/
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
