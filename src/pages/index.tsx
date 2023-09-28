import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <div className="flex flex-row">
        <div className=" h-screen w-16 bg-[#0091ff]">
          <div className="flex flex-col">
            <div className="mt-8">
              <img
                className="h-12 w-12 rounded-full border-2 border-solid border-white"
                src="https://dvdn247.net/wp-content/uploads/2020/07/avatar-mac-dinh-1.png"
              />
            </div>
            <div>
              <div className="h-12 w-12">
                <div>chat</div>
              </div>
              <div className="h-12 w-12">
                <div>phone</div>
              </div>
              <div className="h-12 w-12">
                <div>to do</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="h-12 w-12">cloud</div>
            <div className="h-12 w-12">tool</div>
            <div className="h-12 w-12">setting</div>
          </div>
        </div>
        <div className="bg-white-100 flex h-screen w-80 border-r border-black">
          Sidebar
        </div>
        <div className="bg-white-100 flex h-screen">Chat</div>
      </div>
    </>
  );
}
