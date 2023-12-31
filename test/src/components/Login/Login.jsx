import { RequiredRule } from 'devextreme-react/data-grid';
import { Form, ButtonItem, EmailRule, SimpleItem } from 'devextreme-react/form';
import { useCallback, useRef } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const submitButtonOptions = {
  text: 'Login',
  useSubmitBehavior: true,
};

const Login = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const changePasswordMode = useCallback((name) => {
    const editor = formRef.current.instance.getEditor(name);
    editor.option('mode', editor.option('mode') === 'text' ? 'password' : 'text');
  }, []);

  const getPasswordOptions = useCallback(
    () => ({
      mode: 'password',
      valueChangeEvent: 'keyup',
      buttons: [
        {
          name: 'password',
          location: 'after',
          options: {
            stylingMode: 'text',
            icon: 'eyeopen',
            onClick: () => changePasswordMode('Password'),
          },
        },
      ],
    }),
    [changePasswordMode]
  );

  const onLogin = useCallback((e) => {
    localStorage.setItem('token', 'dummyToken');
    navigate('/users');
    e.preventDefault();
  }, []);

  return (
    <div className="login-wrapper">
      <form onSubmit={onLogin}>
        <Form id="form" ref={formRef} className="login-form">
          <SimpleItem dataField="Username" isRequired={true} className="a" />
          <SimpleItem dataField="Email">
            <RequiredRule />
            <EmailRule />
          </SimpleItem>
          <SimpleItem dataField="Password" editorOptions={getPasswordOptions()}>
            <RequiredRule message="Password is required" />
          </SimpleItem>
          <ButtonItem buttonOptions={submitButtonOptions} />
        </Form>
      </form>
    </div>
  );
};

export default Login;
