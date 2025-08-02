import Particles from '../app/ui/particles';
// import Galaxy from '@/app/ui/aurora';

export default function Background() {
    return (
        <div className="fixed inset-0 w-full h-full overflow-hidden">
            <Particles
                particleColors={['#007370']}
                particleCount={400}
                particleSpread={10}
                speed={0.3}
                particleBaseSize={150}
                moveParticlesOnHover={false}
                alphaParticles={true}
                disableRotation={true}
            />
        </div>
    );
}