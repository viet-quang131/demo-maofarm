import React from "react";
import frame1 from "../../image/maofarm/Frame 1.png";
import may1 from "../../image/maofarm/may1.png";
import may2 from "../../image/maofarm/may2.png";
import may3 from "../../image/maofarm/may3.png";
import frame1178 from "../../image/maofarm/Frame 1178.png";
import meo from "../../image/maofarm/meo.png";
import image14 from "../../image/maofarm/image 14.png";
import group16 from "../../image/maofarm/Group 16.png";
import frame1160 from "../../image/maofarm/Frame 1160.png";
import frame1161 from "../../image/maofarm/Frame 1161.png";
import play from "../../image/maofarm/Isolation_Mode.png";
import Raydium from "../../image/maofarm/Raydium.png";
import Dexscreener from "../../image/maofarm/Dexscreener.png";
import elment1 from "../../image/maofarm/elements.png"
import elment2 from "../../image/maofarm/elements (1).png"
import elment3 from "../../image/maofarm/elements (2).png"
import elment4 from "../../image/maofarm/elements (3).png"
type Props = {};

const Page2: React.FC = () => {
  return (
    <>
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        .font-press-start-2p {
          font-family: 'Press Start 2P', sans-serif;
        }
        .blend-text {
            font-size: 80px;
            font-family: 'Press Start 2P', sans-serif;
            font-weight: bold;
            background-image: linear-gradient(to right, #488A1B, #FEC53E);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 3px white;
        }
        .blend-text2 {
          
          font-family: 'Press Start 2P', sans-serif;
          font-weight: bold;
          background-image: linear-gradient(to bottom, #F08E88, #DD8F61, #D4645A, #D4645A);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          mix-blend-mode: pass-through; 
          -webkit-text-stroke: 2px #161C2E;
          -text-stroke: 2px #161C2E;
        }
        .gradient-background {
            width: 317px;
            height: 85px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            font-family: 'Press Start 2P', sans-serif;
            font-weight: bold;
            color: #CC2727;
            background-image: linear-gradient(to top, #E3FF36, #FEC53E);
        }
        .gradient-background2 {
          // width: 337px;
          height: 495px;
          font-family: 'Press Start 2P', sans-serif;
          color: #CC2727;
          background-image: linear-gradient(to top, #E3FF36, #FEC53E);
        }
        .gradient-background3 {
          width: 480px;
          height: 200px;
          display: flex;
            justify-content: center;
            align-items: center;
          font-family: 'Press Start 2P', sans-serif;
          color: #CC2727;
          background-image: linear-gradient(to top, #D77B28, #E1A637, #EAC24D);
        }
        .gradient-background4 {
          font-family: 'Press Start 2P', sans-serif;
          color: #CC2727;
          background: linear-gradient(to bottom, #E7E4EF, #D5CFE2, #BEB4CF);
        }
        .simulator-text {          
            font-family: 'Press Start 2P', sans-serif;   
            background-image: linear-gradient(to right, #CC2727, #CC2727);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        `}
      </style>
      <div className="w-[1920px]">
        {/* <img src={frame1} alt="" /> */}
        <section>
          <div className="bg-[#F2DA91] w-[1920px]">
            <header>
              <div className="h-[252px] flex pt-[72px]">
                <div className="menu">
                  <ul className="font-press-start-2p text-[16px] space-x-[100px] flex pl-[80px]">
                    <li>
                      <a href="">Team</a>
                    </li>
                    <li>
                      <a href="">Litepapers</a>
                    </li>
                  </ul>
                </div>
                <div className="logo">
                  <h1 className="blend-text ml-[80px] pb-[100px]">MAOFARM</h1>
                </div>
                <div className="button">
                  <button className="border-4 border-slate-950 gradient-background ml-[80px]">
                    PLAY FOR FREE
                  </button>
                </div>
              </div>
              <div className="w-[1920px] h-[372px]">
                <div className="flex">
                  <h1 className="w-[1075px] h-[127px] simulator-text  text-center ml-[280px] text-[47px]">
                    Farming simulator gamefi on Solana
                  </h1>
                  <img className="ml-3" src={may3} alt="" />
                </div>
                <div>
                  <img className="ml-[280px] mt-[50px]" src={may1} alt="" />
                  <img className="ml-[1200px]" src={may2} alt="" />
                </div>
              </div>
              <div className="w-[1520px]">
                <img src={frame1178} alt="" />
              </div>
            </header>
          </div>
        </section>
        <section>
          <div className="h-[1618px] bg-[#F2DA91]">
            <div className="h-[654px]">
              <div className="flex pt-[54px]">
                <div className="flex">
                  <p className="simulator-text text-[40px] ml-[160px] pr-5 text-center">
                    Maofarm is a charming farming simulator game where you can
                    step back from the busy life and grow the garden of your
                    dreams. Captivating story, Hand-crafted experience.
                  </p>
                </div>
                <div className="flex">
                  <img
                    className="w-[197px] h-[190px] mr-[725px]"
                    src={meo}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="ml-[170px] mt-10">
                  <img className="" src={group16} alt="" />
                </div>
              </div>
              <div className="ml-[490px] space-x-6 mt-10">
                <button>
                  <img src={frame1160} alt="" />
                </button>
                <button>
                  <img src={frame1161} alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="h-[193px] bg-[#F2DA91]">
            <div className="pt-10 flex">
              <div className="button flex ">
                <button className="border-4 border-slate-950 gradient-background ml-[380px]">
                  PLAY FOR FREE
                </button>
              </div>
              <div className="button flex">
                <button className="border-4 border-slate-950 gradient-background ml-[80px]">
                  JOIN OUR COMMUNITY
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="h-[334px] bg-[#F2DA91]">
            <div>
              <div>
                <h1 className="ml-[320px] text-[85px] blend-text2">TOKENOMICS</h1>
              </div>
              <div className="mt-10">
                <p className="simulator-text text-center mr-[420px]">
                  TOTAL SUPPLY : 100 million <br />
                  Tax : 0/0 <br />
                  LP : 100% burnt <br />
                  Contract Address :
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="h-[687px] bg-[#F2DA91]">
            <div>
              <h1 className="mr-[390px] text-center text-[80px] blend-text2">Roadmap</h1>
            </div>
            <div className="grid grid-cols-4 gap-3 ml-[220px] mr-[590px] mt-9">
              <div className="border-4 border-slate-950 rounded-2xl gradient-background2 pl-4 space-y-3">
                <h1 className="text-center mt-3">PHASE 1</h1>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="border-4 border-slate-950 rounded-2xl gradient-background2 pl-4 space-y-3">
                <h1 className="text-center mt-3">PHASE 2</h1>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="border-4 border-slate-950 rounded-2xl gradient-background2 pl-4 space-y-3">
                <h1 className="text-center mt-3">PHASE 3</h1>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
              </div>
              <div className="border-4 border-slate-950 rounded-2xl gradient-background2 pl-4 space-y-3">
                <h1 className="text-center mt-3">PHASE 4</h1>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <img className="" src={play} alt="" />
                  </div>
                  <div className="">
                    <h1 className="">
                      Presale for in-game token to fund development.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="h-[891px] bg-[#F2DA91]">
            <div>
              <h1 className="mr-[390px] pt-[103px] text-center text-[60px] blend-text2">
                OUR PARTNERS
              </h1>
            </div>
            <div className="pt-[50px] flex">
              <div className="button flex ">
                <div className="border-4 border-slate-950 rounded-lg gradient-background3 ml-[280px]">
                  <button className=" border-4 border-slate-950 gradient-background4 w-[430px] h-[160px] mx-auto mt-2 mb-2 ">
                    <img className="ml-10" src={Dexscreener} alt="" />
                  </button>
                </div>
              </div>
              <div className="button flex">
                <div className="border-4 border-slate-950 rounded-lg gradient-background3 ml-[80px]">
                  <button className=" border-4 border-slate-950 gradient-background4 w-[430px] h-[160px] mx-auto mt-2 mb-2">
                  <img className="ml-12" src={Raydium} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-16">
              <h1 className="simulator-text text-center text-[40px] mr-[320px]">Join our social channels</h1>
              <p className="simulator-text text-center text-[15px] mr-[320px]">Follow us and have a chance to win a whitelist slot for ILO event</p>
              <div className="grid grid-cols-4 ml-[520px] mr-[890px] mt-9 ">
                  <div><img src={elment1} alt="" /></div>
                  <div><img src={elment2} alt="" /></div>
                  <div><img src={elment3} alt="" /></div>
                  <div><img src={elment4} alt="" /></div>
              </div>
            </div>
            <div className="bg-[#CAAF8C] h-[120px] mt-[50px]">
              <h1 className="simulator-text text-[20px] text-center mr-[450px] pt-[45px]">@Copyright 2024 by MaoFarm Studio .  </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page2;
