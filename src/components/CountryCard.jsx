const CountryCard = ({ name, flag }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={flag} alt="Country image flag" />
    </div>
  )
}

export default CountryCard;
