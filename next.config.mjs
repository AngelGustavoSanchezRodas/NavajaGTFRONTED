/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Eliminamos por completo la configuración manual de Turbopack
  // para evitar fugas de memoria y bloqueos de CPU.
};

export default nextConfig;