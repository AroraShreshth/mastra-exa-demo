# Mastra Exa Demo

This project is a demonstration application built with Node.js and TypeScript, utilizing the Mastra framework.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version >=20.9.0)
- npm (Node Package Manager, typically comes with Node.js) or yarn

## Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd may-15-demo
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

## Running the Application

To run the application in development mode:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

This command will typically start the development server and allow you to interact with the application.

## Building the Application

To build the application for production:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

This command will compile the TypeScript code and prepare the application for deployment.

## Project Structure

- `src/`: Contains the source code of the application.
- `package.json`: Defines project metadata, dependencies, and scripts.
- `tsconfig.json`: Configuration file for the TypeScript compiler.

## Dependencies

Key dependencies include:

- `@ai-sdk/openai`: For OpenAI SDK integration.
- `@mastra/core`: Core Mastra framework.
- `@mastra/libsql`: LibSQL integration for Mastra.
- `@mastra/mcp`: Mastra MCP.
- `@mastra/memory`: Memory management for Mastra.
- `typescript`: For TypeScript support.
- `mastra`: Mastra CLI tool.

For a full list of dependencies, refer to the `package.json` file.
