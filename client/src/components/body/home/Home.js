import React, { Component } from 'react'
//import './home.css'
import ReactTable from "react-table-6"; 
import api from '../profile/api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'


const Wrapper = styled.div`
  font-family: arial;
  font-size: 24px;
  margin: 40px;
  width: 950px;
  height: 200px;
  outline: dashed 1px black;
  /* Setup */
  position: relative;

`
const Center = styled.div`
    border: 5px solid;
    text-align: center;
`


class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    
    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { movies, isLoading } = this.state
        console.log('TCL: MoviesList -> render -> movies', movies)

        const columns = [
            
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: 'Year',
                accessor: 'year',
                filterable: true,
            },
        ]

        let showTable = true
        if (!movies.length) {
            showTable = false
        }

        return (    
        
           
               
            <Wrapper>
            <Center>
            Search Movie Database
                {showTable && (
                    <ReactTable
                        data={movies}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                       
                    />
                )}
                </Center>
            </Wrapper>
            
        )
    }
}

export default MoviesList