import React from 'react'
import { useSelector } from 'react-redux';
import '../App.css';

const BookComponents = () =>{
const selector = useSelector(state => state.avtorBook)
console.log(selector);
    return(
        <table className="table">
        <thead>
          <tr>
            <th>Kitoblar ro'yxati:</th>
          </tr>
        </thead>
        <tbody>
          {selector.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.avtor}: {e.kitob}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
}

export default BookComponents;