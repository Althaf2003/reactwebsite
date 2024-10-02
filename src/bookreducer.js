
const Booklist = (state=[], action) =>{

    let data = Object.assign([], state);

    if( action.type==="addbook")
    {
        data.push( action.bookname );
    }

    if( action.type==="deletebook")
    {
        data.splice( action.bookindex, 1 );
    }

    return data;
}

export default Booklist;