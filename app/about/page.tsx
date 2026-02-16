import Image from "next/image";

const About = () => {
  return (
    <section>
      <div className="animate-fade-in-up">
        <h1 className="text-center uppercase to-blue bg-linear-to-b from-white via-white bg-clip-text font-semibold text-transparent text-6xl max-sm:text-4xl">
          Empowering Developers to Learn, Connect, and Innovate
        </h1>
        <p className="text-center mt-5">
          DevEvents brings together passionate developers, tech enthusiasts, and
          industry leaders to share knowledge, foster innovation, and create
          meaningful connections in the ever-evolving world of technology.
        </p>
      </div>
      <div className="flex mt-20 lg:flex-row flex-col gap-8 items-center lg:justify-between lg:h-64">
        <div>
          <h2 className="font-schibsted-grotesk text-2xl font-bold">
            Event Statistics
          </h2>
          <ul className="list-disc ps-8 text-lg pt-5 flex flex-col gap-2">
            <li>150+ Events Hosted since 2020</li>
            <li>25,000+ Developers attended our events</li>
            <li>500+ Speakers from leading tech companies</li>
            <li>
              80+ Partner Companies including Google, Microsoft, Amazon, and
              startups
            </li>
            <li>40+ Cities reached globally</li>
            <li>95% Satisfaction Rate from attendees</li>
          </ul>
        </div>
        <Image
          src="/images/stats.jpg"
          alt="Event Statistics"
          width={400}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-20 flex lg:flex-row flex-col gap-8 items-center lg:justify-between">
        <div className="pe-8">
          <h2 className="font-schibsted-grotesk text-2xl font-bold">
            Why we attend events
          </h2>
          <ul className="list-disc ps-8 text-lg pt-5 flex flex-col gap-3">
            <li>
              Stay Updated Keep pace with rapidly changing technology trends.
              Learn about new frameworks, tools, and best practices directly
              from those who create and use them.
            </li>
            <li>
              Hands-On Experience Participate in hackathons, coding challenges,
              and interactive workshops. Build real projects and get immediate
              feedback from mentors.
            </li>
            <li>
              Career Growth Meet hiring managers and recruiters from top tech
              companies. Discover job opportunities, get career advice, and
              showcase your skills to potential employers.
            </li>
            <li>
              Network with Peers Connect with fellow developers, from beginners
              to seasoned professionals. Share experiences, collaborate on
              projects, and build lasting professional relationships.
            </li>
          </ul>
        </div>
        <Image
          src="/images/why-attend.jpg"
          alt="Why Attend Events"
          width={400}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="mt-20 flex lg:flex-row flex-col gap-8 items-center lg:justify-between">
        <div className="pe-8">
          <h2 className="font-schibsted-grotesk text-2xl font-bold">
            Technologies We Cover
          </h2>
          <ul className="list-disc ps-8 text-lg pt-5 flex flex-col gap-3">
            <li>Frontend: React, Vue.js, Angular, Next.js, TypeScript</li>
            <li>Backend: Node.js, Python, Java, Go, .NET</li>
            <li>Mobile: React Native, Flutter, iOS, Android</li>
            <li>Cloud & DevOps: AWS, Azure, Docker, Kubernetes, CI/CD</li>
            <li>Data & AI: Machine Learning, Data Science, AI, Big Data</li>
            <li>Emerging Tech: Blockchain, Web3, IoT, Cybersecurity</li>
          </ul>
        </div>
        <Image
          src="/images/tech.jpg"
          alt="Why Attend Events"
          width={400}
          height={400}
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default About;
