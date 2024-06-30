# CS-465

Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

In my full stack project, I employed several types of frontend development techniques. Using Express HTML allowed for server-side rendering of web pages, ensuring that the initial load was fast and SEO-friendly. JavaScript was pivotal for adding interactivity and dynamic content on the client side. This ranged from simple DOM manipulation to complex AJAX requests. The SPA approach, utilizing frameworks like React or Angular, provided a seamless user experience by dynamically updating the content without requiring a full page reload. The SPA was particularly effective for creating a responsive and fast application, enhancing user satisfaction.

Why did the backend use a NoSQL MongoDB database?

The backend utilized a NoSQL MongoDB database due to its flexibility and scalability. MongoDB’s schema-less nature allowed for easy adjustments to data structures without needing extensive migrations. This was beneficial for a project that was continually evolving. Additionally, MongoDB’s ability to handle large volumes of unstructured data made it suitable for storing diverse data types, which is often required in full stack applications. Its horizontal scalability also ensured that the database could handle increasing loads efficiently.

Functionality
How is JSON different from JavaScript and how does JSON tie together the frontend and backend development pieces?

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. While JSON syntax is derived from JavaScript, it is a text format that is completely language-independent, making it useful for exchanging data between a server and a web application. JSON plays a critical role in tying together frontend and backend development as it serves as the common format for data interchange. When the frontend makes a request to the backend, data is typically sent and received in JSON format, ensuring consistent and structured communication between the client and server.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

During the development process, one significant instance of code refactoring was optimizing the API endpoints to reduce redundancy and improve response times. Initially, some endpoints were handling too much logic, which was then moved to middleware functions to streamline the code. Additionally, creating reusable UI components, such as buttons, form inputs, and modals, significantly improved the development workflow. These components not only ensured a consistent look and feel across the application but also reduced the time and effort required to implement similar features in different parts of the application. Reusability enhances maintainability and scalability of the codebase.

Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

In a full stack application, API testing is crucial to ensure the reliability and performance of endpoints. Methods like GET, POST, PUT, and DELETE are used to retrieve, create, update, and delete resources, respectively. Each endpoint must be tested for correct functionality, response times, and error handling. Testing becomes more complex with added layers of security, such as authentication and authorization. Securing endpoints involves verifying that only authorized users can access or modify resources. This includes testing for token validation, role-based access control, and ensuring that sensitive data is properly encrypted and protected against vulnerabilities like SQL injection and cross-site scripting (XSS).

Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has been instrumental in advancing my professional goals by providing a comprehensive understanding of full stack development. I have learned to design and implement robust web applications, from setting up the server with Express to creating dynamic frontends with JavaScript and SPAs. Mastering the use of MongoDB for backend data storage has also been a key takeaway. Additionally, the course has honed my skills in API development and security practices, making me adept at creating secure and efficient applications. These skills have significantly boosted my marketability as a candidate in the tech industry, equipping me with the practical knowledge and experience sought after by employers.

