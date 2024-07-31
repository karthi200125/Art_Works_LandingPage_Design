
export default function GridBackground() {
    return (
        <div className="fixed top-0 left-0 h-screen w-full dark:bg-black bg-grid-white/[0.2] flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
    );
}

{/* <div className="fixed top-0 left-0 h-screen w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div> */}
