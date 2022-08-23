import React, { useState } from 'react';

import '../App.css';

//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';

// form and modal modules
import {
  Form,
  Input,
  // Tooltip,
  // Cascader,
  Select,
  // Row,
  // Col,
  Checkbox,
  Button,
  // AutoComplete,
  Modal
} from 'antd';
import "antd/dist/antd.css";
// import { QuestionCircleOutlined } from '@ant-design/icons';


class Signup extends React.Component {

  
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
              <Option value="86">+94</Option>
            </Select>
          </Form.Item>
        );
        // const [autoCompleteResult, setAutoCompleteResult] = useState([]);

        // const onWebsiteChange = (value) => {
        //   if (!value) {
        //     setAutoCompleteResult([]);
        //   } else {
        //     setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        //   }
        // };

        // const websiteOptions = autoCompleteResult.map((website) => ({
        //   label: website,
        //   value: website,
        // }));
        return (
          <Modal
          visible={visible}
          title="SINGUP"
          okText="Signup"
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
            name="Signup"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"



              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
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
              Signup
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
export default Signup;