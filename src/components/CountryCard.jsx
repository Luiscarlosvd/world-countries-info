const CountryCard = ({ name, flag }) => {
  return (
    <div className="flex flex-col-reverse bg-blue-700 p-4 items-center h-40 border justify-end">
      <h1 className="text-white text-lato-400">{name}</h1>
      <img className="w-28 h-auto" src={flag} alt="Country image flag" />
    </div>
  )
}

export default CountryCard;
