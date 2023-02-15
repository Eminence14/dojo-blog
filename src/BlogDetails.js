import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const [data, pending, error] = useFetch(`http://localhost:8000/blogs/${id}`)
    return (
        <div className="blog-details" >
            {pending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <article>
                    <h2>{data.title}</h2>
                    <p>written and edited by {data.author}</p>
                    <div>{data.body}</div>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;