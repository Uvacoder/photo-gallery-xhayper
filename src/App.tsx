import { Routes, Route, Outlet } from "react-router-dom";
import NotImplemented from "./routes/not-implemented";
import Navbar from "./components/Navbar";
import Root from "./routes/root";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Root />} />
                <Route path="about" element={<About />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<NotImplemented />} />
            </Route>
        </Routes>
    );
}

function Layout() {
    return (
        <div>
            <header>
                <Navbar />
            </header>

            <hr />

            <Outlet />
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
