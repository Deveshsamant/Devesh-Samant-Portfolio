# 🏆 Clash Royale API Setup Guide

## Getting Live Data for Player #2R9U9J8QQ

Your portfolio currently shows mock data for your Clash Royale stats. To display **live, real-time data** from Supercell's servers, follow these steps:

### 📋 Prerequisites
- Active Clash Royale account
- Player Tag: `#2R9U9J8QQ` ✅
- Developer account with Supercell

### 🔑 Step 1: Get Your API Key

1. Visit [Clash Royale Developer Portal](https://developer.clashroyale.com)
2. Create a free developer account
3. Register a new API key for your application
4. Copy your API token

### 🛠️ Step 2: Configure Your Portfolio

1. Open `hobbies.js` in your portfolio
2. Find this line near the top:
   ```javascript
   // const CLASH_ROYALE_API_KEY = 'YOUR_API_KEY_HERE';
   ```
3. Uncomment and replace with your actual API key:
   ```javascript
   const CLASH_ROYALE_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMx...';
   ```

### 🚀 Step 3: Test Your Connection

1. Save the file and refresh your website
2. Navigate to the Hobbies page
3. Click "Refresh" on the Clash Royale card
4. Check browser console (F12) for API response

### 📊 What Data You'll Get

With live API access, your card will show:
- **Current Trophies**: Real-time trophy count
- **Best Trophies**: Your all-time highest
- **King Level**: Your actual tower level
- **Total Wins**: Lifetime victories
- **Clan Information**: Current clan name/tag
- **Arena**: Current competitive arena

### 🔧 Current Implementation

**Player Tag**: `#2R9U9J8QQ`  
**Mock Stats** (displayed when API unavailable):
- Trophies: ~5,847
- Best: ~6,123  
- King Level: 14
- Wins: ~1,456

### 🛡️ Security Notes

- Keep your API key private
- Don't commit it to public repositories
- Consider using environment variables for production
- API keys can be regenerated if compromised

### 📞 Support

If you encounter issues:
1. Check API key validity
2. Verify player tag format (`#2R9U9J8QQ`)
3. Review browser console for errors
4. Ensure CORS policies allow API access

---

*Need help? Check the [Clash Royale API Documentation](https://developer.clashroyale.com/documentation) for detailed guides.*