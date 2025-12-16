import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container } from '../components/takeflight/Container';
import { Typography } from '../components/takeflight/Typography';

const colors = {
  background: { white: '#ffffff', container: '#f4f1ea' },
  text: { heading: '#001edc', body: '#212121', weak: '#757575' },
  border: { default: '#e0e0e0' }
};

// Video Animation Component
const PiggyIllustration = () => (
  <div style={{ width: '199px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
      <source src="/piggy.mp4" type="video/mp4" />
      <source src="/piggy.webm" type="video/webm" />
      <source src="/piggy.mov" type="video/quicktime" />
      Your browser doesn't support video.
    </video>
  </div>
);

const LineItem = ({ label, value, bold = false }: { label: string; value: string; bold?: boolean }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
    <Typography variant="body" style={{ fontWeight: bold ? 600 : 300 }}>{label}</Typography>
    <Typography variant="body" style={{ fontWeight: bold ? 600 : 500 }}>{value}</Typography>
  </div>
);

const Divider = () => <div style={{ width: '100%', height: '1px', backgroundColor: colors.border.default }} />;

export default function PurchaseSuccessScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const stateData: any = location.state || {};
  const pointsAmount = stateData.pointsAmount || 10000;
  const transactionId = stateData.transactionId || '0IVAD00000009Pt2AI';
  const currentDate = new Date().toLocaleDateString('en-AU', { day: '2-digit', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true });
  const previousBalance = 8000;
  const newBalance = previousBalance + pointsAmount;

  return (
    <div style={{ backgroundColor: colors.background.white, minHeight: '100vh', display: 'flex', flexDirection: 'column', maxWidth: '390px', margin: '0 auto', width: '100%' }}>
      <div style={{ backgroundColor: colors.background.white, padding: '12px', paddingTop: '60px', borderBottom: `1px solid ${colors.border.default}` }}>
        <button onClick={() => navigate('/')} style={{ width: '36px', height: '36px', borderRadius: '1000px', border: `1px solid ${colors.border.default}`, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background.white, cursor: 'pointer' }}>
          <span style={{ fontSize: '20px' }}>←</span>
        </button>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px', gap: '12px' }}>
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
    </div>
  );
}
