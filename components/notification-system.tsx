"use client"

import { useEffect, useState } from "react"

const nomes = [
  "Ana Paula", "Carlos", "Fernanda", "João V.", "Mariana", "Lucas",
  "Beatriz", "Rafael", "Tatiane", "Diego", "Camila", "Pedro H.",
  "Juliana", "Thiago", "Larissa", "Rodrigo", "Priscila", "Gustavo",
  "Letícia", "Matheus", "Sabrina", "Felipe", "Renata", "Bruno",
  "Vanessa", "André", "Patrícia", "Eduardo", "Aline", "Vinícius"
]

const emojis = ["🛒", "🤑", "💸", "🔥", "🛍️", "😍", "✅", "🎉", "💰", "⚡"]

const mensagens = [
  (n: string) => ({ name: n, text: "acabou de entrar no grupo", tag: "confirmado" }),
  (n: string) => ({ name: n, text: "entrou agora", tag: "há poucos segundos" }),
  (n: string) => ({ name: n, text: "se juntou ao grupo!", tag: null }),
  (n: string) => ({ name: n, text: "entrou pelo link", tag: "ativo" }),
  (n: string) => ({ name: n, text: "acabou de entrar 👀", tag: null }),
]

const cores = [
  ["#EE4D2D", "#FF8C42"], ["#25D366", "#128C7E"], ["#6C63FF", "#A78BFA"],
  ["#F59E0B", "#FBBF24"], ["#EC4899", "#F472B6"], ["#3B82F6", "#60A5FA"],
  ["#10B981", "#34D399"], ["#8B5CF6", "#C4B5FD"],
]

interface Notification {
  id: number
  name: string
  text: string
  tag: string | null
  emoji: string
  colors: string[]
  hiding: boolean
}

function getInitials(name: string) {
  return name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase()
}

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function NotificationSystem() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  useEffect(() => {
    let notifId = 0

    const showNotification = () => {
      const nome = getRandom(nomes)
      const msg = getRandom(mensagens)(nome)
      const emoji = getRandom(emojis)
      const colors = getRandom(cores)

      const newNotif: Notification = {
        id: notifId++,
        name: msg.name,
        text: msg.text,
        tag: msg.tag,
        emoji,
        colors,
        hiding: false,
      }

      setNotifications(prev => {
        const updated = [newNotif, ...prev].slice(0, 3)
        return updated
      })

      // Remove after 4s
      setTimeout(() => {
        setNotifications(prev =>
          prev.map(n => n.id === newNotif.id ? { ...n, hiding: true } : n)
        )
        setTimeout(() => {
          setNotifications(prev => prev.filter(n => n.id !== newNotif.id))
        }, 400)
      }, 4000)
    }

    // First notification after 1.8s
    const firstTimeout = setTimeout(showNotification, 1800)

    // Schedule subsequent notifications
    let intervalId: NodeJS.Timeout
    const scheduleNext = () => {
      const delay = 3000 + Math.random() * 4000
      intervalId = setTimeout(() => {
        showNotification()
        scheduleNext()
      }, delay)
    }

    const startScheduling = setTimeout(scheduleNext, 3000)

    return () => {
      clearTimeout(firstTimeout)
      clearTimeout(startScheduling)
      clearTimeout(intervalId)
    }
  }, [])

  return (
    <div className="fixed bottom-6 left-5 z-50 flex flex-col-reverse gap-2.5 max-w-80 pointer-events-none">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className={`flex items-center gap-3 bg-[rgba(20,20,20,0.92)] border border-[rgba(37,211,102,0.25)] rounded-[14px] px-4 py-3 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.5)] ${
            notif.hiding ? 'animate-notif-out' : 'animate-notif-in'
          }`}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
            style={{
              background: `linear-gradient(135deg, ${notif.colors[0]}, ${notif.colors[1]})`,
            }}
          >
            {getInitials(notif.name)}
          </div>
          <div className="text-[0.78rem] leading-snug text-foreground">
            <strong className="block text-[0.82rem] text-white">{notif.name}</strong>
            <span>
              {notif.text}{" "}
              {notif.tag && (
                <span className="text-[#25D366] font-semibold">✓ {notif.tag}</span>
              )}
            </span>
          </div>
          <div className="ml-auto text-lg shrink-0">{notif.emoji}</div>
        </div>
      ))}
    </div>
  )
}
