# `InsecureAPI` – Realistic Vulnerable API for Learning OWASP API Security

![InsecureAPI Badge](https://img.shields.io/badge/InsecureAPI-OWASP%20API%20Top%2010-red)  

**`InsecureAPI`** is a **realistic, intentionally vulnerable API** built to demonstrate the OWASP API Security Top 10 risks in a hands-on, safe environment. Perfect for **learning, testing, and practicing security skills** like BOLA, broken authentication, mass assignment, injection, and more.  

> ⚠️ **Warning:** This API is intentionally insecure. Do **not** deploy it publicly. Use a local VM, Docker, or isolated environment.

---

### Table of Contents

- [Scenario](#scenario)  
- [Features & Vulnerabilities](#features--vulnerabilities)  
- [Getting Started](#getting-started)  
- [Endpoints](#endpoints)  
- [Usage](#usage)  
- [Learning Goals](#learning-goals)  
- [Contributing](#contributing)  
- [License](#license)  

---

### Scenario

You are a **security analyst** hired to test the internal API of a small company’s task & finance management system. The API has endpoints for **users, tasks, and transactions**, with real-world features like pagination, sorting, and legacy versions.  

Your goal: **identify and exploit vulnerabilities safely**, then suggest mitigations.

---

### Features & Vulnerabilities

| OWASP API Risk | Demonstration in `InsecureAPI` |
|----------------|-------------------------------|
| **BOLA (Broken Object Level Authorization)** | `/tasks/:id` and `/users/:id` accessible without proper ownership checks |
| **Broken Authentication** | Weak JWT secret, predictable tokens, no password complexity enforcement |
| **Excessive Data Exposure** | `/users` returns passwords, SSNs, and internal metadata |
| **Lack of Rate Limiting** | Unlimited login attempts and transaction creation |
| **Broken Function Level Authorization** | Admin endpoints accessible by normal users |
| **Mass Assignment** | Accepts `isAdmin` or `isApproved` fields directly from JSON input |
| **Security Misconfiguration** | Default creds, verbose stack traces in dev mode |
| **Injection** | SQL/NoSQL injection via query parameters in `/tasks` |
| **Improper Asset Management** | Legacy `/v1` endpoints still return sensitive info |
| **Insufficient Logging & Monitoring** | No alerts for failed logins or abnormal activity |

---

### Getting Started

**Requirements:**

- Node.js 20+  
- npm or yarn  
- MongoDB / SQLite (depending on your preference)  

**Setup:**

1. Clone the repo:

```shell
git clone https://github.com/w3nch/InsecureAPI.git
cd InsecureAPI
```



2. Install dependencies using Bun:
```shell
bun install
```

3. Configure environment variables:
```shell
cp .env.example .env
```

Edit `.env` with your DB credentials and weak JWT secret (for learning purposes).

4. Seed dummy data (if you have a seed script):
```shell
bun run start
```

5. Start the API:

```shell
bun install
```



The API will be available at: `http://localhost:3000`

---

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/login` | Authenticate user (weak JWT) |
| GET | `/users/:id` | Fetch user info (BOLA/excessive data exposure) |
| GET | `/tasks/:id` | Fetch task (IDOR) |
| POST | `/tasks` | Create task (mass assignment) |
| GET | `/tasks` | List tasks (SQL/NoSQL injection via query param) |
| POST | `/transactions` | Add expense (no rate limiting) |
| GET | `/admin/users` | Admin-only user list (broken function level auth) |
| DELETE | `/tasks/:id` | Delete task (broken function level auth) |
| GET | `/v1/old_endpoint` | Legacy API (improper asset management) |

> All endpoints are **intentionally vulnerable**. Use Postman, curl, or scripts to explore attacks.

---

### Usage

- Test **JWT tampering**  
- Exploit **BOLA / IDOR**  
- Try **mass assignment attacks**  
- Explore **SQL/NoSQL injections**  
- Bypass **rate limiting**  
- Explore **legacy endpoints**  

Use this repository for **learning, CTF challenges, or penetration testing practice** in a safe environment.

---

### Learning Goals

- Understand **realistic API vulnerabilities**  
- Practice exploiting **OWASP API Top 10 risks**  
- Learn how to **secure APIs in production**  

---

### Contributing

Contributions are welcome! Ideas for improving **realism, new attack scenarios, or more complex API features** are appreciated.  

Please **do not introduce security patches** if the goal is to keep it vulnerable for learning.

---

### License

This project is licensed under the **MIT License** – see `LICENSE` for details.
