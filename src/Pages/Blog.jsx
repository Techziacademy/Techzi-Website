import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
const blogs = [
  {
    title: "Top Career Paths After BCA",
    description:
      "Completing a Bachelor of Computer Applications (BCA) opens up numerous opportunities in the IT sector. Whether you're interested in programming, data analysis, cybersecurity, or project management, there's a career path for you. Some popular career options include Software Developer, Web Developer, Data Analyst, Cybersecurity Specialist, and Cloud Engineer. While these roles may have different skill requirements and work environments, they all offer competitive salaries and growth prospects. For example, Software Developers focus on creating applications and systems, Web Developers specialize in building websites and web applications, and Data Analysts interpret data to drive business decisions. Cybersecurity Specialists protect systems and data from security breaches, while Cloud Engineers work with cloud-based solutions. With the right training, certifications, and hands-on experience, BCA graduates can thrive in these roles. Whether you're interested in becoming a full-stack developer or pursuing data science, the tech industry offers a wide range of opportunities for growth and advancement. With the demand for IT professionals continuously rising, the future looks bright for BCA graduates eager to carve out their niche in the tech world.",
  },
  {
    title: "AI Tools Every Developer Should Know in 2025",
    description:
      "In 2025, artificial intelligence (AI) is revolutionizing the way developers approach coding and software development. Tools like GitHub Copilot, Tabnine, and CodeWhisperer leverage machine learning to assist developers in writing more efficient and error-free code. GitHub Copilot, powered by OpenAI, can generate code suggestions directly in your IDE, speeding up development and improving code quality. Tabnine offers autocomplete suggestions based on the context of your code, making coding more intuitive and less time-consuming. CodeWhisperer, Amazon’s AI tool, helps developers by generating code snippets and offering recommendations, helping reduce repetitive tasks and enabling developers to focus on higher-level problem solving. These tools not only enhance productivity but also assist in reducing common coding mistakes, saving time, and improving code consistency. The ability to leverage AI for testing, debugging, and refactoring code is also becoming more common, empowering developers to build robust applications faster. As these AI tools evolve, they’ll likely become indispensable components in the modern developer’s workflow, making coding more accessible, productive, and efficient. Staying up-to-date with these tools will help developers maintain their competitive edge in the fast-changing tech landscape.",
  },
  {
    title: "Deploy Your Web App Like a Pro: A Beginner's Guide",
    description:
      "Deploying a web application might feel intimidating, but with the right tools and knowledge, you can go from development to production with ease. This beginner's guide covers all the essentials you need to deploy your web app smoothly. For frontend deployment, platforms like Vercel and Netlify offer simple, free hosting solutions that integrate seamlessly with GitHub and GitLab, allowing automatic deployment whenever you push updates. For backend deployment, services like Render and Railway offer scalable hosting for Node.js, ASP.NET, and other backend technologies. Additionally, understanding how to manage environment variables and domains is crucial for securing your app and ensuring it functions correctly in production. Setting up Continuous Integration and Continuous Deployment (CI/CD) pipelines helps automate testing and deployment, ensuring that your code is always up to date in production. This guide also covers troubleshooting common deployment issues and tips for improving app performance. With the right knowledge and tools, you’ll be able to deploy your web applications like a professional and gain confidence in managing your live apps. This step-by-step approach helps you understand deployment best practices, so you can deliver polished, reliable apps to users.",
  },
  {
    title: "Why Learn React.js in 2025",
    description:
      "React.js continues to be one of the most popular and powerful JavaScript libraries for frontend development, and it’s likely to stay relevant in 2025 and beyond. React’s component-based architecture allows developers to build modular, reusable components that make it easier to manage complex UIs. React’s virtual DOM optimizes rendering performance by updating only the parts of the UI that have changed, making web apps more efficient. In 2025, React’s ecosystem continues to grow with libraries like React Router for routing, Redux for state management, and Next.js for server-side rendering and static site generation. The demand for React developers remains high, with companies seeking talent to build dynamic and responsive web applications. Whether you’re building Single Page Applications (SPAs), Progressive Web Apps (PWAs), or mobile apps using React Native, React is an essential skill. Additionally, its large community and wealth of tutorials and resources make it easier for new developers to learn and grow. React’s flexibility, performance, and massive ecosystem make it the go-to choice for many web developers, making it a skill that can significantly boost your career opportunities in 2025.",
  },
  {
    title: "Build Your First E-commerce App",
    description:
      "Building your first e-commerce app is a fantastic way to learn both frontend and backend development. Using React for the frontend and Firebase for the backend provides an easy-to-use yet powerful stack for creating dynamic e-commerce applications. In this project, you'll learn how to manage product data, user authentication, and shopping cart functionality. Firebase Authentication handles user sign-in and sign-up processes, while Firebase Firestore stores product and order information. You'll implement features such as adding items to the cart, updating item quantities, and processing orders. One of the most important aspects of building an e-commerce app is managing the product data, including adding, updating, and removing products. You'll also learn about integrating payment gateways, creating a user-friendly UI, and implementing secure login systems. With React, you’ll create a seamless, interactive interface that allows users to easily browse products and complete their purchases. By the end of the project, you will have a full-stack application that gives you hands-on experience with both frontend and backend development. This is a perfect project for beginners to intermediate developers who want to enhance their skills and create something tangible for their portfolio.",
  },
  {
    title: "Full Stack Developer Roadmap 2025",
    description:
      "Becoming a full stack developer is one of the most sought-after career goals in the tech industry. To get there, you’ll need a solid understanding of both frontend and backend technologies. In 2025, the roadmap for becoming a full stack developer involves learning a combination of languages, libraries, frameworks, and tools. Start with the basics: HTML, CSS, and JavaScript are essential for building any web application. From there, you can dive into frontend libraries like React.js or Angular for building interactive user interfaces. For backend development, learn a server-side language like Node.js, ASP.NET, or Python, and become proficient with frameworks such as Express.js or Django. Databases are crucial for full stack development, and you’ll need to learn SQL for relational databases (like MySQL or PostgreSQL) and NoSQL databases (like MongoDB). Git and version control are also essential for collaboration, as is understanding deployment tools like Docker, Kubernetes, and CI/CD pipelines. Once you have the full stack covered, you can also explore cloud technologies like AWS or Google Cloud to host your applications. Becoming a full stack developer is challenging but rewarding, and with continuous learning, you’ll be well-equipped to work on modern web applications.",
  },
  {
    title: "Top 10 Programming Languages to Learn in 2025",
    description:
      "The world of programming is constantly evolving, and 2025 is shaping up to be an exciting year for developers. Among the top programming languages to learn are JavaScript, Python, Java, TypeScript, C#, Go, Rust, PHP, Kotlin, and Dart. JavaScript continues to be a dominant language for web development, powering both frontend and backend technologies like React, Node.js, and Angular. Python remains a top choice for data science, machine learning, and web development, thanks to its simplicity and versatility. Java is highly demanded in enterprise environments, and TypeScript, a superset of JavaScript, is gaining popularity due to its static typing and improved developer experience. C# is essential for developers working in the Microsoft ecosystem, while Go and Rust are rising stars for systems programming, offering strong performance and memory safety. PHP remains crucial for web development, especially with content management systems like WordPress. Kotlin is a go-to language for Android development, while Dart is becoming increasingly popular for building cross-platform mobile apps with Flutter. When choosing a language to learn in 2025, consider your career goals—whether it’s web development, mobile apps, data science, or systems programming—and select a language that aligns with those goals.",
  },
  {
    title: "How to Start Learning DSA (Data Structures & Algorithms)",
    description:
      "Data Structures and Algorithms (DSA) are the building blocks of computer science, and mastering them is crucial for becoming an effective programmer. To start learning DSA, begin with basic data structures like arrays, stacks, queues, and linked lists. These are foundational structures used to store and manipulate data. Once you're comfortable with these, move on to more complex structures like trees, graphs, and hash maps. Understanding algorithms is equally important—start with sorting and searching algorithms like Bubble Sort, Merge Sort, and Binary Search. As you progress, dive into dynamic programming, greedy algorithms, and graph traversal techniques like BFS and DFS. To improve your DSA skills, practice solving problems on platforms like LeetCode, CodeForces, GeeksforGeeks, and HackerRank. Consistency is key—set aside time every day or week to practice. Focus on learning problem-solving techniques and improving your logical thinking. DSA is not only essential for technical interviews but also helps in solving real-world problems efficiently. By mastering DSA, you’ll not only improve your coding skills but also be well-prepared for the challenges of competitive programming and job interviews.",
  },
  {
    title: "Frontend vs Backend vs Full Stack – What Should You Learn?",
    description:
      "When deciding whether to pursue frontend, backend, or full-stack development, it's important to understand the differences between these areas of web development. Frontend development focuses on creating the user-facing elements of a website or application. It involves working with HTML, CSS, JavaScript, and frontend frameworks like React.js or Angular to build interactive UIs. Backend development, on the other hand, deals with the server, databases, and application logic. Backend developers work with server-side languages like Node.js, Python, or Java and connect to databases to store and retrieve data. Full stack development combines both frontend and backend, giving developers the ability to work on all aspects of a web application. If you’re drawn to creating visually appealing and intuitive user interfaces, frontend development might be the best path for you. If you’re more interested in solving complex problems and working with databases, backend development may be the right choice. However, if you want to become a versatile developer who can work on both the client and server side, full-stack development is an excellent choice. All three paths offer excellent career opportunities and the choice depends on your interests and strengths.",
  },
  {
    title: "How to Get Your First Job as a Fresher Developer",
    description:
      "Landing your first job as a developer can be challenging, but with the right approach, you can increase your chances of success. Start by building a strong portfolio that showcases your projects. GitHub is a great platform for sharing your code and demonstrating your skills to potential employers. Focus on building personal projects, contributing to open-source, and practicing coding challenges. It’s also important to learn problem-solving and algorithms, as many technical interviews focus on these areas. A clear and concise resume that highlights your projects, technical skills, and education will make you stand out. Don’t forget to network—reach out to industry professionals on LinkedIn and attend meetups or hackathons. Applying through job portals, LinkedIn, and referrals are effective ways to find opportunities. Prepare for interviews by practicing coding problems, understanding data structures and algorithms, and being ready to explain your thought process. Confidence, consistency, and continuous learning are key to securing your first developer job. Even if you don’t land the perfect job immediately, every interview is a learning experience that will bring you closer to your goal.",
  },
  {
    title: "Resume Building Tips for Developers",
    description:
      "When creating a resume as a developer, it’s essential to focus on clarity, conciseness, and showcasing your skills. Start with a clean layout and easy-to-read formatting. Highlight your technical skills, including programming languages, frameworks, and tools you’re proficient in. Include links to your GitHub profile, personal website, or online portfolio where employers can see your projects and code. For each job or project, describe your role, the technologies you used, and the impact your work had. Instead of listing tasks, focus on accomplishments and measurable results. For instance, instead of saying ‘Worked on the frontend,’ say ‘Developed a responsive, user-friendly frontend for an e-commerce website that increased conversion rates by 15%.’ Keep your resume to one page if possible, and avoid lengthy paragraphs. Use bullet points to make the information scannable. Tools like Overleaf or Canva can help you design visually appealing resumes. Remember to tailor your resume for each job application, emphasizing the skills and experience most relevant to the position. A well-crafted resume is a great way to make a lasting first impression.",
  },
  {
    title: "Internships vs Freelancing: What's Better for Beginners?",
    description:
      "When starting out in your development career, it can be tough to decide between pursuing an internship or freelancing. Internships offer structured learning opportunities where you’ll have the chance to work closely with experienced professionals and receive mentorship. This can be invaluable for building skills, understanding industry best practices, and gaining insights into the development process. Freelancing, on the other hand, offers flexibility and the chance to work on real-world projects with clients. It can provide valuable experience managing projects, communicating with clients, and setting your own schedule. For beginners, internships are often the better choice, as they provide a safer learning environment with access to resources and support. However, freelancing is a great option for those looking to build a portfolio and gain independence early on. Each path has its own pros and cons, and the decision depends on your personal goals and the level of experience you already have. Many developers eventually try both, using internships to build foundational skills and freelancing to gain real-world experience.",
  },
  {
    title: "Building RESTful APIs with Node.js",
    description:
      "Building a RESTful API with Node.js and Express is a valuable skill for any backend developer. REST (Representational State Transfer) is an architectural style used for designing networked applications. With Node.js, you can easily create server-side applications using JavaScript, and Express is a minimalist web framework that makes setting up routes and middleware a breeze. In this guide, you'll learn how to set up a basic Express server, define RESTful routes, and handle different HTTP methods like GET, POST, PUT, and DELETE. You'll also learn how to implement authentication using JWT (JSON Web Tokens) to secure your API and how to interact with a database like MongoDB or SQL to store and retrieve data. Understanding how to build RESTful APIs will give you the foundation you need to create scalable, maintainable, and efficient applications. By the end of the tutorial, you’ll have the skills needed to take your API from local development to production, using tools like Postman for testing and Heroku or AWS for deployment. A solid understanding of RESTful APIs is crucial for working with frontend applications and enabling them to communicate with the backend.",
  },
  {
    title: "Understanding MVC Architecture in Web Development",
    description:
      "Model-View-Controller (MVC) is a software architectural pattern that divides an application into three interconnected components: the Model, View, and Controller. The Model represents the data and business logic of the application, the View is responsible for rendering the user interface, and the Controller acts as an intermediary between the Model and the View, processing user inputs and updating the Model. Understanding MVC is essential for building maintainable, scalable web applications. In this architecture, the Model handles data manipulation and storage, ensuring that the application’s logic is separated from the user interface. The View focuses on the presentation layer, allowing developers to build dynamic and responsive user interfaces. The Controller manages user interactions and acts as a bridge between the View and the Model. Using MVC allows for better organization of code, making it easier to manage complex applications. Many popular frameworks, including Express.js for Node.js, Django for Python, and ASP.NET for C#, follow the MVC pattern. By adopting MVC architecture, you can create clean, modular code that is easy to maintain and scale, ensuring that your applications are robust and efficient.",
  },
  {
    title: "Mastering Git and GitHub for Developers",
    description:
      "Git is an essential version control tool that every developer should master. It allows you to track changes to your code, collaborate with others, and maintain a history of your project’s evolution. GitHub, a web-based platform built on Git, provides a place for developers to share and collaborate on code. In this guide, you’ll learn the basics of Git, including creating a repository, committing changes, pushing to remote repositories, and branching for feature development. You'll also learn advanced Git concepts such as merging, rebasing, and handling merge conflicts. GitHub’s powerful collaboration tools, including pull requests and code reviews, make it easier to work in teams and contribute to open-source projects. Mastering Git and GitHub will improve your workflow and make it easier to collaborate with others. It also helps you showcase your code to potential employers, as many companies use GitHub to evaluate candidates. Whether you're working on solo projects or collaborating with teams, Git and GitHub are crucial tools that every developer should be familiar with. By the end of this tutorial, you’ll be comfortable using Git for version control and GitHub for project management and collaboration.",
  },
];

const BlogSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section
      className="bg-gradient-to-r from-[#07c4f4] to-[#000080] py-20 px-6 md:px-12"
      id="blog"
    >
      <Helmet>
        <title>
          Techzi Academy Blogs – Learn Programming, AI, and Web Development
        </title>
        <meta
          name="description"
          content="Read insightful blogs from Techzi Academy on programming, web development, AI, data science, and more. Stay updated and grow your IT skills with expert-written content."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-white mb-12 text-center tracking-wide">
          Web Wisdom: Learn & Grow with Techzi Academy Blogs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => {
            const isExpanded = expandedIndex === index;
            const words = blog.description.split(" ");
            const shortDesc = words.slice(0, 20).join(" ");

            return (
              <motion.div
                key={index}
                layout
                className={`relative rounded-2xl shadow-xl transition-all duration-300 w-full ${
                  isExpanded
                    ? "col-span-1 sm:col-span-2 lg:col-span-3 bg-white p-6"
                    : "bg-white p-6"
                }`}
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#07c4f4] hover:text-[#000080] mb-4">
                  {blog.title}
                </h3>

                {!isExpanded && (
                  <>
                    <p className="text-sm sm:text-base text-[#07c4f4] hover:text-[#000080] leading-relaxed mb-2">
                      {shortDesc}...
                    </p>
                    <div className="text-right mt-2">
                      <button
                        onClick={() => setExpandedIndex(index)}
                        className="text-[#000080] font-semibold hover:underline"
                      >
                        View More →
                      </button>
                    </div>
                  </>
                )}

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 overflow-y-auto max-h-[60vh]"
                    >
                      <p className="text-sm sm:text-base text-[#000080] leading-relaxed">
                        {blog.description}
                      </p>
                      <button
                        onClick={() => setExpandedIndex(null)}
                        className="mt-4 text-[#07c4f4] font-semibold hover:underline"
                      >
                        ← View Less
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
