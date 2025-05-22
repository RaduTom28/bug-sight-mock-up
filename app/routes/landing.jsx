import React from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { Image } from "primereact/image";
import { useNavigate } from "react-router";

const featureData = [
  { "id" : 1,
    "title" : "AI-powered Code Review", 
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
  },
  { "id" : 2,
    "title" : "Error and Contribution Statistics", 
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
  },
  { 
    "id" : 3,
    "title" : "Upcoming: Secret Vault", 
    "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
  },
];

const LandingPage = () => {
  const navigate = useNavigate();


  return (
    <div className="p-6 space-y-8">
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold mb-4">BugSight</h1>
        <Image src="/logo.png" alt="Logo" width="150"></Image>
        <p className="text-lg max-w-2xl mx-auto">
          Motto
        </p>
        <div className="mt-6">
          <Button label="Get Started" className="p-button-raised p-button-lg" onClick={() => navigate('/dashboard')}/>
        </div>
      </section>

      <Divider />

      <section className="grid md:grid-cols-3 gap-4 justify-content-center">
        {featureData.map((item) => (
          <Card key={item.id} title={item.title} className="shadow-md">
            <p className="m-0">
              {item.description}
            </p>
          </Card>
        ))}
      </section>

      <Divider />

      <section className="text-center py-10">
        <h2 className="text-2xl font-semibold mb-2">Stay Updated</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="flex justify-content-center gap-2">
          <InputText placeholder="Your email" className="w-64" />
          <Button label="Subscribe" />
        </div>
      </section>

      <footer className="text-center text-sm py-4 text-gray-500">
        © 2025 BugSight. Lorem ipsum dolor sit amet.
      </footer>
    </div>
  );
};

export default LandingPage;
