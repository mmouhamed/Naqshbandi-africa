'use client';
import { useRouter } from 'next/navigation';
import { MeditationRoom } from '@/components/gateway/meditation-room';

export default function GatewayPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <h1 className="text-4xl md:text-6xl font-light mb-6">Naqshbandi Africa</h1>
      <p className="text-lg md:text-2xl mb-8 text-center max-w-xl">
        Une porte vers la lumière de la Tariqa Naqshbandiyya, un lien vivant avec la sagesse des maîtres et l'amour du Prophète ﷺ.
      </p>
      <MeditationRoom onEnter={() => router.push('/fr')} />
    </div>
  );
} 