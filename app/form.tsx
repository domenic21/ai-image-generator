"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export  const Form = () => {
  return (
    <form  className='flex flex-col gap-10' onSubmit={evt =>{
      evt.preventDefault(); 

      const form = evt.target as HTMLFormElement;
      const url = form.elements.namedItem("url") as HTMLInputElement;
      console.log(url.value);
    }}>
      <Label htmlFor="url" className="text-center"> Enter URL from image </Label>
      <Input
        id="url"
        name='url'
        type="url"
        placeholder="http://screenshot/image.jpg"
      ></Input>
      <Button type="submit">Generate image!</Button>
    </form>
  );
};
//Notes:
//evt is the event triggered by the form
//preventDefault() is a method that prevents the default action of the event from happening.
//the default action of the event is to refresh the page
// htmlforelement is a property that returns the element that the label is associated with.
//const url = form.elements.namedItem("url") as HTMLInputElement is a variable that is assigned to the input element with the name url