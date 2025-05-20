import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import { Badge } from 'primereact/badge';
import { useNavigate } from 'react-router';

export default function Navbar() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate('/')
        },
        {
            label: 'Projects',
            icon: 'pi pi-briefcase',
            command: () => navigate('/projects') 
        },
        {
            label: 'Docs',
            icon: 'pi pi-file',
            disabled: true
        },
        {
            label: 'About',
            icon: 'pi pi-info-circle',
            disabled: true
        }
    ];

    const start = (
        <span className="text-xl font-semibold" style={{ color: 'var(--text-color)' }}>
            Bug Sight
        </span>
    );

    const end = (
        <div className="flex align-items-center gap-3">
            <InputText icon = "pi pi-search" placeholder="Search" className="p-inputtext-sm" />
            <Button icon="pi pi-bell" className="p-button-text p-button-rounded p-button-sm" />
            <Avatar label="JD" size="small" className="ml-2" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />
            <Button icon="pi pi-power-off" label="Logout" severity="danger" onClick={ () => { navigate('/login') }}/>
        </div>
    );

    return (
        <div className="card" style={{ borderRadius: '0', backgroundColor: 'var(--surface-ground)' }}>
            <Menubar model={items} start={start} end={end} style={{ borderRadius: '0' }} />
        </div>
    );
}
