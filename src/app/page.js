"use client";

import dynamic from "next/dynamic";
import LeftSideBar from "./components/sidebar";

const MapComponent = dynamic(() => import("./components/map"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <LeftSideBar />
      <MapComponent />
    </div>
  );
}
