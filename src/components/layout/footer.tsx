import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Logo, LogoImage, LogoText } from "@/components/logo";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
    icon?: React.ReactNode;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
}

const socialIcons: Record<string, React.ReactNode> = {
  Twitter: <Twitter size={20} />,
  Instagram: <Instagram size={20} />,
  LinkedIn: <Linkedin size={20} />,
  Facebook: <Facebook size={20} />,
};

const Footer = ({
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "MediStore",
    title: "MediStore",
    url: "/",
  },
  className,
  tagline = "Quality medicines, trusted service.",
  menuItems = [
    {
      title: "Shop",
      links: [
        { text: "All Medicines", url: "#" },
        { text: "Category", url: "#" }
      ],
    },
    {
      title: "Customer Service",
      links: [
        { text: "Contact Us", url: "#" },
        { text: "Shipping Info", url: "#" },
        { text: "Return Policy", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Twitter", url: "#", icon: socialIcons.Twitter },
        { text: "Instagram", url: "#", icon: socialIcons.Instagram },
        { text: "LinkedIn", url: "#", icon: socialIcons.LinkedIn },
        { text: "Facebook", url: "#", icon: socialIcons.Facebook }
      ],
    },
  ],
  copyright = "©2026 MediStore. All rights reserved."
}: Footer2Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="col-span-1 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url="https://shadcnblocks.com">
                  <LogoImage
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10 dark:invert"
                  />
                  <LogoText className="text-xl">{logo.title}</LogoText>
                </Logo>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary flex items-center gap-2"
                    >
                      {link.icon && (
                        <span className="flex items-center">{link.icon}</span>
                      )}
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-center gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
          </div>
        </footer>
      </div >
    </section >
  );
};

export { Footer };