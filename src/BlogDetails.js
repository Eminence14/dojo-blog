import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const [data, pending, error] = useFetch(`http://localhost:8000/blogs/${id}`)
    const hist = useHistory()
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE',
        }).then(() => {
            hist.push('/')
        })
    }
    const handleBack = () => {
        hist.go(-1)
    }

    return (
        <div className="blog-details" >
            <div className="bars" onClick={handleBack}>
                <span className="bar1"></span>
                <span className="bar2"></span>
            </div>
            {pending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>written and edited by {data.author}</p>
                    <div>{data.body}</div>
                    <button className="delete-blog" onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;