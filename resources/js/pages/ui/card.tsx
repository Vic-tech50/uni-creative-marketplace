import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
//   CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardImage(props: any) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={props.img}
        alt={props.alt}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        {/* <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction> */}
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>
         {props.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
              <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full">Book Now</Button> 
          </DialogTrigger>

          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>

            <form>
              <FieldGroup>
                <Field>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" defaultValue="Pedro Duarte" />
                </Field>

                <Field>
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" name="username" defaultValue="@peduarte" />
                </Field>
              </FieldGroup>

              <DialogFooter className="mt-4">
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>

                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
       
       &nbsp;&nbsp; <Button className="w-full" variant="outline">View</Button>
      </CardFooter>
    </Card>
  )
}
