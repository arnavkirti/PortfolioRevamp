import Image from "next/image"

export default function Experience() {
    return <div className="mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-8">
            Experience
        </h2>
        <div className="space-y-4">
            {/* BlockseBlock */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-zinc-800/50">
                <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        <Image src={"/blockseblock.jpeg"} alt="BlockseBlock Logo" width={50} height={50} className="rounded-xl" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-white">BlockseBlock</h3>
                        <p className="text-gray-400 text-sm">Blockchain Developer Intern</p>
                    </div>
                </div>
                <div className="text-left sm:text-right ml-16 sm:ml-0">
                    <p className="text-gray-400 text-sm">Remote</p>
                    <p className="text-gray-500 text-sm">Present</p>
                </div>
            </div>

            {/* BuidlGuidl */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-zinc-800/50">
                <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        <Image src={"/buidlguidl.jpg"} alt="BuidlGuidl Logo" width={50} height={50} className="rounded-xl" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-white">BuidlGuidl</h3>
                        <p className="text-gray-400 text-sm">Builder</p>
                    </div>
                </div>
                <div className="text-left sm:text-right ml-16 sm:ml-0">
                    <p className="text-gray-400 text-sm">Remote</p>
                    <p className="text-gray-500 text-sm">Active</p>
                </div>
            </div>

            {/* dev3pack */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b border-zinc-800/50">
                <div className="flex items-center gap-4 mb-2 sm:mb-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        <Image src={"/dev3pack.jpg"} alt="dev3pack Logo" width={50} height={50} className="rounded-xl" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold text-white">dev3pack</h3>
                        <p className="text-gray-400 text-sm">Student Fellow</p>
                    </div>
                </div>
                <div className="text-left sm:text-right ml-16 sm:ml-0">
                    <p className="text-gray-400 text-sm">Remote</p>
                    <p className="text-gray-500 text-sm">Active</p>
                </div>
            </div>
        </div>
    </div>
}