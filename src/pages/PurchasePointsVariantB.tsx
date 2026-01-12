import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/takeflight/Button';
import { Typography } from '../components/takeflight/Typography';

const colors = {
  background: { white: '#ffffff', container: '#f4f1ea', primary: '#001edc' },
  text: { heading: '#001edc', body: '#212121', weak: '#757575', white: '#ffffff' },
  border: { default: '#e0e0e0', light: '#f7f7f5' }
};

const getRewardTier = (points: number) => {
  if (points >= 100000) return { reward: "an international business class upgrade", threshold: 100000 };
  if (points >= 50000) return { reward: "a business class flight upgrade", threshold: 50000 };
  if (points >= 25000) return { reward: "a domestic flight upgrade", threshold: 25000 };
  if (points >= 10000) return { reward: "a hotel night upgrade", threshold: 10000 };
  return { reward: "a lounge access pass", threshold: 10000 };
};

const getProgressMessage = (currentBalance: number, tier: any) => {
  const totalPoints = currentBalance;
  if (totalPoints >= tier.threshold) return `You have enough for ${tier.reward}!`;
  const pointsShort = tier.threshold - totalPoints;
  return `Just ${pointsShort.toLocaleString()} points short of ${tier.reward}.`;
};

const Slider = ({ value, onChange, min, max }: any) => {
  const percentage = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ width: '100%' }}>
      <input type="range" min={min} max={max} step={1000} value={value} onChange={(e) => onChange(parseInt(e.target.value))}
        style={{ width: '100%', height: '7px', borderRadius: '999px', appearance: 'none', cursor: 'pointer',
          background: `linear-gradient(to right, ${colors.background.primary} 0%, ${colors.background.primary} ${percentage}%, ${colors.background.container} ${percentage}%, ${colors.background.container} 100%)`, outline: 'none' }} />
      <style>{`input[type="range"]::-webkit-slider-thumb { appearance: none; width: 24px; height: 24px; border-radius: 50%; background: ${colors.background.primary}; cursor: pointer; border: 3px solid white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
        input[type="range"]::-moz-range-thumb { width: 24px; height: 24px; border-radius: 50%; background: ${colors.background.primary}; cursor: pointer; border: 3px solid white; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }`}</style>
    </div>
  );
};

export default function PurchasePointsVariantB() {
  const navigate = useNavigate();
  const [pointsAmount, setPointsAmount] = useState(10000);
  const currentBalance = 8000;
  const costAUD = (pointsAmount * 0.02).toFixed(2);
  
  const selectedTier = getRewardTier(pointsAmount);
  const balanceAfterPurchase = currentBalance + pointsAmount;
  const progressTier = getRewardTier(balanceAfterPurchase);
  const progressMessage = getProgressMessage(currentBalance, progressTier);
  
  const handlePurchase = () => navigate('/checkout', { state: { pointsAmount, costAUD } });

  return (
    <div style={{ backgroundColor: colors.background.white, minHeight: '100vh', display: 'flex', flexDirection: 'column', maxWidth: '390px', margin: '0 auto', width: '100%' }}>
      <div style={{ backgroundColor: colors.background.white, padding: '12px', paddingTop: '60px', borderBottom: `1px solid ${colors.border.default}` }}>
        <button style={{ width: '36px', height: '36px', borderRadius: '1000px', border: `1px solid ${colors.border.default}`, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background.white, cursor: 'pointer' }}>
          <span style={{ fontSize: '20px' }}>←</span>
        </button>
      </div>
      
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px', gap: '44px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Typography variant="h1" weight="medium">Purchase points</Typography>
            <Typography variant="body" weight="regular">Need a few more points? Top up and unlock the rewards you've been eyeing. Flights, upgrades, and more are just a few clicks away.</Typography>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ backgroundColor: colors.background.container, borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <Typography variant="h6" weight="bold">Your Current Balance</Typography>
                <Typography variant="h6" weight="bold">{currentBalance.toLocaleString()} pts</Typography>
              </div>
              <Typography variant="caption" color={colors.text.weak}>Available points to redeem</Typography>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px' }}>
              <Typography variant="caption" color={colors.text.weak} align="center">
                {progressMessage}
              </Typography>
            </div>
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography variant="h1" weight="medium">Select how many points</Typography>
              <Typography variant="body" weight="regular">Points must be in multiples of 1,000, up to a maximum of 250,000 per year.</Typography>
            </div>
            
            <div style={{ backgroundColor: colors.background.container, borderRadius: '16px', padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
              <Typography variant="h2" weight="bold" align="center">{pointsAmount.toLocaleString()} pts</Typography>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', width: '100%' }}>
                <Typography variant="body" style={{ fontSize: '14px', fontWeight: 600 }}>
                  Cost: AUD ${costAUD}
                </Typography>
                <Typography variant="body" align="center" style={{ fontSize: '14px' }}>
                  Typically covers {selectedTier.reward}
                </Typography>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px 0' }}>
              <Slider value={pointsAmount} onChange={setPointsAmount} min={1000} max={250000} />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="label" weight="medium">1,000 pts</Typography>
                <Typography variant="label" weight="medium">250,000 pts</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: 'auto', borderTop: `1px solid ${colors.border.light}`, padding: '14px 24px 12px' }}>
        <Button variant="primary" size="lg" fullWidth={true} onClick={handlePurchase}>
          Purchase {pointsAmount.toLocaleString()} pts
        </Button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px', marginTop: '8px' }}>
          <div style={{ width: '133px', height: '5px', backgroundColor: '#000000', borderRadius: '100px' }} />
        </div>
      </div>
    </div>
  );
}
