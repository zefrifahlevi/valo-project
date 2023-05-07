import React, { useState } from 'react'
import foto from "../assets/images/foto.jpg";
import discordicon from "../assets/images/discordicon.svg";
import githubicon from "../assets/images/githubicon.svg";
import instagramicon from "../assets/images/instagramicon.svg";
import brimstone from "../assets/images/brimstone.png";
import jett from "../assets/images/jett.png";


const Valorant = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="Hero">
      <img src={brimstone} alt="" className="brimstone" />
      <img src={jett} alt="" className="jett" />
      <div className="container">
        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h2 className="title">ZEEMARIMO</h2>
              <div className="desc">
                <p>
                  Introducing Zee, codenamed <span>zeemarimo</span>, the newest
                  Valorant Agent from <span>Indonesia</span> specializing in
                  software development. Zee is a junior software engineer with a
                  passion for creating functional technology. He is a highly
                  skilled agent with a diverse skill set and a keen eye for
                  detail.
                </p>
                <p>
                  {" "}
                  Zee's expertise in coding allows him to work with any
                  programming language and his artistic skills make him an
                  exceptional Frontend engineer. His signature ability is{" "}
                  <span>Frontend Web Development</span>, which allows him to
                  create stunning and functional user interfaces for websites.
                  Additionally, his ultimate ability is{" "}
                  <span>Full-stack Web Development</span>, enabling him to build
                  complete and dynamic web applications.
                </p>
                <p>
                  With his diverse skill set and attention to detail, he is a
                  valuable asset to any team looking for a highly skilled agent.
                </p>
              </div>
            </div>
            <div className="flip-card-back">
              <h2 className="title">ZEEMARIMO</h2>
              <div className="row">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <table class="m-3 table table-hover table-dark table-striped text-start">
                        <tbody>
                          <tr>
                            <td>REAL NAME</td>
                            <td>Zein Irfansyah</td>
                          </tr>
                          <tr>
                            <td>CODENAME</td>
                            <td>zeemarimo</td>
                          </tr>
                          <tr>
                            <td>ORIGIN</td>
                            <td>Indonesia</td>
                          </tr>
                          <tr>
                            <td>RACE</td>
                            <td>Sunda</td>
                          </tr>
                          <tr>
                            <td>GENDER</td>
                            <td>Male</td>
                          </tr>
                          <tr>
                            <td>ROLE</td>
                            <td>Engineer</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <a href="https://dsc.gg/mindmesh" target="_blank">
                        <img
                          src={discordicon}
                          alt=""
                          className="icon discord"
                        />{" "}
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://github.com/zeinirfansyah"
                        target="_blank"
                      >
                        <img src={githubicon} alt="" className="icon github" />
                      </a>
                    </div>
                    <div className="col">
                      <a
                        href="https://www.instagram.com/zeemarimo/"
                        target="_blank"
                      >
                        <img
                          src={instagramicon}
                          alt=""
                          className="icon instagram"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <img src={foto} alt="" className="foto" />
                </div>
              </div>
            </div>
          </div>
          <div className="clicktoflip text-end mt-2" onClick={handleFlip}>
            <span>Flip card</span>
            <hr />
          </div>
          <div className="catatan">
            <p>
              Note: For now this website doesn't support mobile devices. Make
              sure you open it in your desktop browser.{" "}
            </p>{" "}
            <p>© 2023 Zein Irfansyah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Valorant