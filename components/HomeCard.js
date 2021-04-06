export default function HomeCard({subject, icon}) {
    return(
        <div className="max-w-md mx-auto lg:w-48 my-4 lg:flex">
            <div className="w-full border bg-white border-gray-300 rounded-md my-4 p-4 flex flex-col justify-between leading-normal">
                <div className="flex justify-center items-center -mt-4">
                    <img src={icon}  className="w-24 h-24"/>
                </div>
                <div>
                    <p className="text-2xl text-center font-semibold h">{ subject }</p>
                </div>
            </div>
        </div>
    );
}