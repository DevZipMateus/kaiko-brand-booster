const MonteSiteBadge = () => {
  return (
    <div className="w-full bg-primary border-t border-primary">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-2 text-sm text-primary-foreground">
          <span>Site desenvolvido por</span>
          <a 
            href="https://montesite.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-accent hover:text-primary-foreground transition-colors"
          >
            MonteSite
          </a>
        </div>
      </div>
    </div>
  );
};

export default MonteSiteBadge;
