import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('victor')
    const [pending, setPending] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setPending(true)
        const blog = { title, body, author };
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('blog added')
                setPending(false)
            })
        }, 1000);

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            {pending && <div>Loading...</div>}
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="victor">victor</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!pending && <button>Add blog</button>}
                {pending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}

export default Create;