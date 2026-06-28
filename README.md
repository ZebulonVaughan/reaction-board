# reaction-board

A Base mini app for sending fast reaction codes onchain.

## Overview

`reaction-board` is a lightweight project focused on quick, expressive onchain reactions.

The app is designed around a simple idea: choose a reaction, send it, and record it on Base.

This README provides a clean starting point for running, developing, and contributing to the project.

Repository: <https://github.com/ZebulonVaughan/reaction-board.git>

## Features

- Fast reaction-based interaction flow.
- Built for the Base ecosystem.
- Minimal project scope with a clear purpose.
- Suitable for experimenting with simple onchain app patterns.
- Easy to extend with additional reactions, UI states, or integrations.

## Project Goals

- Keep the user experience quick and direct.
- Make onchain reactions feel simple and approachable.
- Provide a compact codebase that can be improved incrementally.
- Support future additions without overcomplicating the app.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ZebulonVaughan/reaction-board.git
```

Move into the project directory:

```bash
cd reaction-board
```

Install dependencies using the package manager used by the project:

```bash
npm install
```

If the project uses a different package manager, install dependencies with the matching command instead.

For example:

```bash
pnpm install
```

or:

```bash
yarn install
```

## Development

Start the local development server:

```bash
npm run dev
```

Then open the local URL printed in your terminal.

Common local development URLs include:

```text
http://localhost:3000
```

or:

```text
http://localhost:5173
```

The exact URL depends on the framework and development server configuration.

## Usage

1. Open the app in a supported environment.
2. Select a reaction from the board.
3. Confirm the interaction when prompted.
4. View the submitted reaction after it has been sent.

The app is intended to make reaction submission quick and easy.

## Configuration

If the project requires environment variables, create a local environment file:

```bash
cp .env.example .env.local
```

Then fill in the required values.

If no example file is included, review the source code for configuration references before running the app.

Do not commit local environment files.

## Available Scripts

The exact scripts may vary depending on the project setup.

Common commands include:

```bash
npm run dev
```

Run the development server.
