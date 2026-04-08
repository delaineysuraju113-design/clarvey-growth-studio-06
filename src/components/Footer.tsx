const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading text-lg font-bold text-foreground">Clarvey</span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Built with intention.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
