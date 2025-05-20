import ChatWidget from "../components/ChatWidget";
import Navbar from "../components/Navbar";
import ProjectsDatatable from "../components/ProjectsDatatable";


export default function Projects(){
    return (
        <div className="h-screen" style={{ backgroundColor: 'var(--surface-ground)' }}>
            <Navbar />
            <ProjectsDatatable />
            <ChatWidget />
        </div>
    );
};