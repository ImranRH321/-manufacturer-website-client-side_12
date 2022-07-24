import React from "react";

const Portfolio = () => {
  const myImg =
    "https://media-exp1.licdn.com/dms/image/D5635AQExaq4VarVH9w/profile-framedphoto-shrink_200_200/0/1643744666148?e=1659268800&v=beta&t=DCX1JwBW7P8QKcGrE-QuWnQSTedHI7rm5B_ytF09sZ8";
  const self1 = "  https://i.ibb.co/MCKtqjV/cors1.jpg";
  const self2 = "https://i.ibb.co/VNPLKs6/cor2.jpg";
  const self3 = "https://i.ibb.co/3WqCvtj/cors2.jpg";
  // ============
  //            https://i.ibb.co/MCKtqjV/cors1.jpg
  //            https://i.ibb.co/VNPLKs6/cor2.jpg
  //            https://i.ibb.co/d6q5tnV/cors2.jpg
  // ============
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

        {/*  */}
        {/* <div className="context  text-start font-bold text-lg">
          <h1 className="text-2xl">Contact Information</h1>
          <div class="divider">OR</div>
          <p>
            Phone: <small>01974007022</small>
          </p>
          <p>
            Address: <small>comilla sadar south upazila </small>
          </p>
          <p>E-mail: imranrh247@gmail.com</p>
          <p>
            Website: <span>https://imranrh.netlify.com/</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
