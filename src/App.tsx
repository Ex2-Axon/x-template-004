import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-background text-text font-body selection:bg-primary selection:text-background overflow-hidden">
      {/* Effect *10 - Background Overlays */}
      <div className="crt-overlay" />
      <div className="scanline" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(var(--color-muted) 1px, transparent 1px), linear-gradient(90deg, var(--color-muted) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen p-4 md:p-8">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex items-center gap-3 glass-panel p-3 px-6 rounded-none border-l-4 border-l-primary">
            <div className="w-3 h-3 bg-primary animate-pulse" />
            <span className="font-heading text-sm tracking-widest text-primary uppercase">
              SYSTEM ONLINE — VITE + REACT
            </span>
          </div>
          
          <div className="font-heading text-xl md:text-2xl text-accent neon-text-accent">
            {time}
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto w-full">
          <div className="relative mb-6">
            <h1 className="font-heading text-6xl md:text-8xl font-black tracking-tighter uppercase glitch-text leading-none">
              GET STARTED
            </h1>
            <div className="absolute -top-4 -right-4 bg-accent text-background px-2 py-1 text-xs font-bold animate-flicker">
              v0.0.0-Genesis
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted max-w-2xl mb-12 font-medium tracking-wide">
            Edit <code className="text-primary">src/App.tsx</code> and save to test HMR. 
            The system is operating at maximum capacity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            {/* Action Card */}
            <div className="glass-panel p-8 group hover:border-primary transition-all duration-300 flex flex-col items-center justify-center gap-6">
              <span className="font-heading text-xs text-muted uppercase tracking-widest">Interactive Component</span>
              <button 
                onClick={() => setCount(c => c + 1)}
                className="w-full py-4 px-8 bg-transparent border-2 border-primary text-primary font-heading tracking-widest hover:bg-primary hover:text-background transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">COUNT_ {count}</span>
                <div className="absolute inset-0 bg-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Status Card */}
            <div className="glass-panel p-8 border-accent/20 hover:border-accent transition-all duration-300 flex flex-col items-center justify-center gap-6">
              <span className="font-heading text-xs text-muted uppercase tracking-widest">Network Status</span>
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                  <span className="text-xs text-muted">SIGNAL</span>
                  <span className="text-accent font-heading">STABLE</span>
                </div>
                <div className="flex gap-1 items-end h-8">
                  <div className="w-1 bg-accent h-3" />
                  <div className="w-1 bg-accent h-5" />
                  <div className="w-1 bg-accent h-8" />
                  <div className="w-1 bg-accent h-6 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-muted/20 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50">
          <p className="text-xs font-heading tracking-widest uppercase">
            &copy; 2026 AXON TERMINAL // PROTOCOL-004
          </p>
          <div className="flex gap-6 text-xs font-heading tracking-widest uppercase">
            <a href="#" className="hover:text-primary transition-colors">Documentation</a>
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">License</a>
          </div>
        </footer>

        {/* Decorative Elements (Effect *10) */}
        <div className="fixed bottom-0 left-0 w-32 h-32 bg-primary/10 blur-[100px] pointer-events-none" />
        <div className="fixed top-0 right-0 w-64 h-64 bg-accent/10 blur-[120px] pointer-events-none" />
        
        {/* Animated Corner Brackets */}
        <div className="fixed top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary opacity-50 pointer-events-none" />
        <div className="fixed top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary opacity-50 pointer-events-none" />
        <div className="fixed bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary opacity-50 pointer-events-none" />
        <div className="fixed bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary opacity-50 pointer-events-none" />
      </div>
    </div>
  )
}
