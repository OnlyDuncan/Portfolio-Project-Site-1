import { Col, Row, Container } from 'reactstrap';
import logo from '../app/assets/img/Portfolio_Project_Logo.png';
import sakePageImage1 from '../app/assets/img/Sake_Page_Image_1.png';
import eventPageImage1 from '../app/assets/img/Event_Page_Image_1.png';
import shopPageImage1 from '../app/assets/img/Shop_Page_Image_1.png';
import aboutPageImage from '../app/assets/img/About_Page_Image.png';

const HomePage = () => {
    return (
        <Container fluid style={{ paddingLeft: 0, paddingRight: 0, overflow: "hidden" }}>
            <div id = "HomePage" style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#9b9fda", height: 500 }}>
                <Row>
                    <Col>
                        <img src={logo} alt="Logo" className="homepage-logo" />
                    </Col>
                </Row>
            </div>
            <div id = "SakePage" style={{ backgroundColor: "#b8e0dc", paddingTop: 50, paddingBottom: 200 }}>
                <h2 className = "subheader" style={{ paddingBottom: 100 }}>Our Sake Selection</h2>
                <Container fluid style={{ display: "flex" }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={sakePageImage1} alt="Sake Page Image 1" className = "sakepageimages" />
                            <br />
                            <div className = "centered lust" style={{ color: "gray" }}>Sweet Dreams</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={sakePageImage1} alt="Sake Page Image 1" className = "sakepageimages" />
                            <br />
                            <div className = "centered lust" style={{ color: "gray" }}>Strange Journeys</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={sakePageImage1} alt="Sake Page Image 1" className="sakepageimages" />
                            <br />
                            <div className = "centered lust" style={{ color: "gray" }}>Dark Nightmares</div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id = "EventsPage" style={{ backgroundColor: "#9ec2e0", paddingTop: 50, paddingBottom: 200 }}>
                <h2 className = "subheader" style={{ paddingBottom: 100 }}>Upcoming Events</h2>
                <Container fluid style={{ display: "flex" }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs={{ size: '12', order: 0 }} md='6' style={{ marginBottom: "40px" }}>
                            <div className="lust centered" style={{ color: "gray" }}>Dream Film Festival</div>
                            <div className="poppins centered" style={{ color: "gray" }}>Event Description</div>
                        </Col>
                        <Col xs={{ size: '12', order: 1 }} md='6'>
                            <img src={eventPageImage1} alt="Event Page Image 1" className="eventpageimages" />
                        </Col>
                        <br />
                        <Col xs={{ size: '12', order: 2 }} md='6' style={{ marginBottom: "40px" }}>
                            <div className="lust centered" style={{ color: "gray" }}>Collective Unconcious Art Show</div>
                            <div className="poppins centered" style={{ color: "gray" }}>Event Description</div>
                        </Col>
                        <Col xs={{ size: '12', order: 3 }} md='6'>
                            <img src={eventPageImage1} alt="Event Page Image 1" className="eventpageimages" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id = "ShopPage" style={{ backgroundColor: "#e6c1dd", paddingTop: 50, paddingBottom: 200 }}>
                <h2 className = "subheader" style={{ paddingBottom: 100 }}>Shop</h2>
                <Container fluid style={{ display: "flex" }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={shopPageImage1} alt="Shop Page Image 1" className="shoppageimages" />
                            <br />
                            <div className = "centered lust" style={{ color: "gray" }}>T-Shirts</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={shopPageImage1} alt="Shop Page Image 1" className="shoppageimages" />
                            <br />
                            <div className = "centered lust" style={{ color: "gray" }}>Sake Bottles</div>
                        </Col>
                        <Col xs='12' md='4' style={{ marginBottom: "40px" }}>
                            <img src={shopPageImage1} alt="Shop Page Image 1" className="shoppageimages" />
                            <br />
                            <div className = "centered lust" style={{ color: "gray" }}>Shot Glasses</div>
                        </Col>
                        <Col xs='12'>
                            <div className = "centered poppins" style={{ color: "gray" }}>Disclaimer: Can be bought at location or by following link to online store.</div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div id = "AboutPage" style={{ backgroundColor: "#61419f", paddingTop: 50, paddingBottom: 700, height: 500 }}>
                <h2 className = "subheader" style={{ paddingBottom: 100 }}>About Us</h2>
                <Container fluid style={{ display: 'flex' }}>
                    <Row style={{ margin: "auto" }}>
                        <Col xs='12' md='6'>
                            <img src={aboutPageImage} alt="About Page Image" className="aboutpageimages" />
                        </Col>
                        <Col >
                            <p className="poppins" style={{ color: "white", textAlign: 'center', marginLeft: "40px", marginRight: "40px" }}>
                                Based in Marfa, Texas, Dream Eater Sake is dedicated to creating the most unique and memorable mixological experiences available.
                                Inspired by the unconcious mind, each flavor is a one of a kind multi-sensory experience that is guaranteed to bring back memories of your most peaceful, pleasureable, and terrifying oneironautical journeys.
                                Our sake is a dream come true.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Container>
    );
};

export default HomePage;