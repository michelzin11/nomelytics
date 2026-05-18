import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { NotificationSystem } from "@/components/notification-system"
import { VagasCounter } from "@/components/vagas-counter"

const beneficios = [
  { icon: "💰", label: "Cashback" },
  { icon: "⚡", label: "Flash sale" },
  { icon: "🎟️", label: "Cupons" },
  { icon: "🚚", label: "Frete grátis" },
  { icon: "🏷️", label: "Menor preço" },
  { icon: "📦", label: "Reviews honestos" },
]

export default function AchadinhosPage() {
  return (
    <div className="animated-bg min-h-screen">
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-5 py-8 gap-10">
        {/* Badge */}
        <div className="animate-fade-down inline-flex items-center gap-2 bg-[rgba(238,77,45,0.15)] border border-[rgba(238,77,45,0.35)] rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
          Grupo ativo agora
        </div>

        {/* Card Principal */}
        <div className="animate-fade-up-delay-1 bg-card border border-border rounded-[28px] px-6 sm:px-10 py-12 max-w-[480px] w-full text-center backdrop-blur-2xl shadow-[0_8px_60px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
          {/* Icons */}
          <div className="flex items-center justify-center gap-4 mb-7">
            <div className="w-16 h-16 rounded-[18px] flex items-center justify-center text-3xl bg-gradient-to-br from-primary to-accent shadow-[0_4px_20px_rgba(238,77,45,0.4)]">
              🛍️
            </div>
            <div className="text-xl text-muted-foreground animate-arrow-bounce">→</div>
            <div className="w-16 h-16 rounded-[18px] flex items-center justify-center bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-[0_4px_20px_rgba(37,211,102,0.35)]">
              <WhatsAppIcon className="w-8 h-8" />
            </div>
          </div>

          {/* Title */}
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl leading-tight tracking-tight mb-3">
            Promos e Bugs<br />
            <span className="bg-gradient-to-r from-primary via-accent to-[#FFD700] bg-clip-text text-transparent">
              da Shopee 🧡
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground text-base leading-relaxed mb-9">
            Promoções imperdíveis, cupons e ofertas relâmpago direto no seu WhatsApp. Grátis e sem spam!
          </p>

          {/* Stats */}
          <div className="flex border border-border rounded-[14px] overflow-hidden mb-9">
            <div className="flex-1 py-4 px-2 text-center bg-[rgba(255,255,255,0.03)] border-r border-border">
              <div className="font-display font-extrabold text-xl text-foreground">+5k</div>
              <div className="text-[0.7rem] text-muted-foreground uppercase tracking-wide mt-0.5">Membros</div>
            </div>
            <div className="flex-1 py-4 px-2 text-center bg-[rgba(255,255,255,0.03)] border-r border-border">
              <div className="font-display font-extrabold text-xl text-foreground">90%</div>
              <div className="text-[0.7rem] text-muted-foreground uppercase tracking-wide mt-0.5">Cupom off</div>
            </div>
            <div className="flex-1 py-4 px-2 text-center bg-[rgba(255,255,255,0.03)]">
              <div className="font-display font-extrabold text-xl text-foreground">100%</div>
              <div className="text-[0.7rem] text-muted-foreground uppercase tracking-wide mt-0.5">Grátis</div>
            </div>
          </div>

          {/* CTA Button */}
          <WhatsAppButton href="https://chat.whatsapp.com/JIftWkEDgd71UgiTF34MjU" />

          {/* Hint */}
          <div className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1.5">
            🔒 Seguro · Grátis · Saia quando quiser
          </div>

          {/* Vagas Counter */}
          <VagasCounter />
        </div>

        {/* Benefit Chips */}
        <div className="animate-fade-up-delay-2 flex flex-wrap gap-2 justify-center">
          {beneficios.map((item) => (
            <div
              key={item.label}
              className="inline-flex items-center gap-1.5 bg-[rgba(255,255,255,0.05)] border border-border rounded-full px-4 py-2 text-xs text-foreground"
            >
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="animate-fade-up-delay-3 text-muted-foreground text-xs text-center">
          Feito com ❤️ para quem ama uma barganha · Shopee Achadinhos Brasil
        </footer>
      </div>

      {/* Notification System */}
      <NotificationSystem />
    </div>
  )
}
