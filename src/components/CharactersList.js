import Pagination from 'react-js-pagination';
import CharacterCard from './CharacterCard';
import paginationStyles from '../pages/Pagination.module.css';

function CharactersList(props) {
  return (
    <>
        
                {props.characters && props.characters.map(character => (
                    <CharacterCard 
                        character={character} 
                        key={character.id}
                    />
                ))}
        {props.totalItems > 20 && 
            <Pagination 
                activePage={props.page}
                itemsCountPerPage={20}
                totalItemsCount={props.totalItems}
                pageRangeDisplayed={3}
                onChange={props.handlePageChange}
                hideDisabled={true}
                prevPageText={'< Prev'}
                nextPageText={'Next >'}
                firstPageText={'<< First page'}
                lastPageText={'Last page >>'}
                innerClass={paginationStyles.pagination}
                linkClass={paginationStyles.link}
                activeLinkClass={paginationStyles['active-page']}
                linkClassFirst={paginationStyles['btn-first-page']}
                linkClassLast={paginationStyles['btn-last-page']}
                linkClassPrev={paginationStyles['btn-prev-page']}
                linkClassNext={paginationStyles['btn-next-page']}
            />
        }
    </>
  );
}

export default CharactersList;