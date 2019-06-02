import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Row, Col, Container, Spinner } from 'react-bootstrap';

import offersDetails from '../utilis/myOffers';

import './style.css';

class MyOffers extends Component {
  state = {
    offers: null,
  };

  componentDidMount() {
    // send the request to the backend to get offers (by member_id 'take it from local storage')
    // use `GET` : `/api/v1/my-offers/:memberId`
    // the response will be as { error: null, data: [ { // offer details } ] }
    // this.setState({ offers: result.data });
    this.setState({ offers: offersDetails });
  }

  statusClassName = status => {
    return `myoffers__card__status--${status}`;
  };

  render() {
    const { offers } = this.state;
    // eslint-disable-next-line react/prop-types
    const { history } = this.props;
    return (
      <Container>
        <h1 className="myoffers__container--title"> My Offers </h1>
        <Row>
          {offers ? (
            offers.map(item => {
              return (
                <Col xs={12} md={6} lg={4} key={item.id}>
                  <Card
                    className="myoffers__container__card"
                    key={item.id}
                    onClick={() => history.push(`/app/offers/${item.id}`)}
                  >
                    <Card.Header className="myoffers__container__card--header">
                      <Card.Text
                        className={`myoffers__card__status ${this.statusClassName(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </Card.Text>
                    </Card.Header>
                    <Card.Body className="myoffers__container__card__body">
                      <Card.Text className="myoffers__container__card__body--title">
                        {item.title}
                      </Card.Text>
                      <Card.Text className="myoffers__container__card__body--position">
                        {item.position}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Spinner animation="border" variant="info" />
          )}
        </Row>
      </Container>
    );
  }
}

export default withRouter(MyOffers);
