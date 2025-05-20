import ChatWidget from "../components/ChatWidget";
import Navbar from "../components/Navbar";
import ProjectsDatatable from "../components/ProjectsDatatable";


export default function Login(){
    return (
        <div>
            <Navbar />
            <ProjectsDatatable></ProjectsDatatable>
            <ChatWidget />
        </div>
    );
};