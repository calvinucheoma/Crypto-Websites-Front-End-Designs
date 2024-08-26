export const requestType = [
  {
    key: 'createUser',
    label: 'Create user account',
    method: 'POST',
    endPoint: 'create_user_account',
  },
  {
    key: 'bnbDeposit',
    label: 'BNB Deposit',
    method: 'POST',
    endPoint: 'get_account_balance_bnb',
  },
  {
    key: 'usdtDeposit',
    label: 'USDT Deposit',
    method: 'POST',
    endPoint: 'get_account_balance_usdt',
  },
  {
    key: 'bnbWithdrawal',
    label: 'Withdrawal for BNB',
    method: 'POST',
    endPoint: 'withdrawBNB',
  },
  {
    key: 'usdtWithdrawal',
    label: 'Withdrawal for USDT',
    method: 'POST',
    endPoint: 'withdrawUSDT',
  },
];

export const jsonDataForRequests = {
  create_user_account: `
{
  "data": {
    "email": USER Email,
    "first_name": USER First name,
    "last_name": USER Last name,
    "mobile": USER Mobile number
  },
  "header": {
    "cca_key": Coin Connect API Key,
    "cca_secret": Coin Connect API Secret
  }
}
`,

  get_account_balance_bnb: `
{
  "data": {
    "address": USER/MERCHANT’s address,
    "currency": "BNB" 
  },
  "header": {
      "cca_key": Coin Connect API Key,
      "cca_secret": Coin Connect API Secret
  }
}
    `,

  get_account_balance_usdt: `
{
  "data": {
    "address": USER/MERCHANT’s address,
    "currency": "USDT" 
  },
  "header": {
      "cca_key": Coin Connect API Key,
      "cca_secret": Coin Connect API Secret
  }
}
    `,

  withdrawBNB: `
{
  "data": {
    "currency": BNB,
    "to_address": Receiver address,
    "txn_id": merchant’s transaction id,
    "user_address": USER/Sender address,
    "user_email": USER’s email,
    "value_in_usd": value in BNB
  },
  "header": {
      "cca_key": Coin Connect API Key,
      "cca_secret": Coin Connect API Secret
  }
}
    `,

  withdrawUSDT: `
{
  "data": {
    "address": USER/MERCHANT’s address,
    "currency": "USDT" 
  },
  "header": {
      "cca_key": Coin Connect API Key,
      "cca_secret": Coin Connect API Secret
  }
}
    `,
};

export const jsonDataForResponses = {
  create_user_account: `
{
  "status": OK/NOTOK,
  "message": {
    "address": USER’s generated address,
    "merchant_address": MERCHANT’s address,
    "profile": {
      "first_name": USER First name,
      "last_name": USER Last name,
      "email": USER Email,
      "mobile": USER Mobile number
    }
  }
}


`,

  get_account_balance_bnb: `
{
  "status": "OK",
  "response": {
    "message": "Success",
    "data": {
      "value_to_merchant_in_usd": in USD,
      "value_to_merchant_in_bnb": in BNB,
      "conversion_factor": Market rate in USD per BNB,
      "txn_hash": "Transaction Hash",
      "request": "balance check",
      "address": "User Address",
      "currency": "BNB",
      "transfer_fee_in_usd": 1
    }
  }
}

    `,

  get_account_balance_usdt: `
{
  "status": "OK",
  "response": {
    "message": "Success",
    "data": {
      "value_to_merchant_in_usd": USD,
      "balance_in_usd": USD,
      "txn_hash": "Transaction Hash",
      "request": "balance check",
      "address": "User Address",
      "currency": "USDT",
      "transfer_fee_in_usd": 1
    }
  }
}

    `,

  withdrawBNB: `
{
  "status": "OK",
  "response": {
    "message": "withdraw success",
    "data": {
      "withdraw_value_in_usd": USD,
      "withdraw_value_in_bnb": BNB,
      "conversion_factor": Market rate in USD per BNB,
      "Balance_in_usd": Merchant Wallet Balance in USD,
      "Balance_in_bnb": Merchant Wallet Balance in BNB,
      "txn_hash": "Transaction Hash",
      "request": "withdraw",
      "currency": "BNB",
      "user_email": "USER's email address",
      "txn_id": "transaction id from merchant's server",
      "transfer_fee_in_usd": 1
    }
  }
}

    `,

  withdrawUSDT: `
{
  "status": "OK",
  "response": {
    "message": "withdraw success",
    "data": {
      "withdraw_value_in_usd": Withdrawal Amount,
      "balance_in_usd":Merchant balance,
      "txn_hash": "Transaction Hash",
      "request": "withdraw",
      "currency": "USDT",
      "user_email": "USER's email address",
      "txn_id": "transaction id from merchant's server",
      "transfer_fee_in_usd": [
        1,
      ]
    }
  }
}

    `,
};
