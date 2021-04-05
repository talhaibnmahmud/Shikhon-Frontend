export default function HomeCard({subject, icon}) {
    return(
        <div className="max-w-md my-4 w-full lg:flex">
            <div className="border bg-white border-gray-300 rounded-md my-4 p-4 flex flex-col justify-between leading-normal">
                <div className="flex justify-center items-center">
                    <img src={icon} />
                </div>
                <div>
                    <p className="text-2xl text-center font-semibold h">{ subject }</p>
                </div>
            </div>
        </div>
    );
}