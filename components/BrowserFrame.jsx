// Moldura de navegador para prints e vídeos do app: barra com o endereço do
// app e o conteúdo logo abaixo. `className` traz largura, sombra e margens.
export default function BrowserFrame({ children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-panel border border-slate-200 bg-white ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <div className="ml-2 flex-1">
          <div className="mx-auto w-fit rounded border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] text-slate-600">
            app.numin.com.br
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
