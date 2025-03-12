
interface TabsProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
    tabs: string[]; 
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab, tabs }) => {
    return (
        <div className="tabs border-b border-dark20 px-[100px] py-[30px] max-900:px-[20px] overflow-x-auto whitespace-nowrap scrollbar-hide">
            <div className="flex gap-[20px] justify-between items-center min-w-max">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-[50px] py-[10px] rounded-[5px] transition duration-300 ease-in-out shadow-md border border-dark20
                            ${activeTab === tab
                                ? "bg-black text-white"
                                : "text-lightgrey hover:bg-black hover:text-white hover:bg-yellow-500"
                            }
                        `}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
