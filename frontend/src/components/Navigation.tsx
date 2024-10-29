import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaShoppingCart } from "react-icons/fa";

const components: { title: string }[] = [
  {
    title: "Contact Us",
  },
  {
    title: "Become a seller",
  },
  {
    title: "Our Story",
  },
  {
    title: "Careers",
  },
];
const products: { title: string }[] = [
  {
    title: "Cats",
  },
  {
    title: "Dogs",
  },
  {
    title: "Birds",
  },
];

export function Navigation() {
  return (
    <nav className="flex items-center w-full">
      <NavigationMenu className="p-2">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b hover:bg-gradient-to-b/70 from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium text-black">
                        Top Products
                      </div>
                      <p className="text-sm leading-tight text-black/80">
                        View the highest rated products, loved by all our
                        customers
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {products.map((product) => (
                  <ListItem
                    key={product.title}
                    title={product.title}
                    className="cursor-pointer"
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid max-w-[90vw] w-[200px] gap-3 p-4 md:w-[250px] md:grid-cols-1 lg:w-[300px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    className="cursor-pointer"
                  ></ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Input placeholder="Search Products" className="bg-white max-w-[450px]" />
      <div className="ml-auto px-4 flex gap-4 items-center">
        <FaShoppingCart className="text-xl text-primary hover:text-primary/75 transition-all cursor-pointer" />
        <Avatar className="hover:opacity-75 cursor-pointer">
          <AvatarImage src="https://github.com/MohammadMazin.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
