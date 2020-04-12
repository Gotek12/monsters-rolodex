import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component';

// children is beetwen <tag></tag>

export const CardList = (props) => {
    return (
        
        <div className = 'card-list'>
        {
          // key is used to identyfi which el is changing and what should be updated, help to rerender only one el not everything
          props.monsters.map((e) => {
            return <Card key = {e.id}  monster = { e } />
          })
        }
        </div>
    );
};