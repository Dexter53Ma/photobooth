import { MailIcon } from "@/components/icons";

export function PreHeader() {
  return (
    <div
      className="flex items-center justify-between max-md:px-3"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 1030,
        width: "100%",
        backgroundColor: "rgb(255, 4, 34)",
        color: "white",
        fontFamily: "var(--font-suisse)",
        fontSize: "14px",
        height: "28px",
        padding: "0 22px 1.5px 14px",
      }}
    >
      <nav className="flex items-center gap-3">
        <span className="text-white text-[13px] max-md:text-[11px]">Marrakech PhotoBooths</span>
      </nav>

      <nav className="flex items-center gap-3 max-md:gap-2">
        <a href="tel:+212621189496" className="text-white text-[13px] max-md:text-[11px]">
          +212 6 21 18 94 96
        </a>
        <a
          href="mailto:contact@marrakechphotobooth.com"
          className="flex items-center gap-1 text-white text-[13px] max-md:hidden"
        >
          <MailIcon size={14} />
          contact@marrakechphotobooth.com
        </a>
      </nav>
    </div>
  );
}
