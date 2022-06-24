import { LogoFooter } from "../LogoFooter";

export function Footer() {
  return (
    <footer className="w-full py-4 flex-col flex md:flex-row justify-between px-8 items-center bg-gray-900 border-t border-gray-500">
      <div className="flex gap-6  items-center flex-col md:flex-row">
        <a href="/">
        <LogoFooter />
        </a>
        <a className="text-gray-200 leading-relaxed hover:text-blue-500 active:text-blue-500" href="https://www.linkedin.com/in/edsoncostadev/">Edson Costa - Todos os direitos reservados</a>
      </div>
      <div>
        <a className="text-gray-200 leading-relaxed hover:text-blue-500 active:text-blue-500" href="">Política de Privacidade</a>
      </div>
    </footer>
  );
}
