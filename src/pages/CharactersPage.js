import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchBar from '../components/UI/SearchBar';
import Accordion from '../components/Accordion/Accordion';
import FilterContext from '../context/FilterContext';
import CharactersList from '../components/CharactersList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import FilterSettings from '../components/FilterSettings/FilterSettings';
import API_URL from '../helpers/apiUrl';
import styles from './CharactersPage.module.css';

function CharactersPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);

    const [loading, setLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    const [pagesInfo, setPagesInfo] = useState({ pages: 1, count: 0 });
    const [sortOrder, setSortOrder] = useState('ascending');

    const filter = {
        currentPage: Number(queryParams.get('page')) || 1, 
        name: queryParams.get('name') || '',
        gender: queryParams.get('gender') || '',
        status: queryParams.get('status') || '',
        species: queryParams.get('species') || ''
    };

    useEffect(() => {
        setLoading(true);
        setCharacters(null);
        setPagesInfo({ pages: 1, count: 0 });

        document.title = `Characters | Page ${filter.currentPage}`;

        async function fetchCharacters() {
            const url = `${API_URL}character/${location.search}`;
            const response = await fetch(url);
            const data = await response.json();

            if (data.error) {
                console.error(data.error);
                setLoading(false);
            } else if (data.results) {
                const sortedResults = sortCharacters(data.results, sortOrder);
                setCharacters(sortedResults);
                setPagesInfo({ 
                    pages: +data.info.pages, 
                    count: +data.info.count 
                });
            }
            setLoading(false);
        }

        fetchCharacters();
    }, [location, sortOrder]);

    function sortCharacters(characters, order) {
        return characters.sort((a, b) => {
            if (order === 'ascending') {
                return a.id - b.id;
            } else {
                return b.id - a.id;
            }
        });
    }

    function handlePageChange(pageNumber) {
        queryParams.set('page', pageNumber);
        navigate({ search: queryParams.toString() });

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    function handleSearch(input) {
        queryParams.set('page', 1);
        queryParams.set('name', input);
        navigate({ search: queryParams.toString() });
    }

    function handleFilters(filterName, value) {
        queryParams.set(filterName, value);
        queryParams.set('page', 1);
        navigate({ search: queryParams.toString() });
    }

    function handleResetFilters(paramName) {
        if (paramName) {
            queryParams.delete(paramName);
        } else {
            queryParams.delete('gender');
            queryParams.delete('status');
            queryParams.delete('species');
        }
        
        queryParams.set('page', 1);
        navigate({ search: queryParams.toString() });
    }

    function handleSortOrderChange(event) {
        setSortOrder(event.target.value);
    }

    return (
        <FilterContext.Provider value={{ filter, handleFilters }}>
            <div className='wrapper'>
                <SearchBar search={handleSearch} />
                {!loading && (filter.name || filter.gender || filter.species || filter.status) &&
                    <FilterSettings 
                        name={filter.name}
                        gender={filter.gender}
                        species={filter.species}
                        status={filter.status}
                        resetFilters={handleResetFilters}
                    />
                }
                <div className={styles['main-content']}>
                    <Accordion resetFilters={handleResetFilters} />
                    <div className={styles['right-side']}>
                        <div className="sorting-sort">
                            <label htmlFor="sortOrder">Sort by ID:</label>
                            <select id="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                        {loading && <LoadingSpinner />}
                        <CharactersList 
                            characters={characters}
                            page={filter.currentPage}
                            totalItems={pagesInfo.count}
                            handlePageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </FilterContext.Provider>
    );
}

export default CharactersPage;
