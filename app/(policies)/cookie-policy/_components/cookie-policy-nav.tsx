import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";

const CookiePolicyNavbar = () => {
  return (
    <>
      <div className=" fixed top-0 left-0 right-0 border-b z-50">
        <Container className="flex items-center justify-between gap-4 py-4 bg-background">
          <Image
            src="/logo.png"
            className="h-10 w-10 "
            height={40}
            width={40}
            alt="Hizina logo"
          />

          <section className="flex items-center gap-2">
            <Link
              href={"/"}
              className="text-foreground hover:text-primary text-sm cursor-pointer "
            >
              Home
            </Link>
          </section>
        </Container>
      </div>
    </>
  );
};

export default CookiePolicyNavbar;
