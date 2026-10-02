import ArandaazLogo from '../../assets/Arandaaz.webp'
import AscendLogo from '../../assets/Ascend.webp'
import BeaconhouseLogo from '../../assets/beaconhouse.jpg'
import ChamberLogo from '../../assets/chamber.jpg'
import EcoleanLogo from '../../assets/ecolean.jpg'
import FatimaLogo from '../../assets/fatima.webp'
import FbrLogo from '../../assets/FBR.webp'
import LumsLogo from '../../assets/lums.jpg'
import PandGLogo from '../../assets/PandG.png'
import PatoLogo from '../../assets/PATO.webp'
import ScarsdaleLogo from '../../assets/Scarsdale.webp'
import SecpLogo from '../../assets/SCEP.webp'
import TunisiaLogo from '../../assets/tunisia.webp'

export default function Partners() {
  const partnerLogos = [
    { name: 'P&G', src: PandGLogo },
    { name: 'LUMS', src: LumsLogo },
    { name: 'ECOlean', src: EcoleanLogo },
    { name: 'Fatima Group', src: FatimaLogo },
    { name: 'Beaconhouse', src: BeaconhouseLogo },
    { name: 'Arandaaz', src: ArandaazLogo },
    { name: 'Tunisia Bay Travel', src: TunisiaLogo },
    { name: 'Scarsdale International School', src: ScarsdaleLogo },
    { name: 'Ascend', src: AscendLogo },
  ]

  const affiliatedLogos = [
    { name: 'HCCI', src: ChamberLogo },
    { name: 'FBR Pakistan', src: FbrLogo },
    { name: 'Pakistan Association of Tour Operators', src: PatoLogo },
    { name: 'SECP', src: SecpLogo },
  ]

  return (
    <section className="py-10 bg-gray-50" aria-labelledby="partners-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="partners-heading" className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
           Our Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {partnerLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-24 w-full items-center justify-center rounded-lg border border-emerald-100 bg-white p-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-16 max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-lg p-8 text-center">
         <h2 id="partners-heading" className="mt-4 text-3xl mb-12 md:text-4xl font-bold text-slate-900">
          Proudly Affiliated With
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-4">
            {affiliatedLogos.map((logo) => (
              <div key={logo.name} className="flex h-24 w-full items-center justify-center bg-white p-4">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-16 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
