import React, { useEffect, useState } from 'react';
import MovieArr from './variables';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function Cart(val, index) {
    const [count, setCount] = useState(0);
    var IncLike = ()=> {
        setCount(count+1);
    }
    return(
        <>
            <div key={index}>
                <div className="movie_card" id="bright">
                    <div className="info_section">
                        <div className="movie_header">
                            <img className="locandina" src={val.url} alt="image1"/>
                            <h1>{val.title}</h1>
                            <h4>{val.platform}</h4>
                            <span className="minutes">{val.minutes}</span>
                            <p className="type">{val.type}</p>
                        </div>
                        <div className="movie_desc">
                            <p className="text">
                                {val.description}
                            </p>
                        </div>
                        <div className="movie_socials" >
                            <ul>
                                <li><i className="fa fa-thumbs-up fa-lg" onClick={IncLike}></i>{count}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="blur_back bright_back"></div>
                </div>
            </div>
        </>
    )
}

function Error() {
    return (
        <h1>No Data Available.</h1>
    )
}

function CartGallery() {
    //useCustomHook(count);
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState(MovieArr);
    const [count, setCount] = useState(0);
    const [sortname, setSortname] = useState('');
    var IncLike = ()=> {
        setCount(count+1);
    }

    const findRes=(e)=>{
        // let findVal = e.target.value;
        // let result = searchResult.filter((item)=> {
        //     return Object.keys(item).some(key =>{
        //         console.log('Key',item[key].toLowerCase().includes(findVal.toLowerCase()))
        //         item[key].toLowerCase().includes(findVal.toLowerCase())
        //     }
        //             )
        //         }
        // )
        // setSearchResult(result);
        // console.log(result);

        setSearch(e.target.value);

    }

    useEffect(()=> {
        setSearchResult(MovieArr);
        const result = MovieArr.filter((item)=> {
                return Object.keys(item).some(key =>
                    //console.log('Item', item[key]);
                    //console.log('Key', key)
                    item[key].toLowerCase().includes(search.toLowerCase())

                )
            }
        );
        setSearchResult(result);
    }, [search])

    const sortValue = (e)=> {
        console.log(e.target.value);
        setSortname(e.target.value);
        if(e.target.value === 'title') {
            searchResult.sort((a,b)=> {return a['title'] < b['title']?1:-1; })
        }else if(e.target.value === 'platform') {
            searchResult.sort((a,b)=> {return a['platform'] < b['platform']?-1:1; })
        }else if(e.target.value === 'type') {
            searchResult.sort((a,b)=> {return a['type'] < b['type']?-1:1; })
        }

    }

    return (
        <>
            <div className="search-container">
                <Input placeholder="Search by any field" value={search} onChange={(e)=>findRes(e)} inputProps={{ 'aria-label': 'description' }} />
                <Button variant="outlined" color="primary" style={{marginLeft:'9px'}}>
                    Search
                </Button>
                <div style={{ marginLeft: '17px'}}>

                    Sort By: <Select value={sortname} onChange={sortValue}>
                    <MenuItem value='title'>Title</MenuItem>
                    <MenuItem value='platform'>Platform</MenuItem>
                    <MenuItem value='type'>Type</MenuItem>
                </Select>
                </div>
            </div>
            {
                searchResult.map((val, index)=> (
                    <div key={index}>
                        <div className="movie_card" id="bright">
                            <div className="info_section">
                                <div className="movie_header">
                                    <img className="locandina" src={val.url} alt="image1"/>
                                    <h1 style={{textAlign:'inherit'}}>{val.title}</h1>
                                    <h4>{val.platform}</h4>
                                    <span>{val.minutes}</span>
                                    <p className="type">{val.type}</p>
                                </div>
                                <div className="movie_desc">
                                    <p className="text">
                                        {val.description}
                                    </p>
                                </div>
                                <div className="movie_socials" >
                                    <ul>
                                        <li><i className="fa fa-thumbs-up fa-lg" onClick={IncLike}></i>{count}</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blur_back bright_back"></div>
                        </div>
                    </div>
                ))
            }
            {/* {
                searchResult.length>0?searchResult.map((val, index)=> {
                    <div key={index}>
                        <div className="movie_card" id="bright">
                        <div className="info_section">
                            <div className="movie_header">
                            <img className="locandina" src={val.url} alt="image1"/>
                            <h1>{val.title}</h1>
                            <h4>{val.platform}</h4>
                            <span className="minutes">{val.minutes}</span>
                            <p className="type">{val.type}</p>
                            </div>
                            <div className="movie_desc">
                            <p className="text">
                                {val.description}
                            </p>
                            </div>
                            <div className="movie_socials" >
                            <ul>
                                <li><i className="fa fa-thumbs-up fa-lg" onClick={IncLike}></i>{count}</li>
                            </ul>
                            </div>
                        </div>
                        <div className="blur_back bright_back"></div>
                        </div>
                    </div>
                }):<Error/>
            } */}
        </>

    )
}

export default CartGallery;