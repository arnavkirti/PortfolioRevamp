"use client";
export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950/80 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 py-12">
        <div className="text-center space-y-4">
          {/* Main Footer Text */}
          <p className="text-gray-400 text-sm leading-relaxed">
            © 2025 Arnav Kirti. Built with passion for clean design and innovative blockchain solutions.
          </p>
          
          {/* Made with Love */}
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>Made with</span>
            <span className="text-red-400 animate-pulse text-lg">♦</span>
            <span>in the decentralized world</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
