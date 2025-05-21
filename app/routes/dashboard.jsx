import ChatWidget from "../components/ChatWidget";
import Navbar from "../components/Navbar";
import CodeStepper from "../components/CodeStepper";
import DashboardGraphs from "../components/DashboardGraphs";


export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <DashboardGraphs />
      <ChatWidget />
    </div>
  );
}
