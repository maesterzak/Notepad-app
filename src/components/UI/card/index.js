import { Link } from 'react-router-dom';
import './styles.css'


function Card({note, color, category, created_date, id}){
    
    
    return(
        <>
            <div id={id} className='wrapper mb-3 mt-2'>
                <div className='child-1 p-2'>
                    <div>
                        <Link className='link' to={'/'}>{note}</Link>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <span className='text-muted'>{category}  {created_date}</span>
                    </div>
           
                </div>
                <div className={`child-2 ${color}`}>
                
                </div>

            </div>
        </>
    )
}
export default Card;