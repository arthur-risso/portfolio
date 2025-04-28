import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Olá, eu sou o Arthur!</h1>
          <p className="text-xl mb-8">
            Desenvolvedor Front-end apaixonado por tecnologia.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-semibold mb-6">Meus Projetos</h2>
          {/* Adicione aqui os links para os seus projetos */}
          <ul>
            <li className="mb-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Projeto 1
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                Projeto 2
              </a>
            </li>
            {/* Continue listando seus projetos */}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
