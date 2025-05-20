
import React from 'react';
import { Card } from 'primereact/card';
import LoginForm from '../components/LoginForm';

export default function Login(){
    return (
        <div
            className="flex justify-content-center align-items-center"
            style={{ height: '100vh', backgroundColor: 'var(--surface-ground)' }}
        >
            <Card title="Login" style={{ width: '350px' }}>
                <LoginForm />
            </Card>
        </div>
    );
};


