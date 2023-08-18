import React from 'react';
import { useState } from 'react';
import styled from './Searchbar.module.css'

export const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
   
    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(query);
        setQuery('');
    }

    const handleChange = (e) => {
        setQuery(e.target.value);
    }
    
    return (
        <header className={styled.searchbar}>
            <form onSubmit={handleSubmit} className={styled.form}>
                <button type="submit" className={styled.button}>
                    <span className={styled['button-label']}>Search</span>
                </button>

                <input
                    className={styled.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={handleChange}
                />
            </form>
        </header>
    )
}