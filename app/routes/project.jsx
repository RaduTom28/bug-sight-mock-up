import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import CodeStepper from '../components/CodeStepper'; 
import ChatWidget from '../components/ChatWidget';
import Navbar from '../components/Navbar';

export default function Project() {
   
    return (
        <div className="h-screen" style={{ backgroundColor: 'var(--surface-ground)' }}>
            <ChatWidget />
            <Navbar></Navbar>
            <div className="flex justify-content-center pt-5" style={{ backgroundColor: 'var(--surface-ground)' }}>
            <div style={{ width: '100%', maxWidth: '1100px' }}>
                <Card
                    title={
                        <div className="flex align-items-center justify-content-between">
                            <span className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>
                                Code snippet review
                            </span>
                            <Button
                                icon="pi pi-arrow-left"
                                className="p-button-text p-button-sm"
                                onClick={() => navigate('/')}
                                label="Back"
                            />
                        </div>
                    }
                    subTitle={
                        <div style={{ color: 'var(--text-color-secondary)' }}>
                            <p className="m-0">
                                <i className="pi pi-user mr-2" />
                                Main Developer: <strong>John Doe</strong>
                            </p>
                            <p className="m-0 mt-1">
                                <i className="pi pi-github mr-2" />
                                <a
                                    href="https://github.com/RaduTom28/bug-sight-mock-up"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'var(--primary-color)',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    View on GitHub
                                </a>
                            </p>
                        </div>
                    }
                    className="shadow-5"
                    style={{
                        backgroundColor: 'var(--surface-card)',
                        color: 'var(--text-color)',
                        padding: '1.5rem',
                        borderRadius: '12px',
                    }}
                    >
                        <div className="mt-4">
                            <CodeStepper />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
        
        
    );
}
