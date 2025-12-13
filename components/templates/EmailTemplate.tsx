import * as React from 'react';
import { Html, Body, Container, Text, Heading, Section, Hr, Tailwind } from '@react-email/components';

interface EmailProps {
  email: string;
  name: string;
  subject: string;
  message: string;
}

const main = {
    backgroundColor: '#ffffff',
    fontFamily: 'sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '580px',
    border: '1px solid #eaeaea',
    borderRadius: '4px',
};

const EmailTemplate = ({ email, name, subject, message }: EmailProps) => (
  // Tailwind component helps style the email
  <Tailwind>
    <Html lang="en">
      <Body style={main}>
        <Container style={container}>
          <Heading style={{ fontSize: '24px', textAlign: 'center', color: '#333' }}>
            New Contact Message from Portfolio
          </Heading>
          
          <Section style={{ padding: '0 40px' }}>
            <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#555' }}>
              You have received a new contact submission:
            </Text>
            
            <Hr style={{ borderColor: '#eaeaea', margin: '20px 0' }} />

            <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#333' }}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#333' }}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#333' }}>
              <strong>Subject:</strong> {subject}
            </Text>

            <Hr style={{ borderColor: '#eaeaea', margin: '20px 0' }} />
            
            <Heading as="h3" style={{ fontSize: '18px', color: '#333' }}>Message:</Heading>
            <Text style={{ fontSize: '16px', lineHeight: '24px', color: '#555', whiteSpace: 'pre-wrap' }}>
              {message}
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default EmailTemplate;