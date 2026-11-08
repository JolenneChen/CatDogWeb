import { Button } from "@/components/ui/button"
export default function Page() {
  return (
    <div className="w-full h-screen bg-white flex flex-col items-center text-center justify-center gap-4">
      <div className="bg-[#e6e6e6] text-black p-12">
        <p>Dogs or Cats</p>
        <div className="gap-2 flex flex-row pt-4">
          <a href="/Cats" className=" bg-[#969db4] rounded-2xl hover:underline p-4">
            Cats Images
          </a>
          <a href="/Dogs" className=" bg-[#969db4] rounded-2xl hover:underline p-4">
            Dog Images
          </a>
        </div>

      </div>
    </div>
  )
}
