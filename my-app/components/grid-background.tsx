"use client"

export function GridBackground() {
  return (
    <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950">
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]"></div>
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-violet-400 opacity-20 blur-[100px] dark:bg-violet-600 dark:opacity-30"></div>
    </div>
  )
}
