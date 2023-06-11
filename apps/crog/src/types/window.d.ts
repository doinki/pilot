interface Window
  extends EventTarget,
    AnimationFrameProvider,
    GlobalEventHandlers,
    WindowEventHandlers,
    WindowLocalStorage,
    WindowOrWorkerGlobalScope,
    WindowSessionStorage {
  __setPreferredTheme: (theme: 'dark' | 'light') => void;
}
