export const NavbarMenu = () => {
  return (
    <div className="items-center box-border caret-transparent flex outline-[oklab(0.708_0_0_/_0.5)]">
      <button className="text-white text-sm font-medium items-center bg-sky-500 caret-transparent gap-x-2 flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap mr-8 px-4 py-2 rounded-[10px]">
        Dashboard
      </button>
      <button className="text-sm font-medium items-center bg-transparent caret-transparent gap-x-2 flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap mr-8 px-4 py-2 rounded-[10px]">
        Exercise Library
      </button>
      <button className="text-sm font-medium items-center bg-transparent caret-transparent gap-x-2 flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap mr-8 px-4 py-2 rounded-[10px]">
        Flashcards
      </button>
      <button className="text-sm font-medium items-center bg-transparent caret-transparent gap-x-2 flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap mr-8 px-4 py-2 rounded-[10px]">
        Self-Quiz
      </button>
      <button className="text-sm font-medium items-center bg-transparent caret-transparent gap-x-2 flex shrink-0 h-9 justify-center leading-5 outline-[oklab(0.708_0_0_/_0.5)] gap-y-2 text-nowrap px-4 py-2 rounded-[10px]">
        Placement Notes
      </button>
    </div>
  );
};


