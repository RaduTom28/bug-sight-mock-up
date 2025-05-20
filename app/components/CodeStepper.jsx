import React, { useState } from 'react';
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

export default function CodeStepper() {
    const [activeStep, setActiveStep] = useState(0);

    const codeWithBug = `

    int main() {
        printf("Hello World!") // Missing semicolon
        return 0;
    }
        `.trim();

    const codeWithHighlight = `

    int main() {
        printf("Hello World!") // Missing semicolon
        return 0;
    }
    `.trim(); 

    return (
        <div className="card" style={{ maxWidth: '700px', margin: 'auto' }}>
            <Stepper activeStep={activeStep} onStepChange={(e) => setActiveStep(e.index)} linear>
                <StepperPanel header="Original code">
                    <SyntaxHighlighter language="c" style={materialLight} showLineNumbers>
                        {codeWithBug}
                    </SyntaxHighlighter>
                    <div className="mt-4 flex justify-content-between">
                        <Button label="Next" icon="pi pi-arrow-right" onClick={() => setActiveStep(1)} />
                    </div>
                </StepperPanel>

                <StepperPanel header="Highlight Bug">
                        <SyntaxHighlighter
                            language="c"
                            style={materialLight}
                            showLineNumbers
                            wrapLines
                            lineProps={(lineNumber) =>
                                lineNumber === 2
                                    ? { style: { backgroundColor: 'rgba(255, 0, 0, 0.2)' } }
                                    : {}
                            }
                        >
                            {codeWithHighlight}
                        </SyntaxHighlighter>
                    <div className="mt-4 flex justify-content-between">
                        <Button label="Back" icon="pi pi-arrow-left" onClick={() => setActiveStep(0)} />
                        <Button label="Done" icon="pi pi-check" severity="success" />
                    </div>
                </StepperPanel>
            </Stepper>
        </div>
    );
}

const codeBlockContainer = {
    backgroundColor: '#3b3b3b',
    borderRadius: '8px',
    padding: '1rem',
    fontSize: '14px',
    overflowX: 'auto',
};
