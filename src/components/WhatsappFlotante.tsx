import { linkWhatsapp } from "@/lib/config";
import { IconoWhatsapp } from "./IconoWhatsapp";

export function WhatsappFlotante() {
  return (
    <a
      href={linkWhatsapp("Hola, quería hacer una consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="whatsapp-flotante fixed right-5 bottom-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1fa855] text-white shadow-[0_10px_30px_-6px_rgba(31,168,85,0.6)] transition hover:scale-105"
    >
      <IconoWhatsapp className="h-7 w-7" />
    </a>
  );
}
