'use client';
import styles from './page.module.css';

export default function Home() {
  function buyUSDT() {}

  function sellUSDT() {}

  function claimDebitCard() {}

  function claimAvailableEarnings() {}

  function copyReferralLink() {}

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          Grow your wealth with Groot
        </h1>
        <h1 style={{ color: 'white', textAlign: 'center' }}>
          No loss, just gains
        </h1>
      </div>

      <div className={styles.container}>
        <h4 style={{ fontSize: '1.5rem', fontWeight: '400' }}>Groot</h4>
        <div className={styles.price}>
          <h6 style={{ fontSize: '1.25rem', fontWeight: '400' }}>
            Buy Price : {}
          </h6>
          <h6 style={{ fontSize: '1.25rem', fontWeight: '400' }}>
            Sell Price : {}
          </h6>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.wallet}>
          <h6 style={{ fontSize: '1.25rem', fontWeight: '400' }}>
            Groot Liquidity :
          </h6>
          <h6 style={{ fontSize: '1.25rem', fontWeight: '400' }}>
            USDT Wallet :
          </h6>
          <h6 style={{ fontSize: '1.25rem', fontWeight: '400' }}>
            Groot Balance :
          </h6>
        </div>

        <div className={styles.input}>
          <input
            type="text"
            style={{
              outline: 'none',
              border: 'none',
              backgroundColor: 'white',
              color: 'black',
              ':focus': { outline: 'none' },
            }}
          />
          <p>USDT</p>
        </div>

        <div className={styles.walletButtons}>
          <button onClick={buyUSDT}>Buy</button>
          <button onClick={sellUSDT}>Sell</button>
        </div>
      </div>

      <div className={styles.container}>
        <h6
          style={{
            fontSize: '1.25rem',
            fontWeight: '400',
            marginBottom: '1rem',
          }}
        >
          Earning Limit
        </h6>
        <div className={styles.earningLimit}>
          <div
            style={{
              height: '0.5rem',
              backgroundColor: 'white',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '0.2rem',
            }}
            className={styles.range}
          >
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: ' 10%',
                height: ' 100%',
                backgroundColor: 'brown',
              }}
            />
          </div>
          <span>10%</span>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.usdt2Local}>
          <p>USDT to Local Currency International Debit card </p>
          <button
            style={{
              backgroundColor: 'rgba(143, 101, 20, 0.57)',
              padding: '0.5rem 2rem',
              cursor: 'pointer',
              color: '#8F6514',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className={styles.usdt2LocalButton}
            onClick={claimDebitCard}
          >
            Claim
          </button>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.referralEarnings}>
          <h6
            style={{
              fontSize: '1.25rem',
              fontWeight: '400',
              textAlign: 'center',
            }}
          >
            Referral Earnings
          </h6>
          <div className={styles.availableEarnings}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  textAlign: 'center',
                }}
              >
                Available Earnings
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: '400',
                  textAlign: 'center',
                }}
              >
                150 $
              </p>
            </div>
            <button
              style={{
                backgroundColor: 'rgba(143, 101, 20, 0.57)',
                padding: '0.5rem 2rem',
                cursor: 'pointer',
                color: '#8F6514',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={claimAvailableEarnings}
            >
              Claim
            </button>
          </div>

          <hr />

          <div className={styles.otherEarnings}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
              }}
            >
              <p
                style={{
                  fontWeight: '400',
                  textAlign: 'center',
                }}
              >
                Direct Earnings
              </p>
              <p
                style={{
                  fontWeight: '400',
                  textAlign: 'center',
                }}
              >
                100 $
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
              }}
            >
              <p
                style={{
                  fontWeight: '400',
                  textAlign: 'center',
                }}
              >
                Total Earnings
              </p>
              <p
                style={{
                  fontWeight: '400',
                  textAlign: 'center',
                }}
              >
                250 $
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.referralLinks}>
          <h6
            style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              marginBottom: '1rem',
            }}
          >
            Referral Link
          </h6>
          <p style={{ marginBottom: '1rem' }}>
            Earn upto 25% of the USDT used to Invest from anyone who uses your
            referral link
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="text"
              style={{
                outline: 'none',
                border: 'none',
                backgroundColor: 'white',
                color: 'black',
                ':focus': { outline: 'none' },
                height: '2rem',
                width: '60%',
              }}
            />
            <button
              style={{
                padding: '0.5rem 2rem',
                color: '#8F6514',
                backgroundColor: 'rgba(143, 101, 20, 0.57)',
                border: 'none',
                letterSpacing: '0.1rem',
                cursor: 'pointer',
              }}
              onClick={copyReferralLink}
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.information}>
          <h6
            style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            Information:
          </h6>
          <p style={{ marginBottom: '1rem' }}>
            1. For first 2 Direct, you will be getting 10% Direct referral
            income
          </p>
          <p style={{ marginBottom: '1rem' }}>
            2. After making 2 Direct, you will be eligible for 25% Direct
            referral income
          </p>
          <p
            style={{
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              textAlign: 'center',
              marginTop: '2rem',
              marginBottom: '1.5rem',
              fontWeight: '200',
            }}
          >
            Referral Commissions
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
              gap: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.2rem',
              }}
            >
              <p>Level 1</p>
              <p>10%-25%</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.2rem',
              }}
            >
              <p>Level 2</p>
              <p>2%</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.2rem',
              }}
            >
              <p>Level 3</p>
              <p>1%</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.2rem',
              }}
            >
              <p>Level 4</p>
              <p>0.5%</p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.2rem',
              }}
            >
              <p>Level 5</p>
              <p>0.5%</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
