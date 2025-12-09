import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container } from '../components/takeflight/Container';
import { Typography } from '../components/takeflight/Typography';

const colors = {
  background: {
    white: '#ffffff',
    container: '#f4f1ea',
  },
  text: {
    heading: '#001edc',
    body: '#212121',
    weak: '#757575',
  },
  border: {
    default: '#e0e0e0',
  }
};

const PiggyIllustration = () => (
  <div style={{ 
    width: '199px', 
    height: '220px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    position: 'relative'
  }}>
    <div style={{ position: 'absolute', top: '20px', left: '50%', transform: 'translateX(-50%)' }}>
      <div style={{ display: 'flex', gap: '8px', marginBottom: '4px', justifyContent: 'center' }}>
        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#A669BE', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
      </div>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#743F8A', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#BA88CE', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} />
      </div>
    </div>
    <div style={{
      position: 'absolute',
      bottom: '40px',
      width: '130px',
      height: '95px',
      backgroundColor: '#E4D0B8',
      borderRadius: '60% 60% 48% 48%',
      boxShadow: '0 4px 8px rgba(0,0,0,0.08)'
    }}>
      <div style={{
        position: 'absolute',
        top: '15px',
        right: '10px',
        width: '20px',
        height: '30px',
        backgroundColor: '#C49F72',
        borderRadius: '50% 50% 50% 0',
        transform: 'rotate(25deg)'
      }} />
      <div style={{
        position: 'absolute',
        top: '30px',
        right: '35px',
        width: '6px',
        height: '6px',
        backgroundColor: '#552569',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '25px',
        right: '25px',
        width: '42px',
        height: '28px',
        backgroundColor: '#C49F72',
        borderRadius: '50%',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          width: '6px',
          height: '8px',
          backgroundColor: '#A1826B',
          borderRadius: '50%'
        }} />
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '6px',
          height: '8px',
          backgroundColor: '#A1826B',
          borderRadius: '50%'
        }} />
      </div>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '5px',
        width: '20px',
        height: '20px',
        border: '4px solid #C49F72',
        borderRadius: '50%',
        borderRight: 'none',
        borderBottom: 'none',
        transform: 'rotate(-45deg)'
      }} />
    </div>
  </div>
);

const LineItem = ({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
    <Typography variant="body" style={{ fontWeight: bold ? 600 : 300 }}>{label}</Typography>
    <Typography variant="body" style={{ fontWeight: bold ? 600 : 500 }}>{value}</Typography>
  </div>
);

const Divider = () => (
  <div style={{ width: '100%', height: '1px', backgroundColor: colors.border.default }} />
);

export default function PurchaseSuccessScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const stateData: any = location.state || {};
  const pointsAmount = stateData.pointsAmount || 10000;
  const transactionId = stateData.transactionId || '0IVAD00000009Pt2AI';
  const currentDate = new Date().toLocaleDateString('en-AU', { 
    day: '2-digit', 
    month: 'short', 
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  const previousBalance = 8000;
  const newBalance = previousBalance + pointsAmount;

  return (
    <div style={{ backgroundColor: colors.background.white, minHeight: '100vh', display: 'flex', flexDirection: 'column', maxWidth: '390px', margin: '0 auto' }}>
      <div style={{ backgroundColor: colors.background.white, padding: '12px', paddingTop: '60px', borderBottom: `1px solid ${colors.border.default}` }}>
        <button onClick={() => navigate('/')} style={{ width: '36px', height: '36px', borderRadius: '1000px', border: `1px solid ${colors.border.default}`, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background.white, cursor: 'pointer' }}>
          <span style={{ fontSize: '20px' }}>←</span>
        </button>
      </div>
      <Container maxWidth="sm">
        <div style={{ padding: '46px 24px', display: 'flex', flexDirection: 'column', gap: '12px', minHeight: '558px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', textAlign: 'center' }}>
            <PiggyIllustration />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <Typography variant="h1" weight="medium" align="center">Purchase successful!</Typography>
              <Typography variant="body" align="center">Your points have been added to your account.</Typography>
            </div>
          </div>
          <div style={{ backgroundColor: colors.background.container, borderRadius: '16px', padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '12px' }}>
            <LineItem label="Purchase amount" value={`${pointsAmount.toLocaleString()}pts`} />
            <LineItem label="Transaction ID" value={transactionId} />
            <Divider />
            <LineItem label="Date" value={currentDate} />
            <LineItem label="New balance" value={`${newBalance.toLocaleString()} pts`} bold={true} />
          </div>
        </div>
      </Container>
    </div>
  );
}
