# React Dynamic Routing Example

This project demonstrates **dynamic routing in React Router v6** using a simple users list and user details page.

## 📂 Project Structure

## 🚀 Features
- **Users list page (`/users`)**
  - Shows all users
  - Each user links to their own details page

- **User details page (`/users/:userId`)**
  - Reads the `userId` from the URL using `useParams`
  - Displays selected user’s information
  - Includes a "Go back" button using `useNavigate`

- **Navigation**
  - Home, About, Contact, Users
  - Error page for unknown routes

- **TypeScript support**
  - `Data` interface for user typing
  - Type-only imports (`import type { ... }`)

## 📦 Installation
Clone the repo and install dependencies:

```bash
git clone <your-repo-url>
cd <your-project>
npm install
