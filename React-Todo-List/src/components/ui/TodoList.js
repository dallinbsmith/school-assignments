import React from 'react';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {
    applyFilter,
    search
} from '../../services/filter';
import {
    Card,
    Button,
    CardImg,
    CardTitle,
    CardText,
    CardDeck,
    CardSubtitle,
    CardBody
} from 'reactstrap';



export default function TodoList(props) {
    const {
        list,
        filter,
        mode,
        query
    } = props.data;
    const {
        addNew,
        changeFilter,
        changeStatus,
        changeMode
    } = props.actions;
    const count = list.length;
    const items = search(applyFilter(list, filter), query);

    return ( <
        div className = "container" >
        <
        Button > launch missle < /Button> <
        div className = "row" >
        <
        div className = "todolist" >
        <
        Header {
            ...{
                addNew,
                mode,
                query
            }
        }
        /> <
        FilteredList {
            ...{
                items,
                changeStatus
            }
        }
        /> <
        Footer {
            ...{
                count,
                filter,
                changeFilter,
                mode,
                changeMode
            }
        }
        /> <
        /div> <
        div className = "todolist" >
        <
        Header {
            ...{
                addNew,
                mode,
                query
            }
        }
        /> <
        FilteredList {
            ...{
                items,
                changeStatus
            }
        }
        /> <
        Footer {
            ...{
                count,
                filter,
                changeFilter,
                mode,
                changeMode
            }
        }
        /> <
        /div> <
        div className = "todolist" >
        <
        Header {
            ...{
                addNew,
                mode,
                query
            }
        }
        /> <
        FilteredList {
            ...{
                items,
                changeStatus
            }
        }
        /> <
        Footer {
            ...{
                count,
                filter,
                changeFilter,
                mode,
                changeMode
            }
        }
        /> <
        /div> <
        div className = "todolist" >
        <
        Header {
            ...{
                addNew,
                mode,
                query
            }
        }
        /> <
        FilteredList {
            ...{
                items,
                changeStatus
            }
        }
        /> <
        Footer {
            ...{
                count,
                filter,
                changeFilter,
                mode,
                changeMode
            }
        }
        /> <
        /div> <
        /div> <
        Info {
            ...{
                mode
            }
        }
        /> <
        CardDeck >
        <
        Card >
        <
        CardBody >
        <
        CardTitle >
        <
        Header {
            ...{
                addNew,
                mode,
                query
            }
        }
        /> <
        /CardTitle> <
        FilteredList {
            ...{
                items,
                changeStatus
            }
        }
        /> <
        /CardBody> <
        /Card> <
        Card >
        <
        CardImg top width = "100%"
        src = "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt = "Card image cap" / >
        <
        CardBody >
        <
        CardTitle > Card title < /CardTitle> <
        CardSubtitle > Card subtitle < /CardSubtitle> <
        CardText > This card has supporting text below as a natural lead - in to additional content. < /CardText> <
        Button > Button < /Button> <
        /CardBody> <
        /Card> <
        Card >
        <
        CardImg top width = "100%"
        src = "https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
        alt = "Card image cap" / >
        <
        CardBody >
        <
        CardTitle > Card title < /CardTitle> <
        CardSubtitle > Card subtitle < /CardSubtitle> <
        CardText > This is a wider card with supporting text below as a natural lead - in to additional content.This card has even longer content than the first to show that equal height action. < /CardText> <
        Button > Button < /Button> <
        /CardBody> <
        /Card> <
        /CardDeck> <
        Footer {
            ...{
                count,
                filter,
                changeFilter,
                mode,
                changeMode
            }
        }
        /> <
        /div>
    );
}