export default function Footer(){
  return (
    <footer id="contato" className="mt-20 border-t border-white/5">
      <div className="container py-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-bold">BRUXO TEAM</p>
          <p className="text-sm text-muted">Jiu-Jitsu em Stiep, Itapuã e Stella — Salvador/BA</p>
        </div>
        <div className="flex gap-4 text-sm">
          <a href="https://instagram.com" className="text-muted hover:text-white">Instagram</a>
          <a href="https://wa.me/5571999990000" className="text-muted hover:text-white">WhatsApp</a>
          <a href="#" className="text-muted hover:text-white">Política de Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
