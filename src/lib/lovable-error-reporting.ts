/**
 * Generic error reporting utility for Confinential Connect.
 * Logs errors to the console in development. Swap the body of
 * reportError() to forward errors to your own monitoring service.
 */

export function reportLovableError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  console.error("[Confinential Error]", error, context);
}
