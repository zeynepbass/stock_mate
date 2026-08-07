export function LoginDesign() {
  return (
    <section className="hidden md:flex md:col-span-5 lg:col-span-7 bg-black flex-col justify-between p-10 text-white">
      <div>
        <h2 className="text-2xl font-bold tracking-wide">
          STOK<span className="text-slate-400">MATE</span>
        </h2>
      </div>
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight uppercase">
          Stok
          <br />
          Kontrol
          <br />
          Altında.
        </h1>

        <div className="w-24 h-1 bg-white my-6"></div>

        <p className="text-lg text-gray-200 leading-relaxed">
          Ürün, depo stok hareketlerini tek panelden yönetin.
        </p>

        <p className=" text-gray-300 leading-relaxed">
          Kritik seviyeye düşen ürünler anında listenin başına yer gelir.
        </p>
      </div>
      <div></div>{" "}
    </section>
  );
}
