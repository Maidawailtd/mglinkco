export function getAriaLabel(text: string, context?: string): string {
  return context ? `${text} for ${context}` : text
}

export function getSrOnlyText(text: string): JSX.Element {
  return <span className="sr-only">{text}</span>
}

export function getAriaDescribedBy(id: string): { "aria-describedby": string } {
  return { "aria-describedby": id }
}

export function getAriaLabelledBy(id: string): { "aria-labelledby": string } {
  return { "aria-labelledby": id }
}

export function getAriaHidden(): { "aria-hidden": boolean } {
  return { "aria-hidden": true }
}

export function getAriaExpanded(expanded: boolean): { "aria-expanded": boolean } {
  return { "aria-expanded": expanded }
}

export function getAriaControls(id: string): { "aria-controls": string } {
  return { "aria-controls": id }
}

export function getAriaPressed(pressed: boolean): { "aria-pressed": boolean } {
  return { "aria-pressed": pressed }
}

export function getAriaSelected(selected: boolean): { "aria-selected": boolean } {
  return { "aria-selected": selected }
}

export function getAriaRequired(required: boolean): { "aria-required": boolean } {
  return { "aria-required": required }
}

export function getAriaInvalid(invalid: boolean): { "aria-invalid": boolean } {
  return { "aria-invalid": invalid }
}

export function getAriaLive(mode: "off" | "polite" | "assertive"): { "aria-live": "off" | "polite" | "assertive" } {
  return { "aria-live": mode }
}

export function getAriaAtomic(atomic: boolean): { "aria-atomic": boolean } {
  return { "aria-atomic": atomic }
}

export function getAriaBusy(busy: boolean): { "aria-busy": boolean } {
  return { "aria-busy": busy }
}

export function getAriaDisabled(disabled: boolean): { "aria-disabled": boolean } {
  return { "aria-disabled": disabled }
}

