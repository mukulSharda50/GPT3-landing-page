import './links.css';

const Links = ({title, childLinks}) => (
    <div className='gpt3__footer-links'>
        <h5>{title}</h5>
        <ul>
            {
                childLinks.map( (l) => (
                    <li key={l.id} className='gpt3__footer-link-title'>{l.title}</li>
                ))
            }
        </ul>
    </div>
);

export default Links;