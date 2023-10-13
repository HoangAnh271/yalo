import Head from "next/head";
import Link from "next/link";
import { use, useState } from "react";
import Script from "next/script";
import { api } from "~/utils/api";
import SideNav from "~/components/SideNav";
export default function Home() {
  return (
    <>
      <div className="flex flex-row">
        <SideNav />
        <div className="bg-white-100 flex h-screen w-[22rem] border-r border-black">
          <div className="flex flex-col">
            <div className="flex h-16 w-[22rem] gap-2 bg-green-300 px-[1rem]">
              <div className="flex flex-col justify-center ">
                <img
                  className="h-4 w-4"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
                ></img>
                <input className="h-8 w-60" placeholder="Search"></input>
              </div>
              <div className="flex flex-col justify-center ">
                <button className="h-8 w-8 bg-pink-300">+</button>
              </div>
              <div className="flex flex-col justify-center">
                <button className="h-8 w-8 bg-yellow-300">+</button>
              </div>
            </div>
            <div className="flex h-8 w-[22rem] bg-blue-300 px-[1rem]">Box</div>
            <div className="contact-grid h-18 flex w-[22rem] bg-green-300 px-[1rem]">
              <div className="contact-item1  flex h-[74px] w-[60px] flex-wrap  ">
                <div className="flex h-[26px] w-[26px] self-end">
                  <img
                    className="rounded-full"
                    src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-avatar-luffy-mac-do-kimono.jpg"
                  />
                </div>
                <div className=" flex h-[26px] w-[26px] self-end">
                  <img
                    className="rounded-full"
                    src="https://i.pinimg.com/1200x/c2/52/56/c252568cba621a16810b3fe897453f84.jpg"
                  />
                </div>
                <div className="flex h-[26px] w-[26px]">
                  <img
                    className="rounded-full"
                    src="https://i.pinimg.com/736x/82/01/ff/8201ffe22ddc4bd7a32e234678d46f2f.jpg"
                  />
                </div>
                <div className="flex h-[26px] w-[26px]">
                  <div className="rounded-full bg-white">99+</div>
                </div>
              </div>
              <div className=" contact-item2 h-6 w-[219px] self-end">
                User Name
              </div>
              <div className=" contact-item3 h-6 self-end">t</div>
              <div className=" contact-item4 h-6 self-end">opt</div>
              <div className=" contact-item5  h-[36px] w-[252px]">messeage</div>
            </div>
            <div className="contact-grid h-18 flex w-[22rem] bg-green-300 px-[1rem]">
              <div className="contact-item1  flex h-[74px] w-[60px] flex-wrap  ">
                <div className="flex h-[26px] w-[26px] self-end">
                  <img
                    className="rounded-full"
                    src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-avatar-luffy-mac-do-kimono.jpg"
                  />
                </div>
                <div className=" flex h-[26px] w-[26px] self-end">
                  <img
                    className="rounded-full"
                    src="https://i.pinimg.com/1200x/c2/52/56/c252568cba621a16810b3fe897453f84.jpg"
                  />
                </div>
                <div className="flex h-[26px] w-[26px]">
                  <img
                    className="rounded-full"
                    src="https://i.pinimg.com/736x/82/01/ff/8201ffe22ddc4bd7a32e234678d46f2f.jpg"
                  />
                </div>
                <div className="flex h-[26px] w-[26px]">
                  <div className="rounded-full bg-white">99+</div>
                </div>
              </div>
              <div className=" contact-item2 h-6 w-[219px] self-end">
                User Name
              </div>
              <div className=" contact-item3 h-6 self-end">t</div>
              <div className=" contact-item4 h-6 self-end">opt</div>
              <div className=" contact-item5  h-[36px] w-[252px]">messeage</div>
            </div>
            <div className="contact-grid h-18 flex w-[22rem] bg-green-300 px-[1rem]">
              <div className="contact-item1  flex h-[74px] w-[60px] flex-wrap items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-avatar-luffy-mac-do-kimono.jpg"
                />
              </div>
              <div className=" contact-item2 h-6 w-[219px] self-end">
                User Name
              </div>
              <div className=" contact-item3 h-6 self-end">t</div>
              <div className=" contact-item4 h-6 self-end">opt</div>
              <div className=" contact-item5  h-[36px] w-[252px]">messeage</div>
            </div>
            <div className="contact-grid h-18 flex w-[22rem] bg-green-300 px-[1rem]">
              <div className="contact-item1  flex h-[74px] w-[60px] flex-wrap items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src="https://www.vietnamfineart.com.vn/wp-content/uploads/2023/03/hinh-anh-avatar-luffy-mac-do-kimono.jpg"
                />
              </div>
              <div className=" contact-item2 h-6 w-[219px] self-end">
                User Name
              </div>
              <div className=" contact-item3 h-6 self-end">t</div>
              <div className=" contact-item4 h-6 self-end">opt</div>
              <div className=" contact-item5  h-[36px] w-[252px]">messeage</div>
            </div>
            {/* <div className="flex h-16 w-[22rem] bg-green-300 px-[1rem]">
              Box
            </div>
            <div className="flex h-16 w-[22rem] bg-green-300 px-[1rem]">
              Box
            </div> */}
          </div>
        </div>
        <div className="bg-white-100 flex h-screen">Chat</div>
      </div>
    </>
  );
}
