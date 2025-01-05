import Arrow from "../assets/images/ArowUp.png";

export const ScrollToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: "smooth", 
        });
    };

    return (
        <div className="w-full px-5 py-9 md:pt-10 md:px-16">
            <div className="flex justify-between">
                <div></div>
                <div 
                    className="flex items-center justify-center rounded-full cursor-pointer bg-gray-200 h-[46px] w-[46px]"
                    onClick={scrollToTop} 
                >
                    <img src={Arrow} alt="Scroll to Top" className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};
