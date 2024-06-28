import { QuestionIcon } from "../../../../public/icon/icon";

export function Search({ text, path, color }: IButton) {
  return (
    <div>
      <label className="relative block w-full h-[10%]">
        <span className="sr-only">search</span>
        <span className="absolute top-2 left-0 flex items-center pl-2"><QuestionIcon color="rgb(148 163 184)" /></span>
        <input
          onClick={path}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder={text} type="text" name="search" />
      </label>
    </div>
  )
}