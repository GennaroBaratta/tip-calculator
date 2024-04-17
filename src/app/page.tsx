import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent
} from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Card className="flex flex-row flex-wrap max-w-xl">
        <CardContent className="bg-white rounded-t-sm sm:p-8 p-6 flex flex-col">
          <h1 className="font-extrabold text-cyan text-xl">Join our community</h1>
          <h2 className="text-brightYellow font-semibold pt-5">30-day, hassle-free money back guarantee</h2>
          <p className="text-slate-400 font-light pt-2 pb-2 text-sm">Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.</p>
        </CardContent>
        <CardContent className="bg-cyan flex flex-col gap-4 text-slate-50 w-full sm:w-1/2 sm:rounded-bl-sm sm:p-8 p-6 sm:pt-8">          
          <h1 className="font-bold">Monthly Subscription</h1>
          
          <div className="sm:pb-2">
          <p className="text-3xl font-semibold">$29 <span className="text-sm  align-middle  font-thin">per month</span></p>
          <p className="font-light text-sm m-1">Full access for less than $1 a day</p>
          
          </div>
          
          <Button className="bg-brightYellow w-full shadow-lg ">Sign Up</Button>
        </CardContent>
        <CardContent className="bg-cyanLight sm:p-8 p-6 flex flex-col gap-3 justify-items-center text-slate-50 rounded-b-sm  w-full sm:w-1/2 sm:rounded-bl-none" >
          <h1 className="font-bold">Why us</h1>
          <ul className="font-extralight text-sm">
            <li>Tutorials by industry experts</li>
            <li>Peer & expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </CardContent>
      </Card>

    </main>
  );
}
