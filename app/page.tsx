import { Header } from "@/components";
import { Button } from "@radix-ui/themes";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = {
  github: "https://github.com/kivancturker",
  linkedin: "https://www.linkedin.com/in/kivancturker/",
  x: "https://x.com/IAmKivancTurker",
};

export default function Home() {
  return (
    <>
      <Header />
      <section
        id="hero"
        className="grid grid-cols-2 items-center justify-between mx-16"
      >
        <div id="left-side">
          <h1 className="text-4xl font-bold">Hello, I&apos;m Kivanc</h1>
          <p className="text-lg">
            I&apos;m a software engineer with a passion for building web
            applications.
          </p>
          <div
            id="cta-button-group"
            className="flex items-center gap-8 mt-4 mr-16"
          >
            <Button size="3">
              <Link href="/contact">Contact Me</Link>
            </Button>
            <div id="social-buttons" className="flex gap-2">
              <SocialButton
                icon={<Github size={25} />}
                alt="GitHub"
                url={socialLinks.github}
              />
              <SocialButton
                icon={<Linkedin size={25} />}
                alt="LinkedIn"
                url={socialLinks.linkedin}
              />
              <SocialButton
                icon={<Twitter size={25} />}
                alt="X (Twitter)"
                url={socialLinks.x}
              />
            </div>
          </div>
        </div>
        <div id="right-side" className="grid justify-center items-center">
          <Image
            className="hover:scale-105 transition-all duration-400"
            src="/images/myphoto.png"
            alt="Hero Image"
            width={500}
            height={500}
          />
        </div>
      </section>
    </>
  );
}

function SocialButton({
  icon,
  alt,
  url,
}: {
  icon: React.ReactNode;
  alt: string;
  url: string;
}) {
  return (
    <a
      className="border border-gray-300 dark:border-gray-600 rounded-md p-2 
      hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105 hover:cursor-pointer transition-all duration-300 ease-in-out"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
    >
      {icon}
    </a>
  );
}
