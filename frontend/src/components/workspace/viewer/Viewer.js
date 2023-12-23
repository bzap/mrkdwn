import HTMLContent from "./HTMLContent";

const Viewer = () => {
    return (
        <div className="flex w-1/2 bg-red-200 overflow-scroll p-6 rounded-xl overflow-x-hidden">
            <HTMLContent />
        </div>
    );
};

export default Viewer;
