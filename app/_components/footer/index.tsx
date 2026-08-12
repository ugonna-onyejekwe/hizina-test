import Container from "@/components/ui/container";
import { footerNav } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-10">
      <Container className="flex gap-4">
        <Link href={"/"}>
          <Image src="/logo.png" alt="logo" height={48} width={48} />
        </Link>

        <section className="flex items-center gap-x-4 flex-wrap gap-y-2 ">
          {footerNav.map((nav) => (
            <Link
              href={nav.path}
              key={nav.name}
              className="text-sm  text-muted-foreground hover:text-primary transition-all cursor-pointer"
            >
              {nav.name}
            </Link>
          ))}
        </section>
      </Container>
    </div>
  );
};

export default Footer;
