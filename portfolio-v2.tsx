"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  ArrowRight,
  Moon,
  Sun,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";

export default function PortfolioV2() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const router = useRouter();

  // Cambiar tema claro/oscuro
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Cambiar sección activa basado en scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <Code size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Webpack",
        "Babel",
        "Tailwind CSS",
        "Redux",
        "Material-UI",
        "Apollo Graphql",
        "Handlebars.js",
        "SASS",
        "Vite",
        "TurboPack",
        "Shadcn",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "WebSockets",
        "MongoDB",
        "OAuth 2.0",
        "Redis",
        "Firebase",
        "REST API",
        "GraphQL",
        "JWT Authentication",
        "Flask (Python)",
        "Microservices",
        "Socket.io",
        "Passport.js",
        "Okta",
      ],
    },
    {
      category: "Herramientas",
      items: [
        "Git",
        "GitHub",
        "Slack",
        "Docker",
        "Postman",
        "VS Code",
        "Figma",
        "JIRA",
        "CI/CD",
        "Cursor",
        "WindSurf",
        "Monday",
        "Nginx",
        "Linux",
        "GitLab",
      ],
    },
  ];

  const socialLinks = [
    "https://github.com/lokeshsixberries",
    "https://www.linkedin.com/in/lokeshsharma9895/",
    "mailto:sharma.lokesh.222001@gmail.com",
  ];

  const projects = [
    {
      title: "E-commerce App",
      description:
        "A commerce application with a shopping cart and payment gateway.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Manager",
      description:
        "A task management application with drag and drop functionality.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
    {
      title: "Weather App",
      description:
        "A weather application that displays current and forecasted weather using an external API.",
      technologies: ["React", "API REST", "Tailwind CSS"],
      image: "/placeholder.svg?height=200&width=350",
      github: "#",
      demo: "#",
    },
  ];

  const education = [
    {
      period: "2018 - 2022",
      title: "Bachelor of Technology (BTech) in Computer Science",
      institution: "Geetanjali Institute of Technical Studies, Udaipur",
      description:
        "Gained a strong foundation in computer science, mastering web development, data structures, algorithms, and system design. Achieved an impressive 9.20 SGPA.",
    },
    {
      period: "2022 - 2024",
      title: "Frontend Developer",
      institution: "SixBerries Ltd.",
      description:
        "Designed and developed seamless user interfaces with React.js, ensuring a smooth user experience. Integrated REST APIs, optimized performance, and collaborated on full-stack solutions using Node.js and MongoDB.",
    },
    {
      period: "2024 - Present",
      title: "Full Stack Developer",
      institution: "SixBerries Ltd.",
      description:
        "Leading the development of scalable full-stack applications, utilizing React.js for dynamic frontends and Node.js with MongoDB for efficient backend solutions. Focused on API integrations, performance enhancements, and delivering high-quality web experiences.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-gray-100 dark:bg-gray-800 text-teal-500 dark:text-teal-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="rounded-full"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>

            <Button
              onClick={() => {
                router.push("#contact");
              }}
              className="hidden md:flex bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0"
            >
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-[#0f172a] pt-16"
          >
            <nav className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-gray-100 dark:bg-gray-800">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400 hover:bg-teal-500/20 dark:hover:bg-teal-400/20">
                  Senior Software Engineer
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-teal-500 to-indigo-500 bg-clip-text text-transparent">
                    Lokesh Sharma
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  A Full Stack Developer skilled in building and optimizing both
                  frontend and backend applications. He ensures seamless
                  performance, integration, and user experience across web
                  platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => {
                      router.push("#projects");
                    }}
                    style={{ cursor: "pointer" }}
                    className="bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0"
                  >
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 dark:bg-teal-400/10 dark:text-teal-400"
                  >
                    Download CV
                  </Button>
                </div>

                <div className="mt-12 flex gap-4">
                  <span
                    className="z-10 cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors "
                    onClick={() => {
                      window.open(socialLinks[0], "_blank");
                    }}
                  >
                    <Github size={20} />
                  </span>
                  <a
                    onClick={() => {
                      window.open(socialLinks[1], "_blank");
                    }}
                    className="z-10 cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors "
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    onClick={() => {
                      window.open(socialLinks[2], "_blank");
                    }}
                    className="z-10 cursor-pointer p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors "
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="order-1 md:order-2 flex justify-center"
              >
                <div className="relative">
                  <div className="w-120 h-120 md:w-120 md:h-120 rounded-full bg-gradient-to-br from-teal-500 to-indigo-500 blur-3xl opacity-20 absolute -inset-4"></div>
                  <div className="w-90 h-90 md:w-80 md:h-80 rounded-full border-2 border-gray-200 dark:border-gray-800 overflow-hidden relative z-10">
                    <img
                      src="/image.png"
                      alt="Tu foto"
                      className=" object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                About me
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Get to Know Me!</h2>
              <p className="text-gray-600 dark:text-gray-300"></p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">About Me</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I am a passionate Full Stack Developer with a strong focus on
                  building seamless, high-performing, and visually stunning web
                  experiences. From crafting intuitive user interfaces to
                  optimizing backend functionality, I thrive on turning ideas
                  into reality through clean and efficient code. My goal is to
                  create dynamic, scalable, and engaging digital solutions that
                  enhance user experience and drive innovation.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Currently, I am focused on full stack development with a
                  strong emphasis on React for building dynamic user interfaces.
                  I also have experience with Node.js and databases, enabling me
                  to develop and optimize end-to-end applications. I enjoy
                  solving complex problems and collaborating with
                  multidisciplinary teams to create innovative and efficient
                  digital solutions.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-3xl font-bold text-teal-500 dark:text-teal-400 mb-1">
                      3+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Years of experience
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
                    <div className="text-3xl font-bold text-indigo-500 dark:text-indigo-400 mb-1">
                      10+
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">
                      Projects completed
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
                <Tabs defaultValue="Frontend" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-6  text-teal-500 dark:bg-teal-400/10 rounded-lg">
                    {skills.map((skill) => (
                      <TabsTrigger
                        key={skill.category}
                        value={skill.category}
                        className="text-gray-600 dark:text-teal-400 rounded-lg mx-1"
                      >
                        {skill.category}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {skills.map((skill) => (
                    <TabsContent
                      key={skill.category}
                      value={skill.category}
                      className="mt-0"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {skill.items.map((item) => (
                          <div
                            key={item}
                            className="p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center gap-2"
                          >
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Projects
              </Badge>
              <h2 className="text-3xl font-bold mb-4">My recent work</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Here's a selection of projects I've worked on recently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <Github size={18} className="text-white" />
                          </a>
                          <a
                            href={project.demo}
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
                          >
                            <ExternalLink size={18} className="text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 border-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="text-teal-500 dark:bg-teal-400/10 dark:text-teal-400"
                onClick={() => router.push("/projects")}
              >
                View More
              </Button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section
          id="education"
          className="py-20 bg-gray-100 dark:bg-gray-900/50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Education{" / "}Experience
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                Academic Formation & Work Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                I earned my BTech in Computer Science (2018-2022) with a 9.20
                SGPA, mastering web development and system design. At SixBerries
                Ltd., I worked as a Frontend Developer (2022-2024), specializing
                in React.js and API integration. Now, as a Full Stack Developer
                (2024-Present), I build scalable applications with React.js,
                Node.js, and MongoDB.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 mb-12 last:mb-0"
                >
                  <div className="hidden sm:block pt-1">
                    <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500"></div>
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 ml-6 mt-2"></div>
                    )}
                  </div>

                  <Card className="flex-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <Badge className="mb-2 bg-indigo-500/10 text-indigo-500 dark:bg-indigo-400/10 dark:text-indigo-400">
                        {item.period}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mb-4">
                        {item.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Badge className="mb-4 bg-teal-500/10 text-teal-500 dark:bg-teal-400/10 dark:text-teal-400">
                Contact
              </Badge>
              <h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
              <p className="text-gray-600 dark:text-gray-300">
                I'm here to help with any questions or collaboration
                opportunities.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="grid md:grid-cols-5">
                  <div className="md:col-span-2 bg-gradient-to-br from-teal-500 to-indigo-500 p-8 text-white">
                    <h3 className="text-2xl font-semibold mb-6">
                      Contact Information
                    </h3>
                    <p className="mb-8 opacity-90">
                      Complete the form and I'll get back to you as soon as
                      possible.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Mail size={20} />
                        </div>
                        <span>sharma.lokesh.222001@gmail.com</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Github size={20} />
                        </div>
                        <span>github.com/lokeshsixberries</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-white/20">
                          <Linkedin size={20} />
                        </div>
                        <span>linkedin.com/in/lokeshsharma9895</span>
                      </div>
                    </div>

                    <div className="absolute bottom-8 left-8 right-8 opacity-10">
                      <Code size={180} />
                    </div>
                  </div>

                  <div className="md:col-span-3 p-8">
                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400"
                        />
                      </div>
                      <Button className="w-full bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600 text-white border-0">
                        Send message
                      </Button>
                    </form>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Lokesh Sharma. All rights reserved.
            </div>

            <div className="flex gap-4 mt-4 md:mt-0">
              <span
                onClick={() =>
                  window.open("https://github.com/lokeshsixberries", "_blank")
                }
                className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer"
              >
                <Github size={18} />
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/lokeshsharma9895",
                    "_blank"
                  )
                }
                className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer"
              >
                <Linkedin size={18} />
              </span>
              <span
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=sharma.lokesh.222001@gmail.com",
                    "_blank"
                  )
                }
                className="text-gray-500 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition-colors cursor-pointer"
              >
                <Mail size={18} />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
