import ReactDOM from 'react-dom';
import React from 'react';
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd';
import { Card, Col, Row,Modal, Button } from 'antd';
import 'antd/dist/antd.css';
const confirm = Modal.confirm;

function showConfirm() {
  confirm({
    title: 'Do you Want to delete these items?',
    content: 'Some descriptions',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}

function showDeleteConfirm() {
  confirm({
    title: 'Are you sure delete this task?',
    content: 'Some descriptions',
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
}


class App extends React.Component {
  render() {
    return (
        <div>
          <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
          </Row>
        </div>
        <div>
          <Button onClick={showConfirm}>
            Confirm
          </Button>
          <Button onClick={showDeleteConfirm} type="dashed">
            Delete
          </Button>
        </div>

        </div>



    );
  }
}

ReactDOM.render((
  <LocaleProvider locale={enUS}>

  <App/>
  </LocaleProvider>
), document.getElementById('root'));
