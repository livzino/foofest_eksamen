"use client";
import "./globals.css";
import CountDown from "../components/CountDown";
import Title from "../components/Title";

import Ticket from "../components/Ticket";
import Vip from "../components/Vip";
export default async function Home() {
  const targetDate = new Date("Jun 26, 2024").getTime();
  return (
    <main>
      <div></div>
      <Vip></Vip>
      <Ticket></Ticket>
      <br />
      <br />
      <br />
      <br />
      <Button></Button>
    </main>
  );
}
