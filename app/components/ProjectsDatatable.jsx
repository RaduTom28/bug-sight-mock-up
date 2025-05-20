import React from 'react';
import { useNavigate } from 'react-router'
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const projectData = Array.from({ length: 20 }).map((_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
    developer: `Dev ${String.fromCharCode(65 + (i % 10))}`, // Dev A - Dev J
    github: `https://github.com/user/project-${i + 1}`
}));

export default function ProjectsDatatable() {
    const navigate = useNavigate();

    const githubTemplate = (rowData) => (
        <Button
            icon="pi pi-github"
            className="p-button-text p-button-sm"
            onClick={() => window.open(rowData.github, '_blank')}
            label="GitHub"
        />
    );

    const developerTemplate = (rowData) => (
        <div className="flex align-items-center gap-2">
            <i className="pi pi-user text-primary" />
            <span>{rowData.developer}</span>
        </div>
    );

    const viewButtonTemplate = () => (
        <Button
            label="View"
            icon="pi pi-eye"
            className="p-button-sm"
            onClick={() => navigate('/project')}
        />
    );

    return (
        <div className="flex justify-content-center p-4" style={{ backgroundColor: 'var(--surface-ground)' }}>
            <Card
                title="Available Projects"
                subTitle="Explore the available debugging projects"
                className="w-full"
                style={{ maxWidth: '1100px', backgroundColor: 'var(--surface-card)', color: 'var(--text-color)' }}
            >
                <DataTable
                    value={projectData}
                    scrollable
                    scrollHeight="400px"
                    className="p-datatable-sm"
                    style={{ minWidth: '100%' }}
                >
                    <Column field="id" header="#" style={{ width: '50px' }} />
                    <Column field="title" header="Project Title" style={{ minWidth: '200px' }} />
                    <Column header="Main Developer" body={developerTemplate} style={{ minWidth: '180px' }} />
                    <Column header="GitHub" body={githubTemplate} style={{ minWidth: '140px' }} />
                    <Column header="Actions" body={viewButtonTemplate} style={{ minWidth: '120px' }} />
                </DataTable>
            </Card>
        </div>
    );
}
