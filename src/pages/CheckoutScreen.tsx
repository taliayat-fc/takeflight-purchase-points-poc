import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/takeflight/Button';
import { Typography } from '../components/takeflight/Typography';
import { InputText } from '../components/takeflight/InputText';

const colors = {
  background: { white: '#ffffff', container: '#f4f1ea', primary: '#001edc' },
  text: { heading: '#001edc', body: '#212121', weak: '#757575', white: '#ffffff' },
  border: { default: '#e0e0e0' }
};

export default function CheckoutScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const stateData: any = location.state || {};
  const pointsAmount = stateData.pointsAmount || 10000;
  const costAUD = stateData.costAUD || '200.00';
  const newBalance = 8000 + pointsAmount;

  const handlePayment = () => {
    navigate('/success', { state: { pointsAmount, costAUD, transactionId: '0IVAD00000009Pt2AI' } });
  };

  return (
    <div style={{ 
      backgroundColor: colors.background.white, 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      maxWidth: '390px',
      margin: '0 auto',
      width: '100%'
    }}>
      <div style={{ backgroundColor: colors.background.white, padding: '12px', paddingTop: '60px', borderBottom: `1px solid ${colors.border.default}` }}>
        <button onClick={() => navigate('/')} style={{ width: '36px', height: '36px', borderRadius: '1000px', border: `1px solid ${colors.border.default}`, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background.white, cursor: 'pointer' }}>
          <span style={{ fontSize: '20px' }}>←</span>
        </button>
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px', gap: '46px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Typography variant="h1" weight="medium">Complete your purchase</Typography>
            <Typography variant="body">Review and confirm your points purchase.</Typography>
          </div>
          <div style={{ backgroundColor: colors.background.container, borderRadius: '16px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <Typography variant="h6" weight="bold">Points to Purchase</Typography>
                <Typography variant="h6" weight="bold">{pointsAmount.toLocaleString()} pts</Typography>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="caption" color={colors.text.weak}>Balance after purchase</Typography>
                <Typography variant="caption" color={colors.text.weak}>{newBalance.toLocaleString()} pts</Typography>
              </div>
            </div>
            <div style={{ height: '1px', backgroundColor: colors.border.default }} />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body" style={{ fontSize: '14px' }}>Purchase amount</Typography>
              <Typography variant="body" style={{ fontSize: '14px' }}>AUD ${costAUD}</Typography>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <Typography variant="h2" weight="medium">Payment summary</Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="price">Total - AUD</Typography>
              <Typography variant="price">${costAUD}</Typography>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="caption" color={colors.text.weak}>Remaining Amount</Typography>
              <Typography variant="caption" color={colors.text.weak}>$0.00</Typography>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: 'auto', borderTop: `1px solid ${colors.border.default}`, padding: '16px 24px' }}>
        <Button variant="primary" size="lg" fullWidth={true} onClick={handlePayment}>Pay</Button>
        <Typography variant="caption" color={colors.text.body} style={{ textAlign: 'center', marginTop: '8px' }}>By continuing, you agree to World360 Rewards Terms.</Typography>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
          <div style={{ width: '133px', height: '5px', backgroundColor: '#000000', borderRadius: '100px' }} />
        </div>
      </div>
    </div>
  );
}
