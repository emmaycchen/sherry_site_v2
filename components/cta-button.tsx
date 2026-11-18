import Link from "next/link";

export const ctaClassName =
  "inline-flex items-center justify-center rounded-[10px] bg-cta px-7 py-3.5 font-body text-base font-bold text-ink transition-colors duration-300 hover:bg-cta-hover hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cta";

export function CtaButton({
  href = "/book",
  className = "",
  children = "Book a Service",
}: {
  href?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href} className={`${ctaClassName} ${className}`}>
      {children}
    </Link>
  );
}
