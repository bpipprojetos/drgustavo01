const FooterSection = () => {
  return (
    <footer className="bg-navy-deep py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-primary-foreground text-lg">
              Dr. Gustavo Mota
            </p>
            <p className="text-primary-foreground/50 font-body text-sm">
              Urologia e Performance Masculina · CRM-SC 18.530 | RQE 10.267
            </p>
          </div>
          <div className="text-primary-foreground/40 font-body text-sm text-center md:text-right">
            <p>© {new Date().getFullYear()} Dr. Gustavo Mota. Todos os direitos reservados.</p>
            <p className="mt-1">Política de Privacidade</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
