import { index, route } from "@react-router/dev/routes";

export default [
    route("dashboard", "routes/dashboard.jsx"),
    route("login", "routes/login.jsx"),
    route("project", "routes/project.jsx"),
    route("projects", "routes/projects.jsx"),
    index("routes/landing.jsx")
];
