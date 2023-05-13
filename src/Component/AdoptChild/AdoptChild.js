import React from 'react'
import style from './AdoptChild.module.css'
import {useNavigate} from 'react-router-dom'


export default function AdoptChild() {
    const data1=[{
        id: 1, 
        name:'Rohan',
        
        imageSrc: 'https://www.worldvision.in/ChildPhotos/Web/217095/1287_20220303_121618.jpg',
       
    },
    ]
    const data2=[
        {
        id: 2,
        name:'shreya',
        imageSrc:'https://www.worldvision.in/ChildPhotos/Web/213322/2078_20220603_131620.jpg',
    },
    
    ]
    const data3=[
        {
        id: 3,
        name:'Sohan',
        imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9HcIcKohqWOzdaofpaccuugKmdk9lSBa3Q&usqp=CAU',
        }
    
    ]
    const data4=[
        {
        id: 3,
        name:'Rohit',
        imageSrc:'https://www.worldvision.in/ChildPhotos/Web/217099/0977_20211111_123302.jpg',
        },
    ]
   
    
  
     
const navigate=useNavigate()
function handleClick(){
    alert('You can adopt Rohan')
}
function handleClick1(){
    alert('You can adopt Shreya')
}
function handleClick2(){
    alert('You can adopt Sohan')
}
function handleClick3(){
    alert('You can adopt Rohit')
}

  
    return (
        <div className={style.Container} >
            <div className={style.first}>
            {data1.map((ele) => <div key={ele.id}><img src={ele.imageSrc} alt={`Image ${ele.id}`} style={{ width: '120%', height: '40vh' }} />
                <p style={{margin:'3rem',color:'red'}} >{ele.name}</p><p><button  className={style.button3}onClick={()=>handleClick(navigate('/Rohan'))}>Adopt</button></p>
                 </div>)}
                 </div>   

       
        {data2.map((ele) => <div key={ele.id}><img src={ele.imageSrc} alt={`Image ${ele.id}`} style={{ width: '120%', height: '40vh' }} />
        <p style={{margin:'3rem',color:'red'}}>{ele.name}</p><p><button  className={style.button3}onClick={()=>handleClick1(navigate('/Shreya'))}>Adopt</button></p>
                 </div>)}

         {data3.map((ele) => <div key={ele.id}><img src={ele.imageSrc} alt={`Image ${ele.id}`} style={{ width: '120%', height: '40vh' }} />
        <p style={{margin:'3rem',color:'red'}}>{ele.name}</p><p><button  className={style.button3} onClick={()=>handleClick2(navigate('/Sohan'))}>Adopt</button></p>
                 </div>)}

                 {data4.map((ele) => <div key={ele.id}><img src={ele.imageSrc} alt={`Image ${ele.id}`} style={{ width: '120%', height: '40vh' }} />
        <p style={{margin:'3rem',color:'red'}}>{ele.name}</p><p><button className={style.button3}  onClick={()=>handleClick3(navigate('/Rohit'))}>Adopt</button></p>
                 </div>)}
                

         </div>
    );
}