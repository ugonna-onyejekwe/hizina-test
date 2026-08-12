import Container from "@/components/ui/container";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navlist } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
};

const MobileMenu = ({ setIsOpen, isOpen }: Props) => {
  const pathname = usePathname();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="md:hidden block cursor-pointer">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="top" className="py-10">
        <Container className="max-w-[500px]">
          <Link
            href={"/"}
            className="flex items-center gap-1 pb-2"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="logo"
              className="size-12"
              height={48}
              width={48}
            />
            <h1 className="font-bold text-md">Hizina</h1>
          </Link>

          <section className="flex flex-col ">
            {navlist.map((nav) => (
              <Link
                href={nav.path}
                key={nav.name}
                className={cn(
                  "text-sm border-t py-3 last:border-b text-muted-foreground hover:text-primary transition-all cursor-pointer",
                  pathname === nav.path && "text-primary",
                )}
                onClick={() => setIsOpen(false)}
              >
                {nav.name}
              </Link>
            ))}
          </section>
        </Container>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
