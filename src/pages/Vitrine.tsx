import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full overflow-hidden" style={{ height: "calc(100vh - 80px - 63px)", marginTop: "80px" }}>
        <iframe
          src="https://kaikobones.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </main>
      <div style={{ height: "63px" }} className="w-full" />
    </div>
  );
};

export default Vitrine;
