import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div className="flex dark:bg-[#1f1f1f] items-center w-full p-6 bg-background z-50">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button size="sm" variant="ghost" className="text-[#87ACA3]]">
          Privacy Policy
        </Button>
        <Button size="sm" variant="ghost">
          Terms & Conditions
        </Button>
      </div>
    </div>
  );
};

export default Footer;
