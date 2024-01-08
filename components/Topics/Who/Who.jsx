import Image from "next/image"
import logofooter from "@public/logofooter.png"

const Who = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image width={500} height={500} src={logofooter} alt="Logo Footer"/>
        <div>
          <h1 className="text-5xl font-bold">Qui sommes-nous ?</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
      </div>
    </div>
  )
}

export default Who