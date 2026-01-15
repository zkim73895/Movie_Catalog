import { useEffect, useState } from "react";

const Search = ({ onSearch }) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        const timeout = setTimeout(() => {
            onSearch(value)
        }, 400)

        return () => clearTimeout(timeout)
    }, [value, onSearch]);

    return (
        <div className="search">
            <input
                type="text"
                className="search__input"
                placeholder="Поиск по названию..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default Search