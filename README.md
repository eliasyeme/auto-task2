# Auto task
## Introduction
Autotask is a powerful and versatile task management application designed to streamline your workflow and boost productivity. It offers a unique combination of features:

- **Project Creation**: Organize your tasks by creating dedicated projects for different goals or areas of focus.
- **Task Management**: Add detailed tasks within each project, including descriptions, deadlines, and priority levels.
- **AI-powered Task Generation**: Leverage the power of Google's Gemini Pro AI model to automatically generate a task list based on your specific goals. This feature saves you time and ensures you're on the right track to achieve your objectives.
- **Modern Tech Stack**: Built with cutting-edge technologies like Next.js 14, Bun runtime, Vercel hosting, Clerk authentication, Tailwind CSS and Shaden UI for styling, Turbolinks for navigation, Turso database, and Prisma ORM for seamless data interaction.

---
[Checkout Auto Task](http://auto-task2.vercel.app)

[Blog](http://auto-task2.vercel.app)

[Linkedin](https://www.linkedin.com/in/elias-yemataw/)

## Installation
### Prerequisites:
- Bun (or Node.js)  installed on your system. You can download them from https://bun.sh

### Steps:
1. Clone the repository
    ```bash
    git clone https://github.com/eliasyeme/auto-task2.git
    ```
2. Navigate to the project directory:
    ```bash
    cd auto-task2
    ```
3. Install dependencies:
    ```bash
    bun install
    ```
4. Setup .env.local
    ```env
    NEXT_PUBLIC_TURSO_URL=
    NEXT_PUBLIC_AUTH_TOKEN=
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    NEXT_PUBLIC_GOOGLE_API_KEY=
    ```

## Usage
1. Start the development server:
    ```bash
    bun dev
    ```
    This will launch the application at http://localhost:3000 (default port) in your browser.
2. Create an account using Clerk authentication.
3. Start creating projects and adding tasks! You can also leverage the AI-powered task generation feature to get started quickly.

## Contributing
We welcome contributions from the community! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them to your branch.
4. Open a pull request from your branch to the main branch of the repository.

Please ensure your code adheres to the project's style guidelines and formatting conventions.