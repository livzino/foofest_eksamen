"use client";
import "./globals.css";

import Button from "../components/Button";
<<<<<<< HEAD
import Ticket from "../components/Ticket";
import Vip from "../components/Vip";
export default async function Home() {
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
=======
import CountDown from "../components/CountDown";
import Title from "../components/Title";

export default function Home() {
  const targetDate = new Date("Jun 26, 2024").getTime();

  return <main></main>;
>>>>>>> 6f3fdeea4e538a73dd03482c96610adfb13ac3d8
}
