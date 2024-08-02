import { getShipment, getVAT } from '../../../pages/product/EachProduct'
import { useLanguage } from '../../../context/language-provider'

const PdpPrice = ({ blok, ...restProps }) => {
  const product = restProps.product
  const { currentLanguage } = useLanguage()

  return (
    <div className="mb-8 flex flex-col">
      <div className="mb-1 flex flex-row">
        <div className="text-4xl text-aldiBlue4 font-aldiCondensed font-bold">{product.price.effectiveValue}</div>
        <div>*</div>
      </div>
      <div className="flex flex-row text-xs">
        <div className="text-aldiGray3">{getVAT(currentLanguage, true)}</div>
        <div className="text-aldiBlue1 ml-2">{getShipment(currentLanguage)}</div>
      </div>
    </div>
  )
}

export default PdpPrice
