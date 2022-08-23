import React, { useState } from 'react';

import '../App.css';

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';

//Adding antd modules and style
import { Button, Modal, Form, Input,} from 'antd';
import "antd/dist/antd.css";


class Notification extends React.Component {

  
  render(){
   //popup and form code
    const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();
        return (
          <Modal
            visible={visible}
            title="Acccepts"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
              form
                .validateFields()
                .then((values) => {
                  form.resetFields();
                  onCreate(values);
                })
                .catch((info) => {
                  console.log('Validate Failed:', info);
                });
            }}
          >


            <table className='width size'>
                <tr>
                    <td>AATHAV</td>
                    <td><button className='btnYellow'>Details</button></td>
                    <td><button className='btnRed'>Delete</button></td>
                </tr>

                <tr>
                    <td>DILSHAN</td>
                    <td><button className='btnYellow'>Details</button></td>
                    <td><button className='btnRed'>Delete</button></td>
                </tr>

                <tr>
                    <td>KAATHU</td>
                    <td><button className='btnYellow'>Details</button></td>
                    <td><button className='btnRed'>Delete</button></td>
                </tr>

                <tr>
                    <td>ABI</td>
                    <td><button className='btnYellow'>Details</button></td>
                    <td><button className='btnRed'>Delete</button></td>
                </tr>
                
            </table>

          </Modal>
        );
      };
      
      const CollectionsPage = () => {
        const [visible, setVisible] = useState(false);
      
        const onCreate = (values) => {
          console.log('Received values of form: ', values);
          setVisible(false);
        };
      
        return (
          <div>
          
              
              <i onClick={() => {
                setVisible(true);
              }}
            >
            <a className="nav-link nav-icon" href="/" data-bs-toggle="dropdown">
              <i className="bi bi-bell theme-text-orange"></i>
              <span className="badge theme-bg-blue badge-number">4</span>
            </a>
            </i>

            <CollectionCreateForm
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
          </div>
        );
      };
  return (
    <div className="MainDiv">

      
      <div className="container">
          
      <CollectionsPage />
        </div>
      </div>
  );
}

}
export default Notification;