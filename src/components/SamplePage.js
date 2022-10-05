import Files from "./files";
import Groups from "./groups";
function SamplePage() {
  return (
    <div className="bg-slate-400 h-screen overflow-auto">
      <div className="grid grid-flow-col">
        <Files />
        <Groups />
      </div>
    </div>
  );
}

export default SamplePage;