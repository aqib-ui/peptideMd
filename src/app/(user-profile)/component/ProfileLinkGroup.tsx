// src/app/(user-profile)/components/ProfileLinkGroup.tsx
import Image from "next/image";

interface LinkItem {
  label: string;
  href: string;
  iconSrc: string;
}

interface ProfileLinkGroupProps {
  links: LinkItem[];
}

export default function ProfileLinkGroup({ links }: ProfileLinkGroupProps) {
  return (
    <div className="grid grid-cols-1 w-full">
      {links.map(({ label, href, iconSrc }) => (
        <a
          key={href}
          href={href}
          //   className="flex items-center gap-3 px-6 py-3 transition-colors hover:bg-gray-100"
          className="flex items-center gap-3 px-6 py-3"
        >
          <Image
            src={iconSrc}
            alt={label}
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-medium text-gray-800">{label}</span>
        </a>
      ))}
    </div>
  );
}
