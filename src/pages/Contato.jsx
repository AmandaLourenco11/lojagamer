
const Contato = () => {
  return (
    <main className="grow flex items-center justify-center px-4">
      <div className="bg-black p-8 sm:p-10 rounded-[20px] w-full max-w-md shadow-2xl border-2 border-[#a204fd]">

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#a204fd] text-center mb-6 uppercase tracking-wider">
          Fale Conosco
        </h2>

        <p className="text-gray-300 text-center mb-6">
          Entre em contato conosco através do e-mail:
        </p>

        <a
          href="mailto:suporte@lojagamer.com"
          className="block text-center text-[#a204fd] font-semibold hover:underline transition-all"
        >
          suporte@lojagamer.com
        </a>

      </div>
    </main>
  )
}

export default Contato
