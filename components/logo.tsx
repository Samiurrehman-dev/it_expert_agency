import Image from "next/image";

const logoSources = {
  color:
    "https://itexpertsagency.com/wp-content/uploads/2023/12/IT-Experts-Logo-With-Color.svg",
  white:
    "https://itexpertsagency.com/wp-content/uploads/2023/12/IT-Experts-Logo-White-Color.svg",
};

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Image
      src={light ? logoSources.white : logoSources.color}
      alt="IT Experts Agency"
      width={610}
      height={191}
      unoptimized
      className={light ? "h-16 w-auto" : "h-14 w-auto"}
    />
  );
}
