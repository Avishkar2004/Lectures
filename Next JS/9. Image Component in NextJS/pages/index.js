import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

//image
import codeImage from "../public/code.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const imageLoader = ({src, width, quality}) => {
    return `https://www.google.com/imgres?q=code&imgurl=https%3A%2F%2Fwww.iamthecode.org%2Fwp-content%2Fuploads%2F2021%2F03%2Fflorian-olivo-4hbJ-eymZ1o-unsplash-scaled-e1616631053918.jpg&imgrefurl=https%3A%2F%2Fwww.iamthecode.org%2Fsteamd_marketplace%2Fwhat-is-code%2F&docid=AuS57Xu84Usg_M&tbnid=2w9kYVrf8vUWRM&vet=12ahUKEwjF3tXXr_-EAxW5e2wGHSC6Ac0QM3oECHgQAA..i&w=${width}&h=1190&hcb=2&ved=2ahUKEwjF3tXXr_-EAxW5e2wGHSC6Ac0QM3oECHgQAA`
  }
  return (
    <div className={styles.main}>
      {/* <Image src={codeImage} alt="Code Image" width={200} height={200} /> */}
      <Image
      loader={imageLoader}
        src={
          "https://www.google.com/imgres?q=code&imgurl=https%3A%2F%2Fwww.iamthecode.org%2Fwp-content%2Fuploads%2F2021%2F03%2Fflorian-olivo-4hbJ-eymZ1o-unsplash-scaled-e1616631053918.jpg&imgrefurl=https%3A%2F%2Fwww.iamthecode.org%2Fsteamd_marketplace%2Fwhat-is-code%2F&docid=AuS57Xu84Usg_M&tbnid=2w9kYVrf8vUWRM&vet=12ahUKEwjF3tXXr_-EAxW5e2wGHSC6Ac0QM3oECHgQAA..i&w=2560&h=1190&hcb=2&ved=2ahUKEwjF3tXXr_-EAxW5e2wGHSC6Ac0QM3oECHgQAA"
        }
        height={600}
        width={300}
      />
    </div>
  );
}
