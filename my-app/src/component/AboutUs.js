import React from 'react';
import { Card, CardDeck} from "react-bootstrap";
import './AboutUS.css';
import Moon from '../img/Moon.jpg';


class AboutUS extends React.Component {
    render() {
        return (
            <>
            <h1>Our Team</h1>
            <p className='head'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                 standard dummy text ever since the 1500.</p>

            <div className='cardsGroup'>
           
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src='https://ca.slack-edge.com/TNGRRLUMA-U01RV9QC8HE-33fd0feba94e-512' alt='image'/>
                    <Card.Body>
                        <Card.Title className='textName'>Nooraldeen Khalaf</Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                         I have bachelor's degree in civil engineering  from
                         Hashemite university , I am very intersted to learn about web development.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src='https://ca.slack-edge.com/TNGRRLUMA-U01S9MYPXHC-be2591b8dd2a-512' alt='image'/>
                    <Card.Body>
                        <Card.Title className='textName'>Ayah Abo Dager</Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                         I have bachelor's degree in civil engineering  from
                         Hashemite university , I am very intersted to learn about web development.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src='https://ca.slack-edge.com/TNGRRLUMA-U01SAFNG4RX-62b6a4bf4e12-512' alt='image'/>
                    <Card.Body>
                        <Card.Title className='textName'>Omar D'yab</Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                         I have bachelor's degree in civil engineering  from
                         Hashemite university , I am very intersted to learn about web development.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src='https://ca.slack-edge.com/TNGRRLUMA-U01SAFN9HC1-4232d1b1630f-512' alt='image'/>
                    <Card.Body>
                        <Card.Title className='textName'>Khalil Ghanem </Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                         I have bachelor's degree in civil engineering  from
                         Hashemite university , I am very intersted to learn about web development.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
                <div className='lastTwo'>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src='https://ca.slack-edge.com/TNGRRLUMA-U01RY3TAP51-cdf2c102ee06-512' alt='image'/>
                    <Card.Body>
                        <Card.Title className='textName'>Abdullah Elian </Card.Title>
                        <Card.Title className='textJob'>Full Stack <br></br> Developer</Card.Title>
                        <Card.Text className='description'>
                         I have bachelor's degree in civil engineering  from
                         Hashemite university , I am very intersted to learn about web development.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='memberCard'>
                    {/* <Card.Img variant="top" className='member' src="https://static.toiimg.com/photo/msid-67586673/67586673.jpg?3918697" /> */}
                    <img className='member' src='https://ca.slack-edge.com/TNGRRLUMA-U01RH48KB7H-8f340a22e830-512' alt='image'/>
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