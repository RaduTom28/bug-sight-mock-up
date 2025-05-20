import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { FloatLabel } from 'primereact/floatlabel';
import { useNavigate } from 'react-router';        

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const toast = useRef(null);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'johndoe' && password === 'password') {
            toast.current.show({
                severity: 'success',
                summary: 'Login Successful',
                detail: `Welcome, ${username}!`,
                life: 3000
            });
            window.setTimeout(() => navigate("/"), 1500);

        } else {
            toast.current.show({
                severity: 'error',
                summary: 'Login Failed',
                detail: 'Invalid username or password.',
                life: 3000
            });
        }
    };

    return (
        <div className="p-fluid">
            <Toast ref={toast} />
            <div className="field mb-5">
                <FloatLabel>    
                    <label htmlFor="username">Username</label>
                    <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </FloatLabel>
            </div>
            <div className="field mb-5">
                <FloatLabel>
                    <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} toggleMask />
                    <label htmlFor="password">Password</label>
                </FloatLabel>
            </div>
            
            <Button label="Login" icon="pi pi-sign-in" className="p-mt-2" onClick={handleLogin} />
        </div>
    );
};

export default LoginForm;
