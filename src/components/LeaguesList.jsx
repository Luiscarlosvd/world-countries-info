import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLeagueInfo } from '../redux/leagues/leaguesSlice';

const LeaguesList = () => {
  const League = useSelector(state => state.leagues)
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getLeagueInfo());
  }, [dispatch]);

  return (
    <div>
      <h1>{League.leagueTeams.name}</h1>
      <img src={League.leagueTeams.emblem} alt="League emblem image" />
    </div>
  )
}

export default LeaguesList;
