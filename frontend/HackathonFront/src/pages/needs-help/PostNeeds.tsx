import { useState } from 'react';
import Banner from '../../assets/logo/home.png';
const PostNeeds = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedRegion, setSelectedRegion] = useState<string>('');

    const handleSearch = () => {
        // Реалізуйте функціонал для пошуку з використанням searchTerm та selectedRegion
        console.log('Searching for:', searchTerm, 'in region:', selectedRegion);
    };

    return (
        <>
            <h1 className="text-2xl font-bold text-left tracking-tight text-black-900 text-[35px]">Зниклі</h1>
            <div className="flex flex-row justify-center w-full">
                {/* Пошукове поле */}
                <div className="relative flex w-[300px] mx-4">
                    <input
                        type="search"
                        className="relative m-0 block flex-auto my-4 rounded border border-solid border-black-200 bg-transparent bg-clip-padding px-3 py-[1.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-black-500 focus:z-[3] focus:border-black focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-black/10 dark:text-black dark:placeholder:text-black-200 dark:autofill:shadow-autofill dark:focus:border-black"
                        placeholder="Пошук"
                        aria-label="Пошук"
                        id="exampleFormControlInput2"
                        aria-describedby="button-addon2"
                    />
                    <span
                        className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-black [&>svg]:h-5 [&>svg]:w-5"
                        id="button-addon2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </span>
                </div>

                {/* Випадаючий список */}
                <div className="relative flex w-[300px] mx-4">
                    <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="relative m-0 block flex-auto my-4 rounded border border-solid border-black-200 bg-transparent bg-clip-padding px-3 py-[1.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-black-500 focus:z-[3] focus:border-black focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-black/10 dark:text-black dark:placeholder:text-black-200 dark:autofill:shadow-autofill dark:focus:border-black"
                    >
                        <option>Область</option>
                        <option>Волинь</option>
                        <option>Львів</option>
                    </select>
                </div>

                {/* Проміжок */}
                <div className="mt-8" />

                {/* Кнопка */}
                <div className="relative flex w-[400px] mx-4">
                    <button
                        className="h-[Hug (72px)px] block w-full py-2 bg-[#C60914] border-[2px] border-[solid] border-[#FEFCF4] rounded-[10px] text-center text-sm font-semibold text-black hover:bg-[#FEFCF4] hover:text-[#5BC0EB] hover:border-[#5BC0EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <p className="text-[25px]">повідомити про зникнення</p>
                    </button>
                </div>

            </div>
            <hr className="w-full my-5 border-1 border-[black]" />
            <ul className="mx-5     divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                    <div className="flex items-center mt-[2rem] rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                            <div className="flex-1 min-w-0 text-left">
                                <p className="text-sm font-bold  font-medium text-gray-900 truncate">Michael Gough</p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">12.04.2024</p>

                                <div className="mr-[5%] inline-flex items-center px-5 text-[#1B4B8B] font-semibold text-[#1B4B8B] border border-[#1B4B8B] rounded p-2">
                                    <a href="#">Переглянути</a>
                                </div> </div>
                             
                        </div>
                    <div className="left-[53rem] relative mr-[5%] inline-flex items-center text-[#1B4B8B] font-semibold text-gray-900  ">
                           <p className="text-sm text-gray-500 truncate dark:text-gray-400">12.04.2024</p>
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center mt-[2rem] rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                            <div className="flex-1 min-w-0 text-left">
                                <p className="text-sm font-medium text-gray-900 truncate">Bonnie Green</p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">12.04.2024</p>
                            </div>
                            <div className="mr-[5%] inline-flex items-center px-5 text-[#1B4B8B] font-semibold text-gray-900 border border-[#1B4B8B] rounded p-2">
                                <a href="#">Переглянути</a>
                            </div>
                        </div> <div className="left-[53rem] relative mr-[5%] inline-flex items-center text-base font-semibold text-[#1B4B8B]  ">
                           <p className="text-sm text-gray-500 truncate dark:text-gray-400">12.04.2024</p>
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center mt-[2rem] rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                            <div className="flex-1 min-w-0 text-left">
                                <p className="text-sm font-medium text-gray-900 truncate">Michael Gough</p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">12.04.2024</p>
                            </div>
                            <div className="mr-[5%] inline-flex items-center px-5 text-[#1B4B8B] font-semibold text-[#1B4B8B] border border-[#1B4B8B] rounded p-2">
                                <a href="#">Переглянути</a>
                            </div>
                        </div> <div className="left-[53rem] relative mr-[5%] inline-flex items-center text-base font-semibold text-gray-900  ">
                           <p className="text-sm text-gray-500 truncate dark:text-gray-400">12.04.2024</p>
                        </div>
                    </div>
                </li>
                <li className="py-3 sm:py-4">
                    <div className="flex items-center mt-[2rem] rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                            <div className="flex-1 min-w-0 text-left">
                                <p className="text-sm font-medium text-gray-900 truncate">Thomas Lean</p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">12.04.2024</p>
                            </div>
                            <div className="border border-black mr-[15%] px-5 inline-flex items-center text-[#1B4B8B] font-semibold text-[#1B4B8B] rounded p-2">
                                <a href="#">Переглянути</a>
                            </div>

                        </div> <div className="left-[53rem] relative mr-[5%] inline-flex items-center text-base font-semibold text-[#1B4B8B]  ">
                           <p className="text-sm text-gray-500 truncate dark:text-gray-400">12.04.2024</p>
                        </div>
                    </div>
                </li>
                {/* Додавання дати */}
                <li className="py-3 sm:py-4">
                    <div className="text-center mt-4 text-gray-500 dark:text-gray-400">більше</div>
                </li>
            </ul>

        </>
    );
};

export default PostNeeds;
