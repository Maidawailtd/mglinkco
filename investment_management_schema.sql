[?25l
    Select a project:                                                                                                    
                                                                                                                         
  >  1. glfuhznjonxilfjkbowz [name: supabase-fuchsia-ocean, org: vercel_icfg_525DzIPXi2lUThpH0NKOlKW7, region: us-east-1]
    2. hbuxmoqruzpmqydppcla [name: supabase-indigo-window, org: vercel_icfg_BUxYowJExJAUDPsVDrtTcBcF, region: us-east-1] 
    3. byhtbfoavjyjoyptdhfq [name: mglinkospbasdb, org: vercel_icfg_BUxYowJExJAUDPsVDrtTcBcF, region: us-east-1]         
                                                                                                                         
                                                                                                                         
                                                                                                                         
                                                                                                                         
                                                                                                                         
                                                                                                                         
    ↑/k up • ↓/j down • / filter • q quit • ? more                                                                       
                                                                                                                         [0D[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[2K[1A[0D[2K [0D[2K[?25h[?1002l[?1003l[?1006l-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Users Table (linked to Supabase auth)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  risk_profile TEXT CHECK (risk_profile IN ('conservative', 'moderate', 'aggressive')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Investment Portfolios
CREATE TABLE portfolios (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  target_allocation JSONB, -- e.g., {"stocks": 60, "bonds": 30, "crypto": 10}
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Asset Classes
CREATE TABLE asset_classes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE, -- e.g., "US Stocks", "Cryptocurrency"
  type TEXT NOT NULL CHECK (type IN ('stock', 'bond', 'crypto', 'etf', 'real_estate', 'commodity'))
);

-- 4. Investments (Individual Assets)
CREATE TABLE investments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  portfolio_id UUID REFERENCES portfolios(id) ON DELETE CASCADE,
  asset_class_id UUID REFERENCES asset_classes(id),
  ticker_symbol TEXT, -- e.g., "AAPL", "BTC-USD"
  name TEXT NOT NULL,
  purchase_date DATE NOT NULL,
  purchase_price DECIMAL(18, 4) NOT NULL,
  quantity DECIMAL(18, 8) NOT NULL,
  current_price DECIMAL(18, 4), -- Can be updated via API
  notes TEXT,
  UNIQUE(portfolio_id, ticker_symbol)
);

-- 5. Transactions
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  investment_id UUID REFERENCES investments(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('buy', 'sell', 'dividend', 'split')),
  date TIMESTAMPTZ NOT NULL,
  amount DECIMAL(18, 4) NOT NULL,
  quantity DECIMAL(18, 8) NOT NULL,
  fee DECIMAL(18, 4) DEFAULT 0,
  notes TEXT
);

-- 6. Historical Values (Time-Series Data)
CREATE TABLE historical_values (
  investment_id UUID REFERENCES investments(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  value DECIMAL(18, 4) NOT NULL,
  PRIMARY KEY (investment_id, date)
);

-- 7. Watchlist
CREATE TABLE watchlist (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  ticker_symbol TEXT NOT NULL,
  notes TEXT,
  PRIMARY KEY (user_id, ticker_symbol)
);
