import AllData from "@/context/AllData";


const Providers = ({ children }) => {
    return (
        <div>
            <AllData>
                {children}
            </AllData>
        </div>
    );
};

export default Providers;