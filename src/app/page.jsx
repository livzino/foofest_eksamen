"use client";
import "./globals.css";
import CountDown from "../components/CountDown";
import Title from "../components/Title";
import Header from "../components/Header";
import Ticket from "../components/Ticket";
import Vip from "../components/Vip";
import Footer from "../components/Footer";

export default function Home() {
  const targetDate = new Date("Jun 26, 2024").getTime();
  return (
    <main>
      <Header></Header>
      <div></div>
      <Vip></Vip>
      <Ticket></Ticket>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </main>
  );
}
