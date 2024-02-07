import React, { useState } from "react";
import { Button, Form, Input, InputNumber, message, Upload, Image } from "antd";
import image from "../../image/image 20.png";
import image2 from "../../image/image 49.jpg";
const Page1: React.FC = () => {
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-5">
          <div className="relative">
            <img className="h-[200px] w-full" src={image2} alt="" />
            <div className="menu bg-indigo-900 w-[690px] rounded-l-[40px] h-[50px] flex justify-center items-center absolute bottom-0 right-0 mb-[20px]">
              <ul className="flex items-center">
                <div className="space-x-7 flex">
                  <li>
                    <a href="">a</a>
                  </li>
                  <li>
                    <a href="">b</a>
                  </li>
                  <li>
                    <a href="">c</a>
                  </li>
                </div>
                <div className="ml-[35px] items-center">
                  <input
                    className="text-center rounded-l-[40px] w-[400px] h-[30px]"
                    type="search"
                    placeholder="Search"
                  />
                  <button
                    className="rounded-r-[40px] w-[40px] h-[30px] text-center ml-2 bg-blue-200"
                    type="submit"
                  >
                    +
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <section className="banner">
        <div className="mx-auto max-w-7xl px-5">
          <div>
            <div className="bg-[#F7F6F1] h-[500px] w-full">
              <div className="container flex">
                <div className="flex-1 p-2 flex">
                  <div className="mt-[100px] ml-[100px]">
                    <img src={image} alt="" />
                  </div>
                  <div className="grid grid-cols-1 gap-1">
                    <Button className="ml-[50px] mt-[100px] bg-orange-600 rounded-3xl text-white">
                      abc
                    </Button>
                    <Button className="ml-[60px] mt-16 w-[200px] bg-orange-600 rounded-3xl text-white">
                      abc
                    </Button>
                  </div>
                </div>

                <div className="flex-1 p-2 grid grid-cols-2 gap-3 mt-[100px] text-xs mr-[200px]">
                  <h3 className="col-span-2  text-[#135E95] text-lg">
                    quidem corrupti odit
                  </h3>
                  <div className="grid grid-cols-1 text-pretty">
                    <h1 className="font-bold text-orange-500">Lorem</h1>
                    <label>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores quidem corrupti odit officiis adipisci a alias
                      quibusdam, nisi, architecto minima cupiditate itaque
                      beatae ullam fugit minus, quis quisquam ea. Accusamus.
                    </label>
                    <Button className="bg-orange-600 rounded-3xl mt-5 text-white">
                      abc
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 text-pretty ml-3">
                    <h1 className="font-bold text-[#135E95]">Lorem</h1>
                    <label>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores quidem corrupti odit officiis adipisci a alias
                      quibusdam, nisi, architecto minima cupiditate itaque
                      beatae ullam fugit minus, quis quisquam ea. Accusamus.
                    </label>
                    <Button className="bg-orange-600 rounded-3xl mt-5 text-white">
                      abc
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-7xl px-5">
          <div>
            <div className="bg-[#9d9d9c] h-[500px] w-full">
              <div className="container flex grid grid-cols-3 gap-8 justify-center items-center">
                <div className=""></div>

                <div className="text-pretty mt-[100px] space-y-8">
                  <h3 className="font-bold text-3xl w-[50px]">quidem corr</h3>
                  <h1 className="text-orange-500 font-bold text-xl">Lorem</h1>
                  <div className="">
                    <label className="text-gray-700">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores quidem corrupti odit officiis adipisci a alias
                      quibusdam, nisi, architecto minima cupiditate itaque
                      beatae ullam fugit minus, quis quisquam ea. Accusamus.
                    </label>
                  </div>
                  <div className="flex space-x-1 pr-10">
                    <Button className="bg-orange-500 rounded-l-full rounded-br-full rounded-br-full w-[100px]">
                      abc
                    </Button>
                    <Button className="rounded-[12px] rounded-r-full rounded-tl-full rounded-tl-full w-full bg-[#11A6CF]">
                      abc
                    </Button>
                    <Button className="rounded-r-[30px] w-[100px] bg-orange-500">
                      abc
                    </Button>
                  </div>
                </div>

                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="mx-auto max-w-7xl px-5">
          <div>
            <div className="bg-[#11A6CF] h-[500px] w-full">
              <div className="container flex grid grid-cols-4 gap-8 justify-center items-center">
                <div className="text-pretty mt-[50px] space-y-3 mx-auto pl-9">
                  <h3 className="font-bold text-3xl text-white">quidem corr</h3>
                  <h1 className="font-bold text-white text-xl">Lorem</h1>
                  <div className="">
                    <label className="text-[12px] text-slate-200">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores quidem corrupti odit officiis adipisci a alias
                      quibusdam, nisi, architecto minima cupiditate itaque
                      beatae ullam fugit minus, quis quisquam ea. Accusamus.
                    </label>
                  </div>
                  <div className="pt-[80px] pl-[50px]">
                    <img src={image} alt="" />
                  </div>
                  <div className="flex space-x-1 pt-3 pl-[50px]">
                    <Button className="rounded-xl w-[70px] bg-cyan-500">
                      abc
                    </Button>
                    <label className="mb-8 pb-8" htmlFor="">
                      ipsum dolor
                    </label>
                  </div>
                </div>
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="mx-auto max-w-7xl px-5">
          <div>
            <div className="bg-[#F7F6F1] h-[400px] w-full">
              <div className="container flex">
                <div className="flex-1 p-2 flex">
                  <div className="mt-[100px] ml-[100px] text-center pt-4">
                    <h1 className="font-bold  text-xl">Lorem</h1>
                    <h3 className="font-bold text-3xl ">quidem corr</h3>
                    <label className="text-xs">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores quidem corrupti odit officiis adipisci a alias
                    </label>
                  </div>
                </div>

                <div className="flex-1 p-2 mt-[100px] text-xs mr-[200px]">
                  <menu className="ml-[200px]">
                    <ul className="flex space-x-10">
                        <li>a</li>
                        <li>b</li>
                        <li>c</li>
                        <li>d</li>
                        <li>e</li>
                        <li>f</li>
                        <li>g</li>
                    </ul>
                  </menu>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page1;
