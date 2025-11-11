const MonteSiteBadge = () => {
  return (
    <div className="w-full bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-1 text-sm text-foreground">
          <span>Desenvolvido por</span>
          <a 
            href="https://montesite.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-medium hover:opacity-80 transition-opacity"
          >
            <span className="text-primary">Monte</span>
            <span className="text-foreground">Site</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MonteSiteBadge;
