import userImage from "../../assets/images/userImage.png"

export const UserHeader = () => {
  return (
    <div className=" bg-lightBrown flex p-normal rounded-normal w-[98%] m-auto
     gap-normal">
      <img 
      className="userImage h-[4rem] rounded-[0.75rem]"
      src= {userImage}
       alt="UserImage" />

       <div className="headerTextContainer self-center">
        <h1 className="userName text-darkBlue font-extrabold text-xl">Yann Gabriel</h1>
        <h2 className="userProfission text-darkBrown font-medium text-xs pl-[0.25rem]">FullStack Developer</h2>
       </div>
    </div>
  )
}