
import imageText from "../../assets/images/userImage.png"

export const LastProject = () =>{

  const textConfig = " font-bold font-belleza text-lightBlue flex center justify-center text-xl"

  return(
    <div className="lastProject w-[40%] bg-darkBlue rounded-normal">
      <h3 className={`textTop ${textConfig}`}>
        Ultimo
        </h3>
      <img 
      className="projectImage rounded-normal w-[90%] flex center justify-center m-auto"
      src={imageText}
      alt=""
      />

      <h3 className={`textBottom ${textConfig}`}>
        Projeto
      </h3>
    </div>
  )
}