export {};

declare global {
  interface Window {
    turnstile: {
      reset: (widget?: string | HTMLElement) => void;
    };

    onTurnstileSuccess?: (token: string) => void;
    onTurnstileExpired?: () => void;
    onTurnstileError?: () => void;
  }
}