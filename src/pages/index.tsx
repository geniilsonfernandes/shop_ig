import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { styled } from "../styles";

const inter = Inter({ subsets: ["latin"] });

const Button = styled("button", {
  backgroundColor: "$rocketSeat",
});

export default function Home() {
  return <Button>hello wold</Button>;
}
