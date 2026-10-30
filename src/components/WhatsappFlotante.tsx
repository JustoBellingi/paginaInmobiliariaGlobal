import { linkWhatsapp } from "@/lib/config";
import { IconoWhatsapp } from "./IconoWhatsapp";

export function WhatsappFlotante() {
  return (
    <a
      href={linkWhatsapp("Hola, quería hacer una consulta.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-105"
    >
      <IconoWhatsapp className="h-7 w-7" />
    </a>
  );
}
