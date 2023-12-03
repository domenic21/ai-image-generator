 import { Button } from "@/components/ui/button";
import {Form} from "@/app/form";




export default function Home() {
  return (
    <div className="grid grid-cols-[400px_1fr]">
    <aside className="flex flex-col justify-between min-h-screen p-4 bg-gray-900">
      <header className="text-center">
        <h1 className="text-xl font-semibold">Image to code</h1>
        <h2>Convert your images into code!</h2>
      </header>
      <section>Filters</section>

      <footer>
        Develop by Domenic A.
      </footer>
    </aside>
    <main className="bg-gray-950">
      <section className = "max-w-2xl mx-auto p-10" 
      >
      <Form />
      </section>
    </main>
    <Button > Click me </Button>



    </div>
  )
}
