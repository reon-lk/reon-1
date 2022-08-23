import React, { useState } from 'react';

import '../App.css';

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';

// form and modal modules
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal
} from 'antd';
import "antd/dist/antd.css";
import { QuestionCircleOutlined } from '@ant-design/icons';

// const Location = [
//   { label: "Kopay", value: 1 },
//   { label: "Inuvil", value: 2 },
//   { label: "Jaffna", value: 3 },
//   { label: "Nalloor", value: 4 },
//   { label: "Maanippai", value: 5 },
//   { label: "Maathakal", value: 6 }
// ];

const Location = (
  <Form.Item name="Location" noStyle>
    <Select
      style={{
        width: 100,
      }}
    >
      <Option value="Kopay">Kopay</Option>
      <Option value="Inuvil">Inuvil</Option>
      <Option value="Jaffna">Jaffna</Option>
      <Option value="Nalloor">Nalloor</Option>
      <Option value="Maanippai">Maanippai</Option>
      <Option value="Maathakal">Maathakal</Option>
    </Select>
  </Form.Item>
);


class JoinWithUs extends React.Component {

  
  render(){
    // Register Form
    const { Option } = Select;

      const formItemLayout = {
        labelCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 8,
          },
        },
        wrapperCol: {
          xs: {
            span: 24,
          },
          sm: {
            span: 16,
          },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

      const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();

        const onFinish = (values) => {
          console.log('Received values of form: ', values);
        };

        const prefixSelector = (
          <Form.Item name="prefix" noStyle>
            <Select
              style={{
                width: 70,
              }}
            >
              <Option value="94">+94</Option>
            </Select>
          </Form.Item>
        );
        const [autoCompleteResult, setAutoCompleteResult] = useState([]);

        const onWebsiteChange = (value) => {
          if (!value) {
            setAutoCompleteResult([]);
          } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
          }
        };

        const websiteOptions = autoCompleteResult.map((website) => ({
          label: website,
          value: website,
        }));
        return (
          <Modal
          visible={visible}
          title="JoinWithUs"
          okText="JoinWithUs"
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
          <Form
            {...formItemLayout}
            form={form}
            name="JoinWithUs"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="Company Name"
              label="Company Name"
              rules={[
                {
                  type: 'Comapny Name',
                  message: 'The input is not valid Company Name!',
                },
                {
                  required: true,
                  message: 'Please input your Company Name!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input
                addonBefore={prefixSelector}
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>

            <Form.Item
              name="Location"
              label="Location"
              rules={[
                {
                  required: true,
                  message: 'Please input your Location!',
                },
              ]}
            >
              <Input
                addonBefore={Location}
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>






            <Form.Item
              name="Address"
              label="Address"
              rules={[
                {
                  type: 'Address',
                  message: 'The input is not valid Address!',
                },
                {
                  required: true,
                  message: 'Please input your Address',
                },
              ]}
            >
              <Input />
            </Form.Item>


            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                },
              ]}
              {...tailFormItemLayout}
            >
              <Checkbox>
                I have read the <a href="Checkbox">agreement</a>
              </Checkbox>
            </Form.Item>
            
          </Form>
          </Modal>
        );
      };
    //popup and form code
   
      
      const CollectionsPage = () => {
        const [visible, setVisible] = useState(false);
      

       //With this, we will get all field values.
        const onCreate = (values) => {
          console.log('Received values of form: ', values);
          setVisible(false);
        };
      
        return (
          <div>
            <Button
              type="primary"
              onClick={() => {
                setVisible(true);
              }}
            >
              JoinWithUs
            </Button>
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
export default JoinWithUs;