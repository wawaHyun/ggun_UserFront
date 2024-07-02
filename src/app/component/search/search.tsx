import { QuestionIcon } from "../../../../public/icon/icon";

export function Search({ text, click, style }: IButton) {
  return (
    <div className={`${style}`}>
      <label className="">
        <input
          onClick={click}
          className="placeholder:italic block min-w-[45px] min-h-[40px] w-full h-full pl-9 pr-3 shadow-sm sm:text-sm bg-search_img bg-contain bg-left bg-no-repeat" placeholder={`${text}`} type="text" name="search" />
      </label>
    </div>
  )
}