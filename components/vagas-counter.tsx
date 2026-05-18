"use client"

import { useMemo } from "react"

export function VagasCounter() {
  const vagas = useMemo(() => Math.floor(Math.random() * 30) + 15, [])

  return (
    <div className="text-[0.82rem] text-muted-foreground mt-2">
      <span className="text-accent font-bold">{vagas} vagas</span> restantes no grupo
    </div>
  )
}
