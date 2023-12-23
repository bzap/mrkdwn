import HTMLContent from "./HTMLContent";

const Viewer = () => {
    return (
        <div className="flex w-1/2 h-screen bg-red-200 overflow-y-scroll">
            <HTMLContent />
        </div>
    );
};

export default Viewer;
