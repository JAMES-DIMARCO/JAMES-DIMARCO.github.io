export const siteConfig = {
  name: "James DiMarco",
  title: "Computer Engineering student",
  description: "Embedded systems and hardware-focused engineering portfolio",
  accentColor: "#1d4ed8",
  social: {
    email: "jamesodimarco@gmail.com",
    linkedin: "www.linkedin.com/in/james-dimarco-2a5678322",
  },
  aboutMe:
    "I'm a computer engineering student at Rose-Hulman Institute of Technology, eager to apply my skills in a related field.",
  skills: [
  "Embedded C",
  "C++",
  "PIC18 Microcontrollers",
  "Assembly (Microcontroller)",
  "Python",
  "MATLAB",
  "Java",
  "Interrupts & Timers",
  "PWM & Signal Timing"
],
  projects: [
    {
    name: "IR Signal Flipper",
    description:
      "Designed and implemented an interrupt-driven IR signal capture and replay system using a PIC18 microcontroller. Measured incoming pulse timings via hardware timers and stored waveform data for accurate signal reproduction using PWM modules. Configured peripherals directly from datasheet specifications and optimized power consumption using sleep modes and peripheral management.",
    skills: [
      "Embedded C",
      "PIC18",
      "Timers",
      "PWM",
      "Interrupt-Driven Design",
      "Low-Power Optimization",
    ],
  },
{
      name: "Raspberry Pi Instagram Post Counter Display",
      description:
        "Developed a RaspberryPi event-driven system that tracks sent posts in real time. Implemented python scripts to retrieve and process data, and update a large digital counter display",
      skills: ["Python", "Raspberry Pi", "GPIO", "Hardware Interfacing"],
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
        "Develop structured plans to address individual learning needs, reinforcing problem-solving and accountability",
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
      school: "Rose-Hulman Institute of Technology",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2024 - 2028",
      achievements: [
        "3.69 GPA",
        "Dean's List all semesters",
        "Rose-Hulman Merit Scholar",
        "Alpha Tau Omega Fraternity Merit Scholar",
      ],
    },
  ],
};
