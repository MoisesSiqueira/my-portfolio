import type { Metadata } from "next"; // Mantenha a importação de Metadata
import { Poppins } from "next/font/google"; // Use Poppins como a fonte
import "./globals.scss"; // Importa o arquivo de estilos globais

const inter = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Defina o metadata
export const metadata: Metadata = {
  title: "Moisés Siqueira",
  description: "Moisés Siqueira Engenheiro de Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      {" "}
      {/* Mudei para 'pt-BR' conforme o idioma desejado */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
