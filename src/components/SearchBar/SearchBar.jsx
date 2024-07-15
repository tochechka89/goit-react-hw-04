
import { useState } from "react";

import css from './SearchBar.module.css';
import toast, { Toaster } from "react-hot-toast";

export default function SearchBox({ onSubmit }) {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (searchValue.trim() === '') {
            toast.error('Please enter a search term', {
                position: 'center-top'
            });
            return;
        }
        onSubmit(searchValue);
    };

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit} className={css.form} >
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={searchValue}
                    className={css.input}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="submit" className={css.button}>Search</button>
            </form>
             <Toaster />
        </header>
    );
}