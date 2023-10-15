"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import bgImg from "@/public/images/bg.jpg";
// import Image from "next/image";
import dynamic from "next/dynamic";
import Loading from "./loading";
const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
  loading: () => <Loading />,
});

export default function Home() {
  const [visible, setVisible] = useState(false);
  // const session = await getServerSession(authOptions);
  return (
    <main>
      {/* <h1>Hello {session?.user!.name}</h1> */}
      <Link href="/users">Users</Link>
      <ProductCard />
      {/* <Image src={bgImg} alt="bgImg" /> */}
      <button onClick={() => setVisible(!visible)}>Show Component</button>
      {visible && <HeavyComponent />}
      {/* <Image
        src="https://ehsansafari.com/bg.jpg"
        width={800}
        height={600}
        alt="bg-img-remote-url"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width: 480) 100vw, (max-width: 768) 50vw, 33vw"
        quality={75}
        priority
      /> */}
    </main>
  );
}
