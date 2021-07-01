import React from 'react';
import { Card} from "react-bootstrap";
import './AboutUS.css';
import abd from '../aboutusphotos/abd.jpg'
import omar from '../aboutusphotos/omar1.png'
import aya from '../aboutusphotos/aya.png'
import khalil from '../aboutusphotos/khalili.png'
import noor from '../aboutusphotos/noor.png'
import nura from '../aboutusphotos/nura.jpg'
class AboutUS extends React.Component {
    render() {
        return (
            <>
            <h1 style={{ marginTop: '3%'}} >About US
            </h1>
            <p className='head' style ={{fontSize: '20px' , marginTop: '3%'}} >Capture-It is a website for talented Photographers, offering them a platform for sharing and storing photos with photographers</p>
                 <hr></hr>
                 {/* <h2>Our Team</h2> */}
            <p className='head'></p>
            <div style={{display:"flex"}} className='cardsGroup'>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src={noor} alt='image1'/>
                    <Card.Body>
                        <Card.Title className='textName'>Nooraldeen Khalaf</Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                        have a bachelor's degree in civil engineering from  Hashemite University, and has a passion to be a professional in the tech field.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src={aya} alt='image1'/>
                    <Card.Body>
                        <Card.Title className='textName'>Ayah Abo Dager</Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                        have a bachelor’s degree in architectural engineering from Al al-Bayt University, decided to shift her career to be a full stack developer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src={omar} alt='image2'/>
                    <Card.Body>
                        <Card.Title className='textName'>Omar D'yab</Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                         have a Master's degree in Computer science, intersted in computer networks, machine learning and web development. 
                         </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src={khalil} alt='image3'/>
                    <Card.Body>
                        <Card.Title className='textName'>Khalil Ghanem </Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                        hold a bachelor's in Software Engineering from Zarqa university, passionate about learning new technologies and skills, he is a great developer.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
                <div className='lastTwo'>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src={abd} alt='image3'/>
                    <Card.Body>
                        <Card.Title className='textName'>Abdullah Elian </Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                        hold a bachelor's degree in computer science from Jordanian university, have a passion for programming, so now he's a web development student at ASAC.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src={nura} alt='image4'/>
                    <Card.Body>
                        <Card.Title className='textName'>Nura Tabanjeh</Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                         I have bachelor's degree in civil engineering  from
                         Hashemite university , I am very intersted to learn about web development.
                        </Card.Text>
                    </Card.Body>
                </Card>
               </div>
            </>
        )
    }
}
export default AboutUS;