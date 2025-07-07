import { Header } from "@/components/Header";
import { TechStackCard } from "@/components/TechStackCard";
import { Footer } from "@/components/Footer";
import { SocialButton } from "@/components/SocialButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { techStack, socialLinks } from "@/data";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-4 md:mx-[var(--common-margin)]">
        {/* Hero Section */}
        <section
          id="hero"
          className="grid md:grid-cols-2 items-center justify-between"
        >
          <div id="left-side">
            <div id="hero-text" className="mb-8">
              <h1
                className="text-4xl text-center md:text-start mt-8 font-bold mb-2 text-[var(--important-text-1)] [--important-text-1:theme(colors.gray.800)]
              dark:[--important-text-1:theme(colors.gray.200)]"
              >
                From Concept to Code, I Build Solutions for Your Business.
              </h1>
              <p className="text-xl text-center md:text-start mb-4 dark:text-gray-300 text-gray-700">
                My name is Kivanc. I&apos;m a Full Stack Developer who
                architects and develops scalable software to overcome your
                technical challenges.
              </p>
            </div>
            <div
              id="cta-button-group"
              className="flex justify-center md:justify-start items-center gap-8 mt-4 mr-16"
            >
              <Button size="lg">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <div id="social-buttons" className="flex gap-2">
                <SocialButton
                  icon={<GitHubLogoIcon width={25} height={25} />}
                  alt="GitHub"
                  url={socialLinks.github}
                />
                <SocialButton
                  icon={<LinkedInLogoIcon width={25} height={25} />}
                  alt="LinkedIn"
                  url={socialLinks.linkedin}
                />
                <SocialButton
                  icon={<TwitterLogoIcon width={25} height={25} />}
                  alt="X (Twitter)"
                  url={socialLinks.x}
                />
              </div>
            </div>
          </div>
          <div
            id="right-side"
            className="hidden md:grid justify-center items-center"
          >
            <Image
              className="hover:scale-105 transition-all duration-400"
              src="/images/myphoto.png"
              alt="Hero Image"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="mt-24">
          <div
            id="about-me-container"
            className="md:grid grid-cols-2 gap-4 h-[400px]"
          >
            <ol
              id="services-part"
              className="relative ml-[calc(var(--common-margin)/2)] [--service-icon-padding:1rem] hidden md:flex flex-col justify-between border-l-2 border-gray-300 dark:border-gray-700 
              [--service-icon-size:50px] [--text-margin:calc(var(--service-icon-size)/2-var(--text-lg)/2+var(--service-icon-padding)/2)]"
            >
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center py-[var(--service-icon-padding)] -start-[calc(var(--service-icon-size)/2)] bg-[var(--background))]">
                  <ServiceIcon
                    iconPathLight="/icons/webdev.svg"
                    iconPathDark="/icons/webdev-dark.svg"
                    title="Web Development"
                  />
                </span>
                <p className="text-xl font-semibold ml-8 mt-[var(--text-margin)]">
                  Web Development
                </p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center py-[var(--service-icon-padding)] -start-[calc(var(--service-icon-size)/2)] bg-[var(--background)]">
                  <ServiceIcon
                    iconPathLight="/icons/mobiledev.svg"
                    iconPathDark="/icons/mobiledev-dark.svg"
                    title="Mobile Development"
                  />
                </span>
                <p className="text-xl font-semibold ml-8 mt-[var(--text-margin)]">
                  Mobile Development
                </p>
              </li>
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center py-[var(--service-icon-padding)] -start-[calc(var(--service-icon-size)/2)] bg-[var(--background)]">
                  <ServiceIcon
                    iconPathLight="/icons/deploy.svg"
                    iconPathDark="/icons/deploy-dark.svg"
                    title="DevOps"
                  />
                </span>
                <p className="text-xl font-semibold ml-8 mt-[var(--text-margin)]">
                  DevOps
                </p>
              </li>
            </ol>
            <div id="about-me" className="">
              <h2 className="text-center text-3xl font-bold mb-2">About Me</h2>
              <p className="text-lg/snug mb-2">
                Hello! I&apos;m Kıvanç, a software engineer with a passion for
                building innovative and valuable products. I&apos;ve had the
                pleasure of working in various industries, including banking and
                consultancy.
              </p>
              <p className="text-lg/snug mb-2">
                Currently, I&apos;m working as a freelance software developer,
                helping clients bring their ideas to life. In my spare time,
                I&apos;m working on my projects. I&apos;m proficient in multiple
                programming languages, with a current focus on JavaScript and
                TypeScript. My preferred front-end framework is React, and for
                the backend, I enjoy working with Express.js.
              </p>
              <p className="text-lg/snug mb-2">
                My ultimate goal is to become a successful technology
                entrepreneur. I&apos;m constantly striving to improve myself.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="mt-24">
          <h2 className="text-center text-4xl font-bold mb-4">Tech Stack</h2>
          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4">
            <TechStackCard title="Frontend" techArray={techStack.frontend} />
            <TechStackCard title="Backend" techArray={techStack.backend} />
            <TechStackCard title="DevOps" techArray={techStack.devops} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ServiceIcon({
  iconPathLight,
  iconPathDark,
  title,
}: {
  iconPathLight: string;
  iconPathDark: string;
  title: string;
}) {
  return (
    <>
      <Image
        src={iconPathDark}
        alt={title}
        width={50}
        height={50}
        color="white"
        className="hidden dark:block"
      />
      <Image
        src={iconPathLight}
        alt={title}
        width={50}
        height={50}
        color="black"
        className="dark:hidden"
      />
    </>
  );
}
