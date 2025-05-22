import { index, route } from "@react-router/dev/routes";

export default [
    index("routes/dashboard.jsx"),
    route("login", "routes/login.jsx"),
    route("project", "routes/project.jsx"),
    route("projects", "routes/projects.jsx"),
    route("landing", "routes/landing.jsx")
];
