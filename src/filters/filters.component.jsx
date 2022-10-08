import React from 'react'
import Slider from '../component/slider/range.component';
import './filters.style.css'

const Filters = ({ searchPokemon, types, stats, filterByType }) => {
    function capitalize(s) {
        return s[0].toUpperCase() + s.slice(1);
    }
    return (
        <div>
            <div className='filters'>
                <input type='search' onChange={(e) => searchPokemon(e)} className='search' placeholder='Name or Number'></input>
                <select onChange={(e) => filterByType(e)} name='Normal' id='normal' className='type' type='select'>
                    {types.map((type, key) => {
                        return <option type="checkbox" key={key} value={type}>{capitalize(type)}</option>

                    })}
                </select>
                <select className='gender'>
                    <option value=''>Male</option>
                    <option value=''>Female</option>
                    <option value=''>Genderless</option>
                </select>
                <select className='stats'>
                    {stats.map((stat, key) => {
                        return (
                            <>
                                <option key={key} value={stat}>{capitalize(stat)}</option> <Slider></Slider>
                            </>
                        )
                    })}
                </select>
            </div>

        </div>
    )
}

export default Filters