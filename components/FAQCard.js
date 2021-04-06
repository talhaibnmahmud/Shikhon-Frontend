export default function FAQCard({title, content}) {
    const paddingContent = content ? "p-2" : "";

    return(
        <div className="mb-2">
            <div className="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer bg-white hover:bg-white">
                <div className="flex-auto">{ title }</div>
                <div className="px-2 mt-1">
                    <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down w-5 h-5">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                    </div>
                </div>
            </div>
            <div className={ paddingContent  + " text-left text-gray-800 mb-5 bg-white" }>{ content }</div>
        </div>
    );
}