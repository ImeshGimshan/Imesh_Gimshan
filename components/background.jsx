import Particles from '../app/ui/particles';

export default function Background() {
    return (
        <div className='bg-black fixed top-0 left-0 w-screen h-screen -z-10 pointer-events-none'>
            <Particles
                particleColors={['#00b7bb']}
                particleCount={700}
                particleSpread={7.5}
                speed={0.05}
                particleBaseSize={175}
                moveParticlesOnHover={true}
                alphaParticles={true}
                disableRotation={false}
            />
        </div>
    );
    }