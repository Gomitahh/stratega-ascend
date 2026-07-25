# Plan de rediseño — próxima sesión (Stratega Academy)

> Guía para retomar en frío. Objetivo del cliente: la web debe transmitir **PODER e INSTITUCIÓN ESTABLECIDA** (autoridad y exclusividad), compitiendo mentalmente con Harvard Kennedy / LSE / Sciences Po. Es una landing de **cursos de liderazgo político**. Registro de marca: **brand** (el diseño ES el producto de conversión). Contexto estratégico completo en `PRODUCT.md`.

## 0. Estado actual (lo ya hecho — sesión 2026-07-11)
Ya se hizo una **primera pasada** de rediseño (auditoría impeccable 25/40 → rediseño incremental). Resumen:
- Contacto real cableado: **WhatsApp +51 940 371 250**, correo **strategacompol@gmail.com**. Helper `waLink()` en `src/routes/index.tsx`. Sin CTAs muertos de conversión.
- Accesibilidad: `prefers-reduced-motion` + throttle de scroll con rAF.
- Sistema visual sobrio: sin eyebrows/gradientes/cards-clonadas, dorado como acento raro, `--radius`=8px, Blog eliminado.
- Tipografía actual: **Libre Caslon Display** (titulares) + **Public Sans** (cuerpo), cargadas en `src/routes/__root.tsx`.
- Copy limpiado de registro SaaS.
- Snapshot de auditoría en `.impeccable/critique/`.

**Lo que el cliente quiere en ESTA próxima sesión:** REHACER el diseño usando las skills de diseño disponibles (no solo el rediseño incremental de impeccable), con un enfoque más ambicioso/visual, y **asignando el modelo más barato capaz a cada trabajo**.

---

## 1. Filosofía de asignación de modelos (regla del cliente)
Usar el modelo más económico que haga bien el trabajo. Delegar a subagentes con el parámetro `model`. Correr en **secuencia** lo que toque los mismos archivos (index.tsx, styles.css) para no pisarse; paralelizar solo trabajos en archivos distintos.

| Tipo de trabajo | Modelo | Ejemplos |
|---|---|---|
| Mecánico / acotado / patrón conocido | **Haiku** | Cablear enlaces, reduced-motion, throttle, fixes de lint, reemplazos de clase, mover imports |
| Implementación con criterio moderado | **Sonnet** | Typeset, copy/clarify, integrar componentes, ajustes responsive, orquestar el flujo |
| Diseño / "taste" alto / generación creativa | **Opus** | Dirección visual, rediseño de secciones, image-to-code, polish integral |

El agente orquestador (Sonnet) prepara briefs cerrados y detallados para cada subagente (arrancan en frío → darles rutas exactas, qué NO tocar, y verificación).

---

## 2. Skills disponibles y para qué usar cada una aquí
- **`imagegen-frontend-web`** → genera UNA imagen de referencia POR SECCIÓN del diseño objetivo antes de codear. Ideal para "ver" el norte visual "navy institucional serio" y que el cliente lo apruebe. (Dirección: Opus; la generación es vía herramienta.)
- **`image-to-code`** → genera la imagen del diseño, la analiza e implementa el código para que coincida. El motor del "rehacer el diseño". (Opus.)
- **`design-taste-frontend`** (v2, anti-slop) → rediseño de landing con criterio, evita lo templado. (Opus.)
- **`redesign-existing-projects`** → upgrade de un sitio existente a calidad premium, audita y aplica sin romper funcionalidad. Muy alineado con "rehacer sin perder lo que ya funciona". (Opus.)
- **`high-end-visual-design`** → que se vea "caro/agencia" (fuentes, espaciado, sombras, tarjetas). (Opus/Sonnet.)
- **`impeccable`** → auditar (`critique`), medir mejora del score, y `polish` final. (Orquesta Sonnet; subagentes según.)
- **`react-best-practices` / `senior-frontend`** → performance e implementación limpia React/Tailwind. (Sonnet.)
- **`brandkit`** (opcional) → si el cliente quiere un brand-board/identidad formal.

---

## 3. Plan de ejecución paso a paso
**Paso 1 — Recuperar contexto (Sonnet, orquestador).** Leer `PRODUCT.md`, este plan, la memoria (`project_stratega_academy.md`), el snapshot en `.impeccable/critique/`, y el estado actual de `src/routes/index.tsx` + `src/styles.css`. Confirmar con el cliente si mantiene la dirección "navy institucional serio" o quiere explorar otra.

**Paso 2 — Dirección visual con imágenes (Opus + `imagegen-frontend-web`).** Generar referencias visuales por sección (Hero, Programs, Faculty, Methodology, CTA…) del diseño objetivo. Mostrarlas al cliente y que elija/apruebe ANTES de codear. Esto es lo nuevo frente a la sesión anterior (que fue a ciegas).

**Paso 3 — Confirmar dirección (cliente).** Punto de control. No codear hasta aprobación de la referencia visual.

**Paso 4 — Implementación por bloques revisables (Opus + `image-to-code` / `design-taste-frontend`).** Rehacer sección por sección para que coincida con la referencia aprobada. Bloques: (a) sistema global + Hero, (b) Programs + Faculty, (c) resto. Mostrar cada bloque al cliente.

**Paso 5 — Tipografía y copy (Sonnet).** Ajustar `typeset`/copy sobre la nueva estructura. (Si se mantiene Caslon+Public Sans, solo afinar.)

**Paso 6 — Trabajo mecánico (Haiku).** Recablear CTAs si cambió el markup (WhatsApp +51 940 371 250 se mantiene), reduced-motion, accesibilidad, fixes de lint.

**Paso 7 — Auditoría (Sonnet + `impeccable critique`).** Medir el nuevo score vs 25/40. 2 subagentes A/B.

**Paso 8 — Polish final (Opus + `impeccable polish`).** Remate integral: coherencia entre secciones, responsive, detalles.

---

## 4. Guardrails (no romper)
- **Lovable sincroniza git** (ver `AGENTS.md`): no reescribir historia publicada; mantener la rama compilable. No commitear sin que el cliente lo pida.
- **Preservar siempre:** los `href` de WhatsApp / `waLink()`, la lógica `prefers-reduced-motion` (`use-reveal.ts` + `@media` en styles.css), el throttle de scroll, y las imágenes existentes (`src/assets/`).
- **NO reformatear** los componentes `src/components/ui/` (shadcn): tienen CRLF preexistente → `eslint src/` da miles de errores prettier que NO son nuestros. Lintear solo los archivos tocados.
- Verificar cada bloque con `npm run build` (compila) + `npx eslint <archivos tocados>` (0 errores). El build es el chequeo fiable; el trabajo se hace a ciegas salvo que el cliente revise en `npm run dev`.
- El cliente debe **revisar visualmente en navegador** (`npm run dev`) — el agente no tiene navegador.

---

## 5. Pendientes de CONTENIDO real (no diseño — requieren datos del cliente)
- Cifras reales: alumni, países, docentes, instituciones (hoy 12.400/32/180/60 podrían ser placeholder).
- **Logos + verificación legal de instituciones aliadas** (Harvard Kennedy, LSE, Sciences Po, OEA, PNUD, Georgetown): hoy con ícono genérico. ⚠️ Riesgo ético/legal si no son afiliaciones formales reales.
- Testimonios con nombres/personas reales.
- Brochure PDF (hoy el botón se cambió a "Hablar con admisiones").

---

## 6. Primer prompt sugerido para arrancar la próxima sesión
> "Retomamos Stratega Academy. Lee `PLAN-REDISENO-SIGUIENTE.md` y ejecútalo desde el Paso 1."
