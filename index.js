const extend = require('xtend');
const createRandomId = require('json-rpc-random-id')();
const request = require("запрос");

module.exports = SolanaQuery;

функция addressToPublicKey(адрес) {
  вернуть новый Web3.PublicKey(адрес);
}

/**
 * Функция конструктора
 * Init SolanaQuery
 * 
 * @param {string} RPCEND укажите URL конечной точки RPC
 * @void
 */
функция SolanaQuery(rpcEndpoint){
  if (typeof(rpcEndpoint)==="string") {
    this._rpcEndpoint = rpcEndpoint;
  }
  еще {
    throw (новая ошибка("rpcEndpoint недопустима. Пожалуйста, проверьте!"));
  }
}

// Функция запроса
// Параметры: https://docs.solana.com/apps/jsonrpc-api
SolanaQuery.prototype.getAccountInfo =                      generateFnFor('getAccountInfo')
SolanaQuery.prototype.getBalance =                          generateFnFor('getBalance')
SolanaQuery.prototype.getBlockCommitment =                  generateFnFor('getBlockCommitment')
SolanaQuery.prototype.getBlockTime =                        generateFnFor('getBlockTime')
SolanaQuery.prototype.getClusterNodes =                     generateFnFor('getClusterNodes')
SolanaQuery.prototype.getEpochSchedule =                    generateFnFor('getEpochSchedule');
SolanaQuery.prototype.getConfirmedBlock =                   generateFnFor('getConfirmedBlock')
SolanaQuery.prototype.getConfirmedBlocks =                  generateFnFor('getConfirmedBlocks')
SolanaQuery.prototype.getConfirmedBlocksWithLimit =         generateFnFor('getConfirmedBlocksWithLimit')
SolanaQuery.prototype.getConfirmedSignaturesForAddress =    generateFnFor('getConfirmedSignaturesForAddress')
SolanaQuery.prototype.getConfirmedSignaturesForAddress2 =   generateFnFor('getConfirmedSignaturesForAddress2')
SolanaQuery.prototype.getConfirmedTransaction =             generateFnFor('getConfirmedTransaction')
SolanaQuery.prototype.getEpochInfo =                        generateFnFor('getEpochInfo')
SolanaQuery.prototype.getEpochSchedule =                    generateFnFor('getEpochSchedule')
SolanaQuery.prototype.getFeeCalculatorForBlockhash =        generateFnFor('getFeeCalculatorForBlockhash')
SolanaQuery.prototype.getFeeRateGovernor =                  generateFnFor('getFeeRateGovernor')
SolanaQuery.prototype.getFees =                             generateFnFor('getFees')
SolanaQuery.prototype.getFirstAvailableBlock =              generateFnFor('getFirstAvailableBlock')
SolanaQuery.prototype.getGenesisHash =                      generateFnFor('getGenesisHash')
SolanaQuery.prototype.getIdentity =                         generateFnFor('getIdentity')
SolanaQuery.prototype.getInflationGovernor =                generateFnFor('getInflationGovernor')
SolanaQuery.prototype.getInflationRate =                    generateFnFor('getInflationRate')
SolanaQuery.prototype.getLargestAccounts =                  generateFnFor('getLargestAccounts')
SolanaQuery.prototype.getLeaderSchedule =                   generateFnFor('getLeaderSchedule')
SolanaQuery.prototype.getMinimumBalanceForRentExemption =   generateFnFor('getMinimumBalanceForRentExemption')
SolanaQuery.prototype.getMultipleAccounts =                 generateFnFor('getMultipleAccounts')
SolanaQuery.prototype.getProgramAccounts =                  generateFnFor('getProgramAccounts')
SolanaQuery.prototype.getRecentBlockhash =                  generateFnFor('getRecentBlockhash')
SolanaQuery.prototype.getRecentPerformanceSamples =         generateFnFor('getRecentPerformanceSamples')
SolanaQuery.prototype.getSignatureStatuses =                generateFnFor('getSignatureStatuses')
SolanaQuery.prototype.getSlot =                             generateFnFor('getSlot')
SolanaQuery.prototype.getSlotLeader =                       generateFnFor('getSlotLeader')
SolanaQuery.prototype.getStakeActivation =                  generateFnFor('getStakeActivation')
SolanaQuery.prototype.getSupply =                           generateFnFor('getSupply')
SolanaQuery.prototype.getTokenAccountBalance =              generateFnFor('getTokenAccountBalance')
SolanaQuery.prototype.getTokenAccountsByDelegate =          generateFnFor('getTokenAccountsByDelegate')
SolanaQuery.prototype.getTokenAccountsByOwner =             generateFnFor('getTokenAccountsByOwner')
SolanaQuery.prototype.getTokenLargestAccounts =             generateFnFor('getTokenLargestAccounts')
SolanaQuery.prototype.getTokenSupply =                      generateFnFor('getTokenSupply')
SolanaQuery.prototype.getTransactionCount =                 generateFnFor('getTransactionCount')
SolanaQuery.prototype.GetVersion =                          generateFnFor('GetVersion')
SolanaQuery.prototype.getVoteAccounts =                     generateFnFor('getVoteAccounts')
SolanaQuery.prototype.minimumLedgerSlot =                   generateFnFor('minimumLedgerSlot')
SolanaQuery.prototype.requestAirdrop =                      generateFnFor('requestAirdrop')
SolanaQuery.prototype.sendTransaction =                     generateFnFor('sendTransaction')
SolanaQuery.prototype.simulateTransaction =                 generateFnFor('simulateTransaction')
SolanaQuery.prototype.setLogFilter =                        generateFnFor('setLogFilter')
SolanaQuery.prototype.validatorExit =                       generateFnFor('validatorExit')
SolanaQuery.prototype.accountSubscribe =                    generateFnFor('accountSubscribe')
SolanaQuery.prototype.accountUnsubscribe =                  generateFnFor('accountUnsubscribe')
SolanaQuery.prototype.programSubscribe =                    generateFnFor('programSubscribe')
SolanaQuery.prototype.programUnsubscribe =                  generateFnFor('programUnsubscribe')
SolanaQuery.prototype.signatureSubscribe =                  generateFnFor('signatureSubscribe')
SolanaQuery.prototype.signatureUnsubscribe =                generateFnFor('signatureUnsubscribe')
SolanaQuery.prototype.slotSubscribe =                       generateFnFor('slotSubscribe')
SolanaQuery.prototype.slotUnsubscribe =                     generateFnFor('slotUnsubscribe')
SolanaQuery.prototype.rootSubscribe =                       generateFnFor('rootSubscribe')
SolanaQuery.prototype.rootUnsubscribe =                     generateFnFor('rootUnsubscribe')
SolanaQuery.prototype.voteSubscribe =                       generateFnFor('voteSubscribe')
SolanaQuery.prototype.voteUnsubscribe =                     generateFnFor('voteUnsubscribe')

SolanaQuery.prototype.solToLamports = функция(solAmount) {
  return Math.trunc(solAmount*(10**(9)));
}

SolanaQuery.prototype.SendAsync = функция(opts, cb){
  запрос({
    метод: 'POST',
    uri: this._rpcEndpoint,
    json: createPayload(opts)
  }, функция (ошибка, ответ, тело) {
    пусть err = null;
    if (error) err = новая ошибка('SolanaQuery - RPC Error - ' + error);
    else if (response==null) err = new Error('SolanaQuery - RPC Error - No response');
    else if (response.StatusCode!=200) err = новая ошибка('SolanaQuery - RPC Error - Ошибка ответа с StatusCode: ' + response.StatusCode);
    else if (body==null) err = new Error('SolanaQuery - RPC Error - No json data');
    else if (body.error!=null) err = new Error('SolanaQuery - RPC Error: ' + body.error.code + " (" + body.error.message + ")");
    else if (body.result==null) err = new Error('SolanaQuery - RPC Error - No result data');
    if (err) возврат cb(err);
    //console.log("тело", body);
    cb(null, body.result);
  });
}

// // util
функция generateFnFor(имя метода){
   функция возврата(){
    const self = this;
    var args = [].slice.call(аргументы);
    var cb = args.pop();
    self.SendAsync({
      метод: имя_метода,
      параметры: args,
    }, cb);
  }
}

функция createPayload(данные){
  return extend({
    // по умолчанию
    id: createRandomId(),
    jsonrpc: '2.0',
    параметры: [],
    // указано пользователем
  }, данные);
}
