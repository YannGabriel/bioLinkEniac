import { ButtonGroup } from "../molecula/buttonGroup/buttonGroup"
import { LastProject } from "../molecula/lastProject/lastProject"
import { PortfolioButton } from "../molecula/portfolioButton/portfolioButton"


export const ButtonSection = () =>{
  return(
    <section className="ButtonSection w-[98%] m-auto">
      <PortfolioButton/>
      <div className="middlePageButtons flex pt-9 gap-10">
        <ButtonGroup/>
        <LastProject/>
        </div>
    </section>
  )
}