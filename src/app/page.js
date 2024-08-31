import Image from "next/image";

export default function Home() {
  const handleUploadPgn = async () => {
    const pgn = document.querySelector("textarea").value;
    // const response = await fetch("/api/uploadPgn", {
    //   method: "POST",
    //   body: JSON.stringify({ pgn }),
    console.log(pgn);
    // });
  };

  return (
    <main className="flex min-h-screen flex-row items-center p-24 h-screen gap-4">
      <div className="flex flex-col items-center justify-center border min-h-full border-stone-950  border-spacing-1 rounded-xl h-full w-4/6"></div>
      <div className="flex flex-col items-start  min-h-full border-stone-950 border-spacing-1 rounded-xl h-full w-2/6 p-4 gap-4">
        <div className="flex items-start justify-start gap-1">
          <p className="text-sm font-semibold">Load from PGN</p>
        </div>
        <div className="flex flex-col w-full h-1/2 divide-y divide-dashed divide-stone-700">
          <textarea
            placeholder="Paste PGN here"
            autoFocus
            className="w-full h-full rounded-t-md  p-2 resize-none placeholder-stone-700 text-zinc-600 text-sm bg-stone-950 outline-none"
          ></textarea>
          <button className="w-full bg-stone-900 rounded-b-md p-2 text-sm">
            <div className="flex items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-5"
              >
                <path d="M11.47 1.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 0 1-1.06-1.06l3-3ZM11.25 7.5V15a.75.75 0 0 0 1.5 0V7.5h3.75a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h3.75Z" />
              </svg>
              Upload File
            </div>
          </button>
        </div>
        <button
          className="w-full rounded-md p-2 bg-yellow-900 text-stone-200 text-sm"
          // onClick={handleUploadPgn}
        >
          Add Game
        </button>
      </div>
    </main>
  );
}
