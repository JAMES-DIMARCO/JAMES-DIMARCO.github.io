export const siteConfig = {
  name: "James DiMarco",
  title: "sophomore Engineering student",
  description: "Portfolio website of James DiMarco",
  accentColor: "#1d4ed8",
  social: {
    email: "jamesodimarco@gmail.com",
    linkedin: "www.linkedin.com/in/james-dimarco-2a5678322",
  },
  aboutMe:
    "I'm a computer engineering student at Rose-Hulman Institute of Technology, eager to apply my skills in a related field.",
  skills: ["C", "C++", "Java", "Python", "Assembly", "MATLAB"],
  projects: [
    {
      name: "IR Signal Flipper",
      description:
        "Designed and implemented an embedded IR signal capture and replay system using a PIC18 microcontroller. The system decodes incoming IR pulses using hardware timers and interrupts, stores timing data, and reproduces signals with precise PWM control. Optimized for low-power operation using sleep modes and peripheral configuration.",
      link: "https://aidevroundup.com/?ref=devportfolio",
      skills: ["Embedded C", "Pic18", "Timers and PWM", "Interrupts", "Low-Power Design"],
    },
    {
      name: "Raspberry Pi Instagram Post Counter Display",
      description:
        "Used a RaspberryPi and Python code to update a large digital display by incrementing the counter on specific events",
      skills: ["React", "Node.js", "AWS"],
    },
    // {
    //   name: "ExtensionKit",
    //   description:
    //     "Kit to jump-start your Chrome extension projects with a variety of battle-tested starter templates & examples",
    //   link: "https://extensionkit.io/?ref=devportfolio",
    //   skills: ["React", "Node.js", "AWS"],
    // },
  ],
  experience: [
    {
      company: "Avant Garde College-Prep Services",
      title: "Academic Math Coach",
      dateRange: "March 2024 - Present",
      bullets: [
        "Leverage my communication skills to explain complex math concepts so that students of varying age can understand and apply lessons",
        "Creat structured plans to address individual challenges, reinforcing problem-solving and accountability",
      ],
    },
    // {
    //   company: "Startup Inc",
    //   title: "Full Stack Developer",
    //   dateRange: "Jun 2020 - Dec 2021",
    //   bullets: [
    //     "Built and launched MVP product from scratch using React and Node.js",
    //     "Implemented CI/CD pipeline reducing deployment time by 60%",
    //     "Collaborated with product team to define technical requirements",
    //   ],
    // },
    // {
    //   company: "Digital Agency",
    //   title: "Frontend Developer",
    //   dateRange: "Aug 2018 - May 2020",
    //   bullets: [
    //     "Developed responsive web applications for 20+ clients",
    //     "Improved site performance scores by 35% on average",
    //     "Introduced modern JavaScript frameworks to legacy codebases",
    //   ],
    // },
  ],
  education: [
    {
      school: "Rose-Hulman Institue of Technology",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2024 - 2028",
      achievements: [
        "3.69 GPA",
        "Dean's List all semesters",
        "Rose-Hulman Merit Scholar",
        "Alpa Tau Omega Fraternity Merit Scholar",
      ],
    },
  ],
};
