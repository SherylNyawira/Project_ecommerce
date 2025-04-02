import { useEffect, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

const Dashboard = ({ activeTab, children }) => {

    const [onMobile, setOnMobile] = useState(false);
    const [toggleSidebar, setToggleSidebar] = useState(true);

    useEffect(() => {
        if (window.innerWidth < 600) {
            setOnMobile(true);
        }
    }, [])

    return (
        <>
            <main className="flex min-h-screen mt-14 sm:min-w-full">

                {toggleSidebar && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setToggleSidebar(!toggleSidebar)}>
                        <Sidebar activeTab={activeTab} setToggleSidebar={setToggleSidebar} />
                    </div>
                )}

                {!toggleSidebar && (
                    <button
                        onClick={() => setToggleSidebar(!toggleSidebar)}
                        className="fixed top-4 left-4 bg-gray-700 w-10 h-10 rounded-full shadow text-white flex items-center justify-center z-50"
                    >
                        <MenuIcon />
                    </button>
                )}

                <div className="w-full sm:w-4/5 sm:ml-72 min-h-screen">
                    <div className="flex flex-col gap-6 sm:m-8 p-2 pb-6 overflow-hidden">
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Dashboard;
