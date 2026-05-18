"use client"

import { WhatsAppIcon } from "@/components/whatsapp-icon"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

interface WhatsAppButtonProps {
  href: string
}

export function WhatsAppButton({ href }: WhatsAppButtonProps) {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "WhatsApp Group Join",
        content_category: "Achadinhos Shopee",
      })
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group relative flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white text-lg font-bold rounded-[14px] shadow-[0_4px_30px_rgba(37,211,102,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_8px_40px_rgba(37,211,102,0.5)] hover:brightness-105 active:scale-[0.98] overflow-hidden"
    >
      <span className="absolute inset-0 bg-gradient-to-br from-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <WhatsAppIcon className="w-6 h-6 relative" />
      <span className="relative">Entrar no Grupo Agora</span>
    </a>
  )
}
