"use client";
import "./globals.css";
import Button from "../components/Button";
import CountDown from "../components/CountDown";

export default function Home() {
  const targetDate = new Date("Jun 26, 2024").getTime();

  return (
    <main>
      <CountDown targetDate={targetDate} />
      <Button />
    </main>
  );
}
