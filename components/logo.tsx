import Image from "next/image";

const logoSources = {
  onLight: "/images/it-experts-logo-on-light.png",
  onDark: "/images/it-experts-logo-on-dark.png",
};

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Image
      src={light ? logoSources.onDark : logoSources.onLight}
      alt="IT Experts Agency"
      width={1220}
      height={382}
      className="h-14 w-auto"
    />
  );
}
