import { Link } from 'react-router-dom';
import styles from './CharacterCard.module.css';


function CharacterCard({ character }) {
  return (
    <Link to={`/characters/${character.id}`} end="true">
        <div className={styles['character-card']}>
            <div className={styles.logo}>
                <img src={character.image} alt={`${character.name}`} className={styles['character-photo']} />
            </div>
            <div className={styles['character-card-info']}>
                <div className={styles['character-name']}>{character.name}</div>
                <div>Species : {character.species}</div>
                <div>Gender : {character.gender}</div>
                <div>Origin : {character.origin.name}</div>
                <div>Status : {character.status}</div>
                <div className={styles['character-card-footer']}>
                </div>
            </div>
        </div>
    </Link>
  );
}

export default CharacterCard;