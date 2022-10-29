import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import Footer from './components/Footer';
import back1  from './assets/images/_Avatar share button (1).png'
import back from './assets/images/_Avatar share button.png'

function App() {
    
    const data = {
      name: 'Annett Black',
      image: "http://github.com/lolade-olatunji.png",
      links: [
        {
          name: "Twitter Link",
          link:"http://twitter.com/lolade",
          id:"twitter",
        },
        {
          name: "Zuri Team",
          link:"https://training.zuri.team/",
          id: "btn__zuri",
        },
        {
          name: "Zuri Books",
          link:" http://books.zuri.team",
          id: "books",
        },
        {
          name: "Python Books",
          link:"https://books.zuri.team",
          id: "book__python",
        },
        {
          name: "Background Check for Coders",
          link:"https://background.zuri.team",
          id: "pitch",
        },
        {
          name: "Design Books",
          link:"https://books.zuri.team/design-rules",
          id: "book_design",
        }
      ]
    }
  
    return <div className='p-m-4' >
        <div className='content-wrap'>

       <div className='p-d-flex p-jc-center p-ai-center p-flex-column'>
          <Avatar id='profile_img' image={data.image} size="xlarge" shape="circle"></Avatar>
      <h1 className='p-m-2'>{data.name}</h1>
      </div>

      <div className='p-d-flex p-jc-center p-ai-center'>
       <div className='p-d-flex p-flex-column'>
      {data.links.map((link) => (<button className='p-m-2 p-p-3'>{link.name}</button>))}
      </div>
        </div>
        <div className="back">
          <img className="back1" src={back} alt="back" />
          <img className="back2" src={back1} alt="back" />
        </div>
        </div>
        
        <Footer />
    </div>;
}


export default App;
