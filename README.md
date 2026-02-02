#  Backend  
> **New backend Journey.**  
> A learning-oriented Node.js backend project with practical examples of core backend concepts.

##  Project Overview

This repository is an educational backend project written in **JavaScript (Node.js)**. Its goal is to help you understand and experiment with essential backend development topics such as:

- Working with the **Node.js runtime**
- Understanding **file system (fs)** operations (synchronous & asynchronous)
- Creating a **basic HTTP server**
- Exploring JavaScript module loading
- Practicing function invocation patterns
- Organizing utility functions

This repo is ideal for beginners learning backend fundamentals without frameworks (like Express) initially.

---

## Repository Structure

Here’s a breakdown of the key files and folders:

| File | Description |
|------|-------------|
| `alternative-syntax.js` | Shows different ways to write JavaScript syntax and patterns. |
| `app.js` | A central bootstrap file — often used as the main entry point to run or test other modules. |
| `fs-async.js` | Examples of **asynchronous** file system operations using Node’s `fs` module. |
| `fs-sync.js` | Examples of **synchronous** file system operations — useful to compare behavior with async. |
| `fs-http.js` | Combines file system interactions with an HTTP server to serve files. |
| `server.js` | A basic HTTP server created with Node’s built-in `http` module. |
| `modules.js` | Demonstrates how Node.js modules & exports work. |
| `invokingMethod.js` | Examples showing different ways to call/invoke functions and methods. |
| `utils.js` | Utility functions used by other scripts — modular helpers. |
| `sharing&secret.js` | Example for sharing values between modules and exposing internal logic. |
| `index.html` | A simple HTML file that can be served to test your server. |
| `text1.txt`, `text2.txt` | Sample text files for file system demo operations. |
| `package.json` | Project metadata and dependency definitions. |
| `package-lock.json` | Lock file that records exact installed versions. |
| `node_modules/` | Folder for installed npm packages (auto-generated). |

---

## Prerequisites

Before getting started, ensure you have:

**Node.js** installed (v14 or later recommended)  
A terminal/command prompt  
Basic familiarity with JavaScript

To check if Node is installed:

```bash
node --version
