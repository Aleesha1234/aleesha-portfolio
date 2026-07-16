export function Footer() {
  const targetYear = "2026"; 
  
  return (
    <footer className="bg-primary text-white py-12 border-t border-primary/20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-heading font-bold text-white tracking-tight">Aleesha Tariq</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-sm">
            <p className="text-white/70 font-medium">
              &copy; {targetYear} All rights reserved.
            </p>
            <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-accent/80"></div>
            <p className="text-white/50">
              Crafted with <span className="text-white/80 font-semibold">React</span> & <span className="text-white/80 font-semibold">Tailwind CSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
