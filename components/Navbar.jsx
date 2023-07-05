import Link from "next/link"


const Navbar = () => {
    return(
        <>
            <ul className="navbar">
                <Link className="link" href="/phrases">Phrases</Link>
                <Link className="link" href="/addBook">Add Book</Link>
                <Link className="link" href="/addAuthor">Add Author</Link>
                <Link className="link" href="/bookList">Book List</Link>
                <Link className="link" href="/authorList">Author List</Link>
                {/*language=CSS*/}
                <style jsx global>
                    {`
                        .navbar {
                            font-size: 18px;
                            font-family: 'Courier New', Courier, monospace;
                            display: flex;
                            background-color: #ffffff;
                            justify-content: center;
                            padding: 20px;
                            margin: 10px;
                            border-radius: 10px;
                            gap: 10px;
                        }
                        
                        .link {
                            color: #000000;
                            text-decoration: none;
                            padding: 5px 10px;
                            border-radius: 5px;
                            margin: 10px;
                            margin-left: 5;
                        }
                        
                        .link:hover{
                            background-color: #2f95a5;
                        }
                    `}
                </style>
            </ul>
        </>
    )
}

export default Navbar